import type { EducationEntry } from './types';

import epitechLogo from '$lib/assets/Education/logo-epitech.png?enhanced';
import graduationCapIcon from '$lib/assets/Education/graduation-cap-icon.svg';
import logoTakerAcademy from '$lib/assets/Education/logo-taker-academy.webp?enhanced';

export const education: EducationEntry[] = [
	{
		logo: logoTakerAcademy,
		alt: 'Logo de formation',
		title: 'TakerAcademy',
		institution: 'Formation web fullstack - Taker Junior Entreprise Epitech',
		date: 'Janvier 2024 - Juin 2024'
	},
	{
		logo: epitechLogo,
		alt: 'Logo de l’école Epitech',
		title: 'Epitech',
		institution: 'École informatique',
		date: '2023 - 2028'
	},
	{
		logo: graduationCapIcon,
		alt: 'Logo de diplôme',
		title: 'Baccalauréat - Mention bien',
		institution: 'Spécialités Sciences de l’Ingénieur et Mathématiques',
		date: '2023'
	}
];
