import type { ExperienceEntry } from './types';

import logoNovasweb from '$lib/assets/Experience/logo-novasweb.png?enhanced';
import logoEndlessPaper from '$lib/assets/Experience/endless-paper-logo.svg';
import epitechAcademyLogo from '$lib/assets/Education/logo-epitech-academy.svg';

export const experience: ExperienceEntry[] = [
	{
		logo: epitechAcademyLogo,
		alt: "Logo d'Epitech Academy",
		title: 'Product Manager & Lead Dev (Stage)',
		company: 'Epitech Academy',
		location: 'Strasbourg, France',
		date: 'Avril 2026 - Août 2026',
		metrics: [
			{ value: '8', label: 'campus pilotes' },
			{ value: '800+', label: 'talents onboardés' },
			{ value: '16', label: 'versions en 1 mois' }
		],
		bullets: [
			'Direction produit et développement technique de la plateforme Jump, gérant les stages de découverte pour 8 campus pilotes (800+ talents onboardés).',
			'Migration de la stack technique vers SvelteKit, PostgreSQL et Prisma ORM pour résoudre les problèmes de scalabilité lors des pics de charge (appels de présence simultanés).',
			"Conception de l'architecture de données avec une séparation stricte entre l'identité (BetterAuth) et le métier, et respect rigoureux du RGPD pour les utilisateurs mineurs.",
			"Pilotage Agile du projet en conditions réelles : animation des rituels, arbitrage du scope sous pression et mise en place d'une 'Definition of Done' stricte.",
			"Tenue d'une cadence de livraison soutenue avec 16 versions mises en production en un mois, en étroite collaboration avec un Lead DevOps et un Lead Qualité."
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
			'Réalisations de projets allant de landing pages optimisées pour le référencement naturel en passant par des applications web et mobiles complètes.',
			'Fourniture de solutions personnalisées adaptées aux besoins des clients, garantissant des performances élevées et une expérience utilisateur optimale.',
			'Travail avec des technologies modernes, notamment TypeScript, SvelteKit et React Native.',
			'Gestion du cycle de vie complet des projets, y compris la planification, le développement et le déploiement.'
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
			'Développement d’un chatbot et de sa plateforme d’administration pour le site web d’Endless Paper, réduisant considérablement les demandes d’assistance client par e-mail.',
			'Conception et mise en œuvre d’un système « Human In The Loop » pour permettre une intervention fluide d’un agent humain dans les conversations du chatbot.',
			'Optimisation du chatbot et de la plateforme d’administration en utilisant SvelteKit, les Événements Envoyés par le Serveur (SSE) et des outils de développement assistés par l’IA.',
			'Contribution à l’amélioration de l’API et au développement d’une nouvelle page « Intégration Web » pour Endless Paper.',
			'Acquisition d’une expertise dans les technologies web modernes, le développement assisté par l’IA et les meilleures pratiques en ingénierie logicielle.'
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
