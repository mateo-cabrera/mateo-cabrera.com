import type { SkillCategory } from './types';

/**
 * Les libellés sont portés par la donnée.
 *
 * Avant, la clé était en anglais et le libellé français vivait dans une chaîne
 * `{#if}` du template : renommer une clé cassait silencieusement l’affichage.
 * Il n’y a plus de rôle de couleur par catégorie — les six bandeaux partagent
 * un seul champ d’émail, parce que six couleurs pour six catégories ne
 * codaient rien.
 *
 * Les 27 intitulés d’origine sont verbatim (Skills.svelte:4-8), comme les 5
 * libellés (Skills.svelte:17-27). « IA & Agents » est la seule catégorie
 * ajoutée depuis : le rythme de livraison annoncé en haut de page vient de là,
 * et rien ne le disait nulle part.
 */
export const skills: SkillCategory[] = [
	{
		id: 'languages',
		label: 'Langages',
		items: ['JavaScript', 'TypeScript', 'C', 'C++', 'GDScript', 'SQL']
	},
	{
		id: 'frameworks',
		label: 'Frameworks & Librairies',
		items: ['React', 'React Native', 'Expo', 'SvelteKit', 'Astro', 'Godot', 'ElysiaJS']
	},
	{
		id: 'backend',
		label: 'Backend & Runtime',
		items: ['Node.js', 'Bun', 'PocketBase', 'Prisma', 'BetterAuth', 'REST APIs']
	},
	{
		id: 'databases',
		label: 'Bases de données',
		items: ['PostgreSQL', 'SQLite', 'MongoDB']
	},
	{
		id: 'tools',
		label: 'Outils & DevOps',
		items: ['Docker', 'Git', 'Dokploy', 'Cloudflare', 'Umami']
	},
	{
		id: 'ai',
		label: 'IA & Agents',
		items: [
			'Claude Code',
			'Antigravity CLI',
			'Gemini',
			'Orchestration d’agents',
			'Automatisation de workflows'
		]
	}
];
