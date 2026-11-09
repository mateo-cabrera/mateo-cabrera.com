import type { Project } from '~/data/types';

/**
 * L'ancre d'une carte projet, dérivée de son titre.
 *
 * Une seule fonction pour les deux bouts du lien : la carte pose cet `id`, et
 * l'annuaire des vedettes du premier viewport pointe dessus. Avant, ses trois
 * entrées menaient toutes à `#travaux`, et le visiteur qui cliquait sur
 * « Cozy Cargo » atterrissait en haut de la section, à chercher la carte.
 *
 * Dérivée plutôt que saisie dans la donnée : une ancre n'est pas du contenu,
 * et un champ de plus à tenir à la main dans `projects.ts` finirait par
 * diverger du titre qu'il est censé suivre.
 */
export function projectAnchor(project: Pick<Project, 'title'>): string {
	const slug = project.title
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
	return `projet-${slug}`;
}
