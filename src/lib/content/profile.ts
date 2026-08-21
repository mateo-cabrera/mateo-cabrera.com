import type { Metric, SocialLink } from './types';
import profileImage from '$lib/assets/profile-image.jpg?enhanced';

/**
 * Identité et proposition de valeur.
 *
 * `location` est la seule chaîne à changer au déménagement de septembre 2026 ;
 * dériver la ville d'une date serait sur-concevoir pour un unique événement.
 * `status` porte les deux faits datés qu'un recruteur cherche en premier :
 * où il travaille aujourd'hui, et où il sera demain.
 */
export const profile = {
	name: 'Mateo Cabrera',
	role: 'Développeur Web Full Stack',
	location: 'Strasbourg, France',
	tagline: 'Créer de vrais produits pour de vrais clients, pas juste des projets supplémentaires.',
	status: [
		'Dev full-stack chez Epitech Academy, sur Jump',
		'Université d’Osaka à partir de septembre 2026'
	],
	photo: profileImage,
	photoAlt: 'Mateo Cabrera'
};

/**
 * Le bandeau de preuve du premier viewport.
 *
 * Trois chiffres, parce qu'il y en a trois qui atterrissent. Le bandeau en a
 * porté quatre : « 800+ lycéens onboardés » faisait sonner projet scolaire,
 * « 8 campus pilotes » est du vocabulaire interne Epitech illisible dehors, et
 * « 2 jams livrées » est un petit nombre dans un milieu que le lecteur ne
 * connaît pas. Un chiffre vrai mais opaque coûte plus qu'il ne rapporte à
 * l'endroit le plus visible de la page.
 *
 * Test appliqué à chacun : quelle phrase un lead technique se dit-il en le
 * lisant ? Si la réponse est « ça veut dire quoi ? », le chiffre saute.
 */
export const headlineMetrics: Metric[] = [
	{ value: '2 000', label: 'utilisateurs simultanés en production' },
	{ value: '16', label: 'versions livrées en un mois' },
	{ value: '4', label: 'jeux publiés sur itch.io' }
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
