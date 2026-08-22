import type { Project } from './types';

import cozyCargo from '~/assets/Projects/cozy_cargo.webm?url';
import cozyCargoPoster from '~/assets/Projects/cozy_cargo-poster.jpg';
import nanomalyImg from '~/assets/Projects/nanomaly.png';
import forgeFever from '~/assets/Projects/forge_fever.webm?url';
import forgeFeverPoster from '~/assets/Projects/forge_fever-poster.jpg';
import rtypePoster from '~/assets/Projects/rtype-poster.jpg';
import bocajoviPoster from '~/assets/Projects/bocajovi-poster.jpg';
import unseenAnomaly from '~/assets/Projects/unseen_anomaly.png';
import websiteIntegrationChatbot from '~/assets/Projects/website_integration_chatbot.png';
import demoBocajoviConnect from '~/assets/Projects/demo-bocajovi_connect-compressed.webm?url';
import raytracerImg from '~/assets/Projects/raytracer.png';
import rtypeImg from '~/assets/Projects/rtype.webm?url';
import areaImg from '~/assets/Projects/area_preview.png';
import jumpImg from '~/assets/Education/jump_preview.png';

export const projects: Project[] = [
	{
		category: 'Projets Web',
		type: 'Professionnel',
		image: jumpImg,
		orientation: 'landscape',
		alt: 'Aperçu de la plateforme Jump d’Epitech Academy',
		title: 'Jump',
		featured: true,
		metrics: [
			{ value: '2 000', label: 'utilisateurs simultanés' },
			{ value: '8', label: 'campus pilotes' }
		],
		bullets: [
			'Premier contributeur de la plateforme de stages de découverte d’Epitech Academy, dans une équipe de quatre : huit campus, 800 lycéens et 40 encadrants.',
			'Migration du serveur de SQLite/PocketBase vers PostgreSQL/Prisma : 2 000 utilisateurs simultanés, sans goulot d’étranglement.',
			'Tunnel d’onboarding gamifié des élèves et parcours de validation des parents : droit à l’image, contacts d’urgence, consentement d’un public mineur.'
		],
		tags: ['SvelteKit', 'PostgreSQL', 'Prisma', 'BetterAuth', 'Salesforce API', 'Architecture'],
		github: '',
		demo: ''
	},
	{
		category: 'Projets Web',
		type: 'Académique',
		image: areaImg,
		orientation: 'portrait',
		alt: 'Interface de l’application mobile AREA',
		title: 'AREA',
		bullets: [
			'Suite logicielle d’automatisation façon IFTTT/Zapier, qui interconnecte Discord, GitHub, Spotify et d’autres services.',
			'Application mobile React Native (Expo) réalisée de bout en bout, et l’infrastructure qui va avec : monorepo Bun, Docker, et déploiement en production sur VPS via Dokploy.'
		],
		tags: ['React Native', 'Expo', 'SvelteKit', 'ElysiaJS', 'Bun', 'Docker', 'DevOps'],
		github: 'https://github.com/Area-Organization/main-area',
		demo: ''
	},
	{
		category: 'Projets de jeux vidéo',
		type: 'Personnel',
		image: cozyCargo,
		poster: cozyCargoPoster,
		alt: 'Cozy Cargo : un colis en cours d’emballage, avec les tags d’un objet et le reçu de score',
		title: 'Cozy Cargo',
		featured: true,
		metrics: [{ value: '1 000+', label: 'joueurs sur le prototype de jam' }],
		bullets: [
			'Puzzle roguelike spatial développé seul au sein d’IWY Studio : on emballe des colis réconfortants, et la place de chaque objet compte autant que l’objet lui-même.',
			'Moteur de synergies où chaque pièce porte des tags qui interagissent avec leurs voisines : bonus, multiplicateurs, anti-synergies, et des règles de bord, de coin et d’isolement.',
			'Publié en deux temps : le prototype de la jam 7DRL, joué par plus de mille personnes, puis la version actuelle, jouable dans le navigateur.'
		],
		tags: ['Godot 4', 'GDScript', 'Game Design', 'Architecture', 'Équilibrage', 'Audio'],
		github: '',
		demo: 'https://vanova.itch.io/cozy-cargo'
	},
	{
		category: 'Projets de jeux vidéo',
		type: 'Personnel',
		image: forgeFever,
		poster: forgeFeverPoster,
		alt: 'Jeu de rythme Forge Fever développé pour la GMTK Game Jam 2025',
		title: 'Forge FeveR',
		bullets: [
			'Jeu de rythme arcade teinté de roguelite, livré pour la GMTK Game Jam 2025 sur le thème « Loop » : la performance dans des boucles musicales courtes fait monter ou descendre la difficulté.',
			'Système de « Fever » exponentiel jusqu’à x32 pour récompenser la précision, et une épée qui s’améliore à l’écran au fil du score.'
		],
		tags: ['Godot', 'GDScript', 'Game Design', 'Rhythm Game', 'Développement de Jeu'],
		github: 'https://github.com/mateo-cabrera/Forge-FeveR',
		demo: 'https://vanova.itch.io/forge-fever'
	},
	{
		category: 'Projets de jeux vidéo',
		type: 'Personnel',
		image: unseenAnomaly,
		alt: 'Jeu vidéo Unseen Anomaly développé avec Godot',
		title: 'Unseen Anomaly',
		bullets: [
			'Jeu d’horreur psychologique complet livré pour la Godot Wild Jam #82 sur le thème « Unseen ».',
			'Boucle fondée sur l’observation : repérer les anomalies visuelles, sonores et physiques d’un environnement qui se répète.'
		],
		tags: ['Godot', 'GDScript', 'Game Design', 'Développement de Jeu', 'Blender'],
		github: 'https://github.com/mateo-cabrera/unseen-anomaly',
		demo: 'https://vanova.itch.io/unseen-anomaly'
	},
	{
		category: 'Projets de jeux vidéo',
		type: 'Personnel',
		image: nanomalyImg,
		alt: 'Écran-titre de Nanomaly : « In the world of the small, silence is a predator »',
		title: 'Nanomaly',
		bullets: [
			'Jeu d’horreur et de survie développé en sept jours pour la Brackeys Game Jam 2026.1 : on rétrécit à l’échelle du micron, et la moquette du salon devient une jungle.',
			'Le changement d’échelle est la mécanique centrale : à l’abri dans les fibres en nano, exposé à découvert en macro. Un balayage périodique force à choisir entre avancer et se mettre à couvert.'
		],
		tags: ['Godot', 'GDScript', 'Game Jam', '3D', 'Level Design'],
		github: 'https://github.com/mateo-cabrera/nanomaly',
		demo: 'https://vanova.itch.io/nanomaly'
	},
	{
		category: 'Projets de jeux vidéo',
		type: 'Académique',
		image: rtypeImg,
		poster: rtypePoster,
		alt: 'Jeu R-Type multijoueur et son moteur ECS',
		title: 'R-Type & R-Engine',
		featured: true,
		bullets: [
			'Moteur de jeu maison (R-Engine) bâti sur une architecture ECS stricte : contribution majeure au cœur, gestion de la mémoire et système de composants.',
			'Version multijoueur du R-Type original tournant sur ce moteur, avec une gestion réseau UDP/TCP asynchrone.',
			'Lead sur l’implémentation du gameplay : logique des ennemis, power-ups et défilement parallaxe.'
		],
		tags: ['C++', 'ECS Pattern', 'Réseau', 'Architecture Moteur', 'Multijoueur'],
		/* URL canonique : le compte Leorevoir a été renommé Yutsuna, et l'ancienne
		   adresse ne tient que par une redirection 301 de GitHub. */
		github: 'https://github.com/Yutsuna/R-Engine',
		demo: ''
	},
	{
		category: 'Projets de jeux vidéo',
		type: 'Académique',
		image: raytracerImg,
		alt: 'Rendu 3D généré par le Raytracer C++',
		title: 'Raytracer C++',
		bullets: [
			'Moteur de rendu 3D complet en C++ pur, sans aucune librairie graphique : vecteurs, matrices et système de caméra écrits à la main.',
			'Lumière avancée (ombres douces, réflexion, réfraction, matériaux complexes) et rendu multithreadé pour tenir des temps de génération raisonnables.'
		],
		tags: ['C++', 'Mathématiques 3D', 'Rendering', 'Optimisation', 'Architecture'],
		github: '',
		demo: ''
	},
	{
		category: 'Projets Web',
		type: 'Professionnel',
		image: websiteIntegrationChatbot,
		alt: 'Chatbot et plateforme d’administration pour Endless Paper',
		title: 'Chatbot et back-office · Endless Paper',
		bullets: [
			'Chatbot de support client pour le site d’Endless Paper, avec la plateforme d’administration qui permet à l’équipe de suivre et de corriger ses conversations.',
			'Système « Human In The Loop » pour qu’un agent humain reprenne la main dans une conversation en cours, en SvelteKit et Server-Sent Events.'
		],
		tags: [
			'SvelteKit',
			'TailwindCSS',
			'Botpress',
			'SSE',
			'Nginx',
			'SQLite',
			'Prisma ORM',
			'TypeScript',
			'Développement assisté par IA'
		],
		github: '',
		demo: 'https://endlesspaper.app/index.html'
	},
	{
		category: 'Projets Web',
		type: 'Professionnel',
		image: demoBocajoviConnect,
		poster: bocajoviPoster,
		alt: 'Plateforme Intranet/Extranet pour Laboratoire de Prothèses Dentaires',
		title: 'Intranet/extranet · laboratoire dentaire',
		bullets: [
			'Plateforme intranet/extranet full-stack pour un laboratoire de prothèses dentaires : commandes, fiches de travail, DMSM et factures au même endroit, à la place du papier et des e-mails.',
			'Extranet praticiens avec authentification OTP pour le suivi des commandes et l’accès aux documents, et espace d’administration côté laboratoire.'
		],
		tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'PocketBase', 'Authentification OTP'],
		github: '',
		demo: ''
	}
];
