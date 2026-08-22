/**
 * Mesure le contraste WCAG de chaque nœud de texte, sur la page rendue.
 *
 * Les couleurs sont lues telles que le navigateur les calcule, puis résolues
 * par un canvas — Chrome renvoie les couleurs calculées dans l'espace d'auteur,
 * donc en oklch pour ce projet, et un parseur naïf lit `0.19 0.02 262` comme du
 * RGB et annonce des centaines de faux échecs.
 *
 * À rejouer après toute modification de copie : changer une longueur de texte
 * change les fonds sur lesquels il se pose.
 *
 * Usage : bun run a11y
 */
import { requireBuild, requireChrome, serveBuild, launchChrome, wait } from './lib/preview.mjs';

const ROUTES = ['/', '/cv/'];

const AUDIT = String.raw`(() => {
  const cv = document.createElement('canvas'); cv.width = cv.height = 1;
  const ctx = cv.getContext('2d', { willReadFrequently: true });
  const parse = (value) => {
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = '#000';
    ctx.fillStyle = value;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    let a = 1;
    const slash = String(value).match(/\/\s*([\d.]+)(%?)\s*\)/);
    const legacy = String(value).match(/^\s*(?:rgba|hsla)\([^)]*?([\d.]+)\s*\)\s*$/);
    if (slash) a = slash[2] ? +slash[1] / 100 : +slash[1];
    else if (legacy) a = +legacy[1];
    if (value === 'transparent') a = 0;
    return { r, g, b, a };
  };
  const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  const lum = (c) => 0.2126 * lin(c.r) + 0.7152 * lin(c.g) + 0.0722 * lin(c.b);
  const over = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1
  });
  const groundOf = (el) => {
    let node = el;
    while (node && node !== document.documentElement) {
      const c = parse(getComputedStyle(node).backgroundColor);
      if (c.a > 0.95) return { color: c, node };
      node = node.parentElement;
    }
    return { color: { r: 255, g: 255, b: 255, a: 1 }, node: null };
  };

  // « opacity » ne touche pas la couleur calculée : Chrome rend toujours l'émail
  // à plein, et un « opacity-80 » posé sur du vermillon passait donc pour bon ici
  // alors qu'il tombe à 4.14:1. L'atténuation se compose du texte jusqu'au nœud
  // qui porte le fond, exclu : au-delà, fond et texte s'atténuent ensemble et le
  // rapport ne bouge plus.
  const dimOf = (el, stop) => {
    let alpha = 1;
    for (let node = el; node && node !== stop; node = node.parentElement) {
      const o = parseFloat(getComputedStyle(node).opacity);
      if (Number.isFinite(o)) alpha *= o;
    }
    return alpha;
  };

  // Les révélations au scroll partent à « opacity: 0 » : sans ce forçage, tout ce
  // qui est sous la ligne de flottaison serait mesuré invisible, donc ignoré, et
  // l'audit ne couvrirait que le premier écran. Les transitions sont coupées pour
  // que l'état final soit lisible dans la foulée.
  const frozen = document.createElement('style');
  frozen.textContent = '*, *::before, *::after { transition: none !important; animation: none !important; }';
  document.head.append(frozen);
  for (const el of document.querySelectorAll('[data-reveal]')) el.dataset.reveal = 'shown';

  const failures = [];
  for (const el of document.querySelectorAll('body *')) {
    const text = [...el.childNodes]
      .filter((n) => n.nodeType === 3)
      .map((n) => n.textContent.trim())
      .join('');
    if (!text) continue;
    const style = getComputedStyle(el);
    if (style.visibility === 'hidden' || style.display === 'none') continue;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) continue;
    if (el.closest('.sr-only')) continue;

    const { color: bg, node: ground } = groundOf(el);
    const dim = dimOf(el, ground);
    if (dim < 0.05) continue;
    const ink = parse(style.color);
    const fg = over({ ...ink, a: ink.a * dim }, bg);
    const [hi, lo] = [lum(fg), lum(bg)].sort((a, b) => b - a);
    const ratio = (hi + 0.05) / (lo + 0.05);
    const size = parseFloat(style.fontSize);
    const bold = parseInt(style.fontWeight, 10) >= 700;
    const large = size >= 24 || (bold && size >= 18.66);
    const required = large ? 3 : 4.5;
    if (ratio < required)
      failures.push({
        text: text.slice(0, 44),
        ratio: +ratio.toFixed(2),
        required,
        size: +size.toFixed(1)
      });
  }
  return JSON.stringify(failures);
})()`;

requireBuild();
requireChrome();

const server = await serveBuild();
const chrome = await launchChrome();
let total = 0;

for (const route of ROUTES) {
	const page = await chrome.page('about:blank');
	await page.send('Emulation.setDeviceMetricsOverride', {
		width: 1440,
		height: 900,
		deviceScaleFactor: 1,
		mobile: false
	});
	await page.send('Page.enable');
	await page.send('Page.navigate', { url: server.origin + route });
	await wait(3000);

	const failures = JSON.parse(await page.eval(AUDIT));
	page.close();
	total += failures.length;

	console.log(`\n${route} — ${failures.length} sous le seuil`);
	for (const f of failures) {
		console.log(
			`   ${String(f.ratio).padStart(5)} (min ${f.required})  ${f.size}px  « ${f.text} »`
		);
	}
}

chrome.close();
server.close();

console.log(
	total === 0
		? '\n✓ Tous les textes passent WCAG AA sur les deux routes.'
		: `\n${total} élément(s) sous le seuil. Note : un fond fourni par un frère en position absolue produit un faux positif — vérifie au pixel avant de corriger.`
);
process.exit(0);
