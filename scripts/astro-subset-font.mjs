/**
 * Réduit la police variable aux caractères que le site imprime réellement.
 *
 * Archivo est expédiée en une seule requête, préchargée, et le texte du premier
 * viewport n'atteint sa forme finale qu'une fois ce fichier arrivé : sur un lien
 * 4G lent, les 119 Ko d'origine plaçaient le LCP à 3.1 s dans la simulation de
 * Lighthouse. Le fichier couvrait le latin étendu et le vietnamien, soit 298
 * points de code pour une page qui en affiche une centaine.
 *
 * Le jeu de caractères n'est pas une liste tenue à la main — elle dériverait du
 * contenu au premier ajout de copie. Il est lu dans le build lui-même : tout ce
 * qui part dans le HTML ou dans le script peut finir à l'écran, donc tout ce qui
 * s'y trouve est conservé. Ajouter une expérience, un projet ou une langue ne
 * demande rien ici.
 *
 * Les deux axes de la police (`wght` 100-900, `wdth` 62-125) survivent au
 * découpage : la hiérarchie du site est bâtie sur la largeur, la figer en
 * quelques instances statiques rendrait la synthèse du navigateur visible.
 *
 * La source reste `public/fonts/archivo.woff2`, servie entière en dev. Seul le
 * fichier émis dans `dist/` est réduit.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import subsetFont from 'subset-font';

const FONT = 'fonts/archivo.woff2';

/** Les extensions dont le contenu peut atteindre le rendu. */
const SHIPPED = /\.(html|js)$/;

async function* walk(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const child = new URL(entry.name + (entry.isDirectory() ? '/' : ''), dir);
		if (entry.isDirectory()) yield* walk(child);
		else yield child;
	}
}

export default function subsetFontIntegration() {
	return {
		name: 'subset-font',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const font = new URL(FONT, dir);
				const full = await readFile(font);

				const glyphs = new Set();
				for await (const file of walk(dir)) {
					if (!SHIPPED.test(file.pathname)) continue;
					for (const char of await readFile(file, 'utf8')) glyphs.add(char);
				}

				// Le latin de base entier, même les caractères qu'aucune page n'utilise
				// aujourd'hui : ils pèsent quelques centaines d'octets et couvrent la
				// chaîne qu'un script composerait à l'exécution.
				for (let cp = 0x20; cp <= 0x7e; cp++) glyphs.add(String.fromCharCode(cp));

				const text = [...glyphs].filter((c) => c.codePointAt(0) > 0x1f).join('');
				const subset = await subsetFont(full, text, { targetFormat: 'woff2' });

				if (subset.length >= full.length) {
					logger.warn(`${FONT} : le découpage ne gagne rien, fichier laissé entier.`);
					return;
				}

				await writeFile(font, subset);
				const kb = (n) => Math.round(n / 1024);
				logger.info(
					`${FONT} : ${kb(full.length)} Ko réduits à ${kb(subset.length)} Ko, ${glyphs.size} caractères conservés.`
				);
			}
		}
	};
}
