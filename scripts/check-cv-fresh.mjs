/**
 * Garde-fou : interdit de déployer un PDF de CV plus vieux que son contenu.
 *
 * La page /cv se régénère à chaque build, le PDF non — c'est un fichier
 * statique. Sans ce contrôle, éditer une expérience met la page à jour et
 * laisse le PDF mentir, silencieusement, jusqu'à ce qu'un recruteur télécharge
 * la version périmée. Un build qui échoue bruyamment vaut mieux.
 */
import { existsSync, readFileSync } from 'node:fs';
import { contentHash, STAMP } from './cv-hash.mjs';

const PDF = 'public/CV-Mateo-Cabrera.pdf';

if (!existsSync(PDF)) {
	console.error(`\n✗ ${PDF} est absent.\n  Lance \`bun run cv\`.\n`);
	process.exit(1);
}

const recorded = existsSync(STAMP) ? readFileSync(STAMP, 'utf8').trim() : null;
const current = contentHash();

if (recorded !== current) {
	console.error(
		`\n✗ Le CV PDF est périmé : le contenu a changé depuis la dernière impression.\n` +
			`  Lance \`bun run cv\` pour le réimprimer, puis relance le build.\n`
	);
	process.exit(1);
}

console.log('✓ CV PDF à jour avec la couche de contenu.');
