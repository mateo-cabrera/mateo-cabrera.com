/**
 * Sert le build et pilote un Chrome headless via le DevTools Protocol.
 *
 * Aucune dépendance npm : Node fournit WebSocket en global depuis la 22, et le
 * chromium de Playwright est déjà en cache. Une dépendance de dev en moins pour
 * un site dont l'intérêt est justement de n'en avoir qu'une en production.
 */
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, readFileSync, rmSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { homedir, tmpdir } from 'node:os';

export const CHROME = join(homedir(), '.cache/ms-playwright/chromium-1228/chrome-linux64/chrome');

const TYPES = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.woff2': 'font/woff2',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.svg': 'image/svg+xml',
	'.webm': 'video/webm',
	'.mp4': 'video/mp4',
	'.avif': 'image/avif',
	'.webp': 'image/webp',
	'.pdf': 'application/pdf'
};

export function requireBuild() {
	if (existsSync('build/index.html')) return;
	console.error('✗ build/ absent. Lance `bun run build` d’abord.');
	process.exit(1);
}

export function requireChrome() {
	if (existsSync(CHROME)) return;
	console.error(`✗ chromium introuvable : ${CHROME}`);
	console.error('  Installe-le avec `npx playwright install chromium`.');
	process.exit(1);
}

/** Serveur statique minimal sur un port libre. */
export async function serveBuild() {
	const server = createServer((req, res) => {
		const path = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
		let file = join('build', path === '/' ? 'index.html' : path);
		if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
		if (!existsSync(file)) return void res.writeHead(404).end();
		res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
		res.end(readFileSync(file));
	});
	await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
	return { origin: `http://127.0.0.1:${server.address().port}`, close: () => server.close() };
}

/** Chrome headless avec le port de debug, plus un client CDP minimal. */
export async function launchChrome() {
	const profile = join(tmpdir(), `cv-cdp-${process.pid}`);
	const chrome = spawn(
		CHROME,
		[
			'--headless',
			'--disable-gpu',
			'--no-sandbox',
			'--hide-scrollbars',
			'--remote-debugging-port=0',
			`--user-data-dir=${profile}`
		],
		{ stdio: ['ignore', 'ignore', 'pipe'] }
	);

	// Chrome annonce le port retenu sur stderr.
	const port = await new Promise((resolve, reject) => {
		let buffer = '';
		const timer = setTimeout(() => reject(new Error('chromium n’a pas démarré à temps')), 20000);
		chrome.stderr.on('data', (chunk) => {
			buffer += chunk;
			const match = buffer.match(/ws:\/\/127\.0\.0\.1:(\d+)\//);
			if (match) {
				clearTimeout(timer);
				resolve(Number(match[1]));
			}
		});
	});

	return {
		async page(url) {
			const target = await (
				await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, {
					method: 'PUT'
				})
			).json();
			return connect(target.webSocketDebuggerUrl);
		},
		close() {
			chrome.kill();
			rmSync(profile, { recursive: true, force: true });
		}
	};
}

async function connect(wsUrl) {
	const ws = new WebSocket(wsUrl);
	const pending = new Map();
	let id = 0;
	await new Promise((resolve, reject) => {
		ws.onopen = resolve;
		ws.onerror = reject;
	});
	ws.onmessage = (event) => {
		const message = JSON.parse(event.data);
		const waiter = pending.get(message.id);
		if (!waiter) return;
		pending.delete(message.id);
		message.error
			? waiter.reject(new Error(JSON.stringify(message.error)))
			: waiter.resolve(message.result);
	};
	const send = (method, params = {}) =>
		new Promise((resolve, reject) => {
			const messageId = ++id;
			pending.set(messageId, { resolve, reject });
			ws.send(JSON.stringify({ id: messageId, method, params }));
		});
	return {
		send,
		eval: async (expression) =>
			(await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }))
				.result.value,
		close: () => ws.close()
	};
}

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
