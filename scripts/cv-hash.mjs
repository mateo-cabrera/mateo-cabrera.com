/**
 * L'empreinte du contenu dont le CV est le rendu.
 *
 * Le fichier d'empreinte vit à la racine, pas dans static/ : tout ce qui est
 * dans static/ est copié dans le build et servi publiquement.
 *
 * Elle ne couvre que ce qui apparaît sur la feuille : la couche de contenu et
 * le gabarit de la route /cv. Un changement de composant du site ne périme pas
 * le PDF, et n'a donc pas à faire échouer le build.
 */
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const SOURCES = ['src/lib/content', 'src/routes/cv'];
export const STAMP = '.cv-hash';

export function contentHash() {
	const files = SOURCES.flatMap((dir) =>
		readdirSync(dir, { recursive: true, withFileTypes: true })
			.filter((e) => e.isFile())
			.map((e) => join(e.parentPath ?? e.path, e.name))
	).sort();

	const hash = createHash('sha256');
	for (const file of files) {
		hash.update(file);
		hash.update(readFileSync(file));
	}
	return hash.digest('hex');
}
