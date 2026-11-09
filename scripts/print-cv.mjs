/**
 * Imprime /cv en PDF.
 *
 * Le PDF servi est l'impression de la route, pas un second document : c'est ce
 * qui garantit qu'il dit la même chose que le site. Le pendant de cette
 * garantie est `check-cv-fresh.mjs`, qui empêche de déployer une impression
 * périmée.
 *
 * Prérequis : un build à jour dans dist/, et le chromium de Playwright en
 * cache. Aucune dépendance npm — on parle au navigateur en ligne de commande.
 */
import { spawn } from 'node:child_process';
import { existsSync, writeFileSync, statSync } from 'node:fs';
import { contentHash, STAMP } from './cv-hash.mjs';
import { CHROME, requireChrome, serveBuild } from './lib/preview.mjs';

const OUT = 'public/CV-Mateo-Cabrera.pdf';

if (!existsSync('dist/cv/index.html')) {
	console.error('✗ dist/cv/index.html absent. Lance `bun run build` d’abord.');
	process.exit(1);
}
requireChrome();

// Le build servi sur un port libre, le temps de l'impression.
const server = await serveBuild();

const chrome = spawn(CHROME, [
	'--headless',
	'--disable-gpu',
	'--no-sandbox',
	'--hide-scrollbars',
	'--virtual-time-budget=10000',
	'--run-all-compositor-stages-before-draw',
	'--no-pdf-header-footer',
	`--print-to-pdf=${OUT}`,
	`${server.origin}/cv/`
]);

const code = await new Promise((resolve) => chrome.on('exit', resolve));
server.close();

if (code !== 0 || !existsSync(OUT)) {
	console.error(`✗ l’impression a échoué (code ${code}).`);
	process.exit(1);
}

writeFileSync(STAMP, contentHash() + '\n');
const size = (statSync(OUT).size / 1024).toFixed(0);
console.log(`✓ ${OUT} réimprimé depuis /cv (${size} Ko) — empreinte de contenu enregistrée.`);
