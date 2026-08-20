/**
 * Le modèle de contenu du portfolio.
 *
 * Aucune de ces chaînes n'est écrite ici : elles vivent dans les modules frères,
 * déplacées verbatim depuis les composants d'origine. Ce fichier ne décrit que
 * leur forme.
 */

import type { Picture } from 'vite-imagetools';

/** Une image importée avec `?enhanced` (objet `Picture`) ou une URL d'asset (svg, webm, mp4, jpg). */
export type MediaSource = string | Picture;

/**
 * Un chiffre déjà écrit dans les `bullets` de l'entrée qui le porte.
 *
 * Contrainte dure : `value` doit apparaître mot pour mot dans les bullets de
 * cette même entrée. Une metric n'est pas une affirmation nouvelle, c'est une
 * vue typographique d'une affirmation existante. Aucune entrée sans chiffre
 * réel ne reçoit de metrics — pas de remplissage.
 */
export interface Metric {
	value: string;
	label: string;
}

export type ProjectCategory = 'Projets Web' | 'Projets de Jeux Vidéo';
export type ProjectType = 'Professionnel' | 'Personnel' | 'Académique';

export interface Project {
	category: ProjectCategory;
	type: ProjectType;
	image: MediaSource;
	/** Seuls Jump ('landscape') et AREA ('portrait') le déclarent ; les autres héritent du défaut. */
	orientation?: 'landscape' | 'portrait';
	/** Première image d'une vidéo d'aperçu : la carte n'est jamais un trou noir avant lecture. */
	poster?: string;
	alt: string;
	title: string;
	bullets: string[];
	tags: string[];
	/** Chaîne vide quand le lien n'existe pas — jamais rendu comme un bouton mort. */
	github: string;
	demo: string;
	/** Hissé au-dessus du filtre, visible quel que soit l'onglet actif. */
	featured?: boolean;
	metrics?: Metric[];
}

export interface ExperienceEntry {
	logo: MediaSource;
	alt: string;
	title: string;
	company: string;
	location: string;
	date: string;
	bullets: string[];
	tags: string[];
	metrics?: Metric[];
}

export interface EducationEntry {
	logo: MediaSource;
	alt: string;
	title: string;
	institution: string;
	date: string;
}

export interface SkillCategory {
	id: string;
	label: string;
	items: string[];
}

export interface SocialLink {
	id: 'github' | 'email' | 'linkedin';
	label: string;
	handle: string;
	href: string;
}
