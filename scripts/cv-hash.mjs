/**
 * L'empreinte de ce que le PDF imprime.
 *
 * Elle porte sur la page /cv **rendue**, pas sur son source. La première
 * version hachait les fichiers de `src/lib/content` et `src/routes/cv`, ce qui
 * périmait le PDF dès qu'on touchait à un commentaire : une ligne de doc dans
 * `types.ts` a fait échouer un build alors que rien de ce que la feuille
 * affiche n'avait bougé. Une alarme qui se déclenche pour rien apprend à
 * ignorer l'alarme.
 *
 * Deux composantes, et seulement elles :
 *
 * 1. **Le texte affiché** — balises retirées, blancs normalisés. Insensible aux
 *    commentaires, au formatage et à l'ordre des imports ; sensible à la
 *    moindre chaîne qui change, y compris dans un composant que le glob de
 *    fichiers d'origine ne couvrait pas.
 * 2. **Le contenu des feuilles de style qu'elle charge** — par leurs octets, pas
 *    par leur nom : le nom porte un hash de build qui change pour des raisons
 *    sans rapport avec le CV. Une mise en page modifiée périme bien le PDF.
 *
 * Les `<script>` et les `modulepreload` sont exclus : leurs empreintes bougent
 * à chaque rebuild du site et n'atteignent jamais le papier.
 *
 * Le fichier d'empreinte vit à la racine, pas dans static/ : tout ce qui est
 * dans static/ est copié dans le build et servi publiquement.
 */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const PAGE = 'build/cv.html';
export const STAMP = '.cv-hash';

export function contentHash() {
	if (!existsSync(PAGE)) {
		throw new Error(`${PAGE} est absent : lance \`vite build\` avant de calculer l'empreinte.`);
	}
	const html = readFileSync(PAGE, 'utf8');

	const text = html
		.replace(/<script[\s\S]*?<\/script>/gi, ' ')
		.replace(/<style[\s\S]*?<\/style>/gi, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&(?:[a-z]+|#\d+);/gi, ' ')
		.replace(/\s+/g, ' ')
		.trim();

	const hash = createHash('sha256').update(text);

	const sheets = [...html.matchAll(/<link\b[^>]*>/gi)]
		.filter((m) => /rel=["']?stylesheet/i.test(m[0]))
		.map((m) => m[0].match(/href=["']([^"']+)["']/)?.[1])
		.filter(Boolean)
		.map((href) => join(dirname(PAGE), href.replace(/^\.\//, '')))
		.sort();

	if (!sheets.length) throw new Error(`${PAGE} ne charge aucune feuille de style : rendu suspect.`);
	for (const sheet of sheets) hash.update(readFileSync(sheet));

	return hash.digest('hex');
}
