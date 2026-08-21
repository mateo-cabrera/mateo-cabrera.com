import type { ExperienceEntry } from './types';

import logoNovasweb from '$lib/assets/Experience/logo-novasweb.png?enhanced';
import logoEndlessPaper from '$lib/assets/Experience/endless-paper-logo.svg';
import epitechAcademyLogo from '$lib/assets/Education/logo-epitech-academy.svg';

export const experience: ExperienceEntry[] = [
	{
		logo: epitechAcademyLogo,
		alt: 'Logo d’Epitech Academy',
		title: 'Product Manager & Lead Dev (Stage)',
		company: 'Epitech Academy',
		location: 'Strasbourg, France',
		date: 'Avril 2026 - Août 2026',
		metrics: [{ value: '16', label: 'versions livrées en un mois' }],
		bullets: [
			'Product Manager et lead dev de Jump, la plateforme de stages de découverte d’Epitech Academy, déployée sur huit campus pilotes.',
			'Poste né de TekCamp, un CRM des Coding Clubs que j’avais développé seul et de ma propre initiative pour le campus de Strasbourg : la direction d’Epitech Academy m’a recruté pour porter la même idée à l’échelle nationale.',
			'Arbitrage du périmètre sous pression en conditions réelles : animation des rituels, décisions de coupe assumées et mise en place d’une « Definition of Done » stricte.',
			'Tenue d’une cadence de 16 versions mises en production en un mois, en étroite collaboration avec un Lead DevOps et un Lead Qualité.',
			'Responsabilité de la conformité RGPD sur une base d’utilisateurs mineurs, jusqu’aux parcours de consentement parental.',
			'Encadrement technique des choix de stack et d’architecture, dont le détail de mise en œuvre figure sur la fiche du projet Jump.'
		],
		tags: [
			'SvelteKit',
			'PostgreSQL',
			'Prisma',
			'BetterAuth',
			'Product Management',
			'Méthodes Agiles',
			'Scrum'
		]
	},
	{
		logo: logoNovasweb,
		alt: 'Logo d’auto-entrepreneur',
		title: 'Développeur Full-Stack Freelance',
		company: 'Auto-entrepreneur',
		location: 'Strasbourg, France',
		date: '2024 - Aujourd’hui',
		bullets: [
			'Développeur full-stack indépendant pour des clients réels, seul interlocuteur du cadrage à la mise en production.',
			'Epitech Academy parmi les clients : je poursuis le développement de Jump sous contrat, y compris pendant mon année au Japon.',
			'Projets livrés allant de la landing page optimisée pour le référencement naturel à l’application web ou mobile complète.'
		],
		tags: [
			'SvelteKit',
			'React Native',
			'PocketBase',
			'TypeScript',
			'Node.js',
			'Développement Full-Stack'
		]
	},
	{
		logo: logoEndlessPaper,
		alt: 'Logo d’Endless Paper',
		title: 'Stagiaire en Développement Web Full-Stack',
		company: 'Epiphanie',
		location: 'Strasbourg, France',
		date: 'Juillet 2024 - Décembre 2024',
		bullets: [
			'Stage full-stack chez Epiphanie, sur le produit Endless Paper : support client automatisé et outillage interne.',
			'Développement d’un chatbot et de sa plateforme d’administration pour le site web d’Endless Paper, réduisant considérablement les demandes d’assistance client par e-mail.',
			'Conception et mise en œuvre d’un système « Human In The Loop » pour permettre une intervention fluide d’un agent humain dans les conversations du chatbot.',
			'Optimisation du chatbot et de la plateforme d’administration en utilisant SvelteKit, les Server-Sent Events (SSE) et des outils de développement assistés par l’IA.',
			'Contribution à l’amélioration de l’API et au développement d’une nouvelle page « Intégration Web » pour Endless Paper.'
		],
		tags: [
			'SvelteKit',
			'Botpress',
			'SSE',
			'Nginx',
			'SQLite',
			'Prisma',
			'JavaScript',
			'TypeScript',
			'Développement assisté par l’IA',
			'Développement Full-Stack'
		]
	}
];
