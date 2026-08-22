/**
 * Captures de revue : plis et pages complètes, desktop et mobile.
 *
 * Le mode pleine page fait défiler la page avant de mesurer, pour que les
 * révélations au scroll soient jouées : photographier une section encore
 * invisible produit une preuve fausse, et on « corrige » ensuite un bug qui
 * n'existe pas.
 *
 * Usage : bun run shots
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { requireBuild, requireChrome, serveBuild, launchChrome, wait } from './lib/preview.mjs';

const OUT = '.impeccable/review';

/** [nom, route, largeur, hauteur, mobile, pleine page] */
const SHOTS = [
	['fold-desktop', '/', 1440, 900, false, false],
	['fold-1280', '/', 1280, 800, false, false],
	['fold-mobile', '/', 390, 844, true, false],
	['desktop', '/', 1440, 900, false, true],
	['mobile', '/', 390, 844, true, true],
	['cv', '/cv/', 1240, 1700, false, false]
];

requireBuild();
requireChrome();
mkdirSync(OUT, { recursive: true });

const server = await serveBuild();
const chrome = await launchChrome();

for (const [name, route, width, height, mobile, full] of SHOTS) {
	const page = await chrome.page('about:blank');
	// Les captures de pli sont en 2x pour être lisibles à la relecture ; les
	// pages complètes en 1x, sinon le fichier devient impossible à ouvrir.
	const scale = full ? 1 : 2;
	const metrics = { width, deviceScaleFactor: scale, mobile, screenWidth: width };

	await page.send('Emulation.setDeviceMetricsOverride', {
		...metrics,
		height,
		screenHeight: height
	});
	await page.send('Page.enable');
	await page.send('Page.navigate', { url: server.origin + route });
	await wait(2500);

	if (full) {
		await page.eval(`(async () => {
			for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
				window.scrollTo(0, y);
				await new Promise((r) => setTimeout(r, 120));
			}
			window.scrollTo(0, 0);
		})()`);
		await wait(900);
		const { cssContentSize } = await page.send('Page.getLayoutMetrics');
		const tall = Math.ceil(cssContentSize.height);
		await page.send('Emulation.setDeviceMetricsOverride', {
			...metrics,
			height: tall,
			screenHeight: tall
		});
		await wait(700);
	}

	const { data } = await page.send('Page.captureScreenshot', { format: 'png', fromSurface: true });
	writeFileSync(`${OUT}/${name}.png`, Buffer.from(data, 'base64'));
	page.close();
	console.log(`  ${OUT}/${name}.png  ${width}×${full ? 'page entière' : height} @${scale}x`);
}

chrome.close();
server.close();
console.log(`✓ ${SHOTS.length} captures écrites dans ${OUT}/`);
process.exit(0);
