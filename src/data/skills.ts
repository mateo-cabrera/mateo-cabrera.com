import type { SkillCategory } from './types';

/**
 * Les libellés sont portés par la donnée.
 *
 * Avant, la clé était en anglais et le libellé français vivait dans une chaîne
 * `{#if}` du template : renommer une clé cassait silencieusement l’affichage.
 * Il n’y a plus de rôle de couleur par catégorie — les cinq bandeaux partagent
 * un seul champ d’émail, parce que cinq couleurs pour cinq catégories ne
 * codaient rien.
 *
 * Les 27 intitulés sont verbatim (Skills.svelte:4-8), les 5 libellés aussi
 * (Skills.svelte:17-27).
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
	}
];
