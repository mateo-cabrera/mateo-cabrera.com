/**
 * Imprime /cv en PDF.
 *
 * Le PDF servi est l'impression de la route, pas un second document : c'est ce
 * qui garantit qu'il dit la même chose que le site. Le pendant de cette
 * garantie est `check-cv-fresh.mjs`, qui empêche de déployer une impression
 * périmée.
 *
 * Prérequis : un build à jour dans build/, et le chromium de Playwright en
 * cache. Aucune dépendance npm — on parle au navigateur en ligne de commande.
 */
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { homedir } from 'node:os';
import { contentHash, STAMP } from './cv-hash.mjs';

const OUT = 'public/CV-Mateo-Cabrera.pdf';
const CHROME = join(homedir(), '.cache/ms-playwright/chromium-1228/chrome-linux64/chrome');
const TYPES = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.woff2': 'font/woff2',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.svg': 'image/svg+xml',
	'.webm': 'video/webm',
	'.avif': 'image/avif',
	'.webp': 'image/webp'
};

if (!existsSync('dist/cv/index.html')) {
	console.error('✗ dist/cv/index.html absent. Lance `bun run build` d’abord.');
	process.exit(1);
}
if (!existsSync(CHROME)) {
	console.error(`✗ chromium introuvable : ${CHROME}`);
	console.error('  Installe-le avec `npx playwright install chromium`.');
	process.exit(1);
}

// Serveur statique minimal sur un port libre, le temps de l'impression.
const server = createServer((req, res) => {
	const path = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
	let file = join('dist', path === '/' ? 'index.html' : path);
	if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
	if (!existsSync(file)) {
		res.writeHead(404).end();
		return;
	}
	res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
	res.end(readFileSync(file));
});

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const { port } = server.address();

const chrome = spawn(CHROME, [
	'--headless',
	'--disable-gpu',
	'--no-sandbox',
	'--hide-scrollbars',
	'--virtual-time-budget=10000',
	'--run-all-compositor-stages-before-draw',
	'--no-pdf-header-footer',
	`--print-to-pdf=${OUT}`,
	`http://127.0.0.1:${port}/cv/`
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
