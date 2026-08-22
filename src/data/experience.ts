import type { ExperienceEntry } from './types';

import logoNovasweb from '~/assets/Experience/logo-novasweb.png';
import logoEndlessPaper from '~/assets/Experience/endless-paper-logo.svg?url';
import epitechAcademyLogo from '~/assets/Education/logo-epitech-academy.svg?url';

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
			'16 versions mises en production en un mois, avec un Lead DevOps et un Lead Qualité, en coupant le périmètre à chaque itération plutôt que la qualité.',
			'Cadence tenue avec des agents de code : je découpe une fonctionnalité en tâches qu’un agent mène seul, j’arbitre entre l’agent en ligne de commande et le chat selon la tâche, et je garde la revue, l’architecture et la décision de couper.',
			'Responsabilité de la conformité RGPD sur une base d’utilisateurs mineurs, jusqu’aux parcours de consentement parental.'
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
			'Projets livrés de la landing page optimisée pour le référencement naturel à l’application web ou mobile complète.'
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
			'Chatbot et plateforme d’administration livrés pour le site d’Endless Paper, ce qui a fait nettement baisser les demandes d’assistance client par e-mail.',
			'Système « Human In The Loop » pour qu’un agent humain reprenne la main dans une conversation en cours, en SvelteKit et Server-Sent Events.'
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
