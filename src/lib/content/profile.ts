import type { Metric, SocialLink } from './types';
import profileImage from '$lib/assets/profile-image.png?enhanced';

/** Identité et proposition de valeur — verbatim depuis Header.svelte:15-46. */
export const profile = {
	name: 'Mateo Cabrera',
	role: 'Développeur Web Full Stack',
	location: 'Strasbourg, France',
	tagline: 'Créer de vrais produits pour de vrais clients, pas juste des projets supplémentaires.',
	photo: profileImage,
	photoAlt: 'Mateo Cabrera'
};

/**
 * Le bandeau de preuve du premier viewport.
 *
 * Les trois premiers chiffres sont verbatim dans les bullets de l'expérience
 * Epitech Academy et du projet Jump. Le quatrième est un comptage des projets
 * de cette même liste (Forge FeveR et Unseen Anomaly), pas une affirmation
 * nouvelle. Rien d'autre n'est affiché comme chiffre nulle part sur le site.
 */
export const headlineMetrics: Metric[] = [
	{ value: '800+', label: 'lycéens onboardés' },
	{ value: '8', label: 'campus pilotes' },
	{ value: '16', label: 'versions en 1 mois' },
	{ value: '2', label: 'jams livrées' }
];

export const socials: SocialLink[] = [
	{
		id: 'github',
		label: 'GitHub',
		handle: 'mateo-cabrera',
		href: 'https://github.com/mateo-cabrera'
	},
	{
		id: 'email',
		label: 'Email',
		handle: 'mateo.cabrera@epitech.eu',
		href: 'mailto:mateo.cabrera@epitech.eu'
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		handle: 'mateo-cabrera',
		href: 'https://www.linkedin.com/in/mateo-cabrera/'
	}
];

export const cv = {
	href: '/CV-Mateo-Cabrera.pdf',
	/** La page dont le PDF est l'impression. */
	route: '/cv',
	label: 'Télécharger le CV',
	filename: 'CV-Mateo-Cabrera.pdf'
};
