import type { Project } from './types';

import cozyCargo from '$lib/assets/Projects/cozy_cargo.webm';
import cozyCargoPoster from '$lib/assets/Projects/cozy_cargo-poster.jpg';
import nanomalyImg from '$lib/assets/Projects/nanomaly.png?enhanced';
import forgeFever from '$lib/assets/Projects/forge_fever.webm';
import forgeFeverPoster from '$lib/assets/Projects/forge_fever-poster.jpg';
import rtypePoster from '$lib/assets/Projects/rtype-poster.jpg';
import bocajoviPoster from '$lib/assets/Projects/bocajovi-poster.jpg';
import unseenAnomaly from '$lib/assets/Projects/unseen_anomaly.png?enhanced';
import websiteIntegrationChatbot from '$lib/assets/Projects/website_integration_chatbot.png?enhanced';
import demoBocajoviConnect from '$lib/assets/Projects/demo-bocajovi_connect-compressed.webm';
import raytracerImg from '$lib/assets/Projects/raytracer.png?enhanced';
import rtypeImg from '$lib/assets/Projects/rtype.webm';
import areaImg from '$lib/assets/Projects/area_preview.png?enhanced';
import jumpImg from '$lib/assets/Education/jump_preview.png?enhanced';

export const projects: Project[] = [
	{
		category: 'Projets Web',
		type: 'Professionnel',
		image: jumpImg,
		orientation: 'landscape',
		alt: "Aperçu de la plateforme Jump d'Epitech Academy",
		title: 'Jump',
		featured: true,
		metrics: [
			{ value: '2 000', label: 'utilisateurs simultanés' },
			{ value: '8', label: 'campus pilotes' }
		],
		bullets: [
			'Premier contributeur de la plateforme au sein d’une équipe de quatre développeurs (1 092 des 1 865 commits).',
			"Migration de l'architecture serveur (de SQLite/PocketBase vers PostgreSQL/Prisma) pour éliminer les goulots d'étranglement et supporter la charge de 2 000 utilisateurs simultanés.",
			"Conception et développement du tunnel d'onboarding gamifié des élèves et du parcours de validation des parents (signature du droit à l'image et contacts d'urgence) pour capturer des données fiables.",
			"Mise en place d'un système de 'Feature Flags' permettant d'activer ou masquer des fonctionnalités dynamiquement et de déployer progressivement sur les différents campus.",
			'Mise en service sur huit campus, avec plus de 800 lycéens et 40 membres du staff embarqués sur la plateforme.'
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
		alt: "Interface de l'application mobile AREA",
		title: 'AREA',
		bullets: [
			"Développement d'une suite logicielle d'automatisation (type IFTTT/Zapier) interconnectant divers services (Discord, GitHub, Spotify...).",
			"Réalisation complète de l'application mobile en React Native (Expo) : design système, animations natives et consommation de l'API REST.",
			"Mise en place de l'architecture Monorepo (Bun Workspaces) et de l'infrastructure DevOps : Dockerisation complète et déploiement en production via Dokploy sur VPS.",
			'Contribution au Backend (ElysiaJS/Prisma) et au Frontend Web (SvelteKit) pour assurer la cohérence Type-Safe (Eden Treaty).'
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
		bullets: [
			'Puzzle roguelike spatial développé seul au sein d’IWY Studio, le studio que nous montons à quatre : on emballe des colis réconfortants, et la place de chaque objet compte autant que l’objet lui-même.',
			'Moteur de synergies où chaque pièce porte des tags qui interagissent avec leurs voisines — bonus fixes, multiplicateurs globaux, anti-synergies et règles spatiales de bord, de coin et d’isolement.',
			'Architecture en couches sous Godot 4, typée statiquement de bout en bout : données pures, moteurs sans état et scènes séparés, contenu piloté par ressources pour qu’une nouvelle pièce s’ajoute sans toucher au code.',
			'Harnais d’équilibrage headless qui joue des semaines entières à travers le vrai moteur de score et rapporte la faisabilité par palier avec des intervalles de confiance à 95 %.',
			'643 commits en cinq mois, deux builds publics depuis le prototype 7DRL, un document de conception de 43 Ko qui tient lieu de spécification.'
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
			"Développement d'un jeu de rythme arcade avec une touche de roguelite pour la GMTK Game Jam 2025 sur le thème 'Loop'.",
			'Création d’une boucle de jeu intense où la performance rythmique dans des loops musicales courtes détermine la progression ou la régression en difficulté.',
			"Mise en place d'un système de 'Fever' exponentiel (jusqu'à x32) pour récompenser la précision et d'un système de pénalités sévères pour les erreurs.",
			"Conception d'une progression tangible où le score améliore visuellement l'épée forgée, avec des paliers servant de checkpoints."
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
			"Développement d'un jeu d'horreur psychologique complet pour la Godot Wild Jam #82 sur le thème 'Unseen'.",
			'Création d’une boucle de jeu basée sur l’observation d’anomalies visuelles, sonores et physiques dans un environnement qui se répète.',
			"Mise en place d'une architecture de projet robuste avec un gestionnaire d'état global (AutoLoad) et des scènes héritées pour une modularité maximale.",
			"Déboguage de problématiques techniques complexes telles que les dépendances circulaires et les conditions de course ('race conditions') des signaux."
		],
		tags: ['Godot', 'GDScript', 'Game Design', 'Développement de Jeu', 'Blender'],
		github: 'https://github.com/mateo-cabrera/unseen-anomaly',
		demo: 'https://vanova.itch.io/unseen-anomaly'
	},
	{
		category: 'Projets de jeux vidéo',
		type: 'Personnel',
		image: nanomalyImg,
		alt: 'Écran-titre de Nanomaly : « In the world of the small, silence is a predator »',
		title: 'Nanomaly',
		bullets: [
			'Jeu d’horreur et de survie développé en sept jours pour la Brackeys Game Jam 2026.1 : on rétrécit à l’échelle du micron, et la moquette du salon devient une jungle.',
			'Le changement d’échelle est la mécanique centrale — à l’abri dans les fibres en nano, exposé à découvert en macro — et un balayage périodique force à choisir entre avancer et se mettre à couvert.',
			'Jouable dans le navigateur, publié sur itch.io.'
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
			"Conception d'un moteur de jeu personnalisé (R-Engine) basé sur une architecture ECS (Entity Component System) stricte pour la performance.",
			"Développement d'une version multijoueur du classique R-Type utilisant ce moteur, avec une gestion réseau UDP/TCP asynchrone.",
			'Contribution majeure au cœur du moteur : gestion de la mémoire et système de composants.',
			'Lead sur l’implémentation du gameplay : logique des ennemis, power-ups et scrolling parallaxe.'
		],
		tags: ['C++', 'ECS Pattern', 'Réseau', 'Architecture Moteur', 'Multijoueur'],
		github: '',
		demo: ''
	},
	{
		category: 'Projets de jeux vidéo',
		type: 'Académique',
		image: raytracerImg,
		alt: 'Rendu 3D généré par le Raytracer C++',
		title: 'Raytracer C++',
		bullets: [
			"Développement d'un moteur de rendu 3D complet en C++ pur, sans aucune librairie graphique externe.",
			'Implémentation mathématique des vecteurs, matrices et du système de caméra pour générer des images photoréalistes.',
			'Gestion avancée de la lumière : ombres douces, réflexion, réfraction et matériaux complexes.',
			'Optimisation des calculs de rendu via multithreading pour réduire les temps de génération.'
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
			'Développement d’un chatbot intelligent pour le site web Endless Paper afin de fournir un support client instantané.',
			'Création d’une plateforme d’administration conviviale pour l’équipe Epiphanie afin de gérer les conversations du chatbot et d’améliorer ses performances.',
			"Implémentation d'un système 'Human In The Loop' (HITL) pour une intervention d’agent fluide.",
			'Optimisation des performances et de l’intégration du chatbot en utilisant SvelteKit et les événements envoyés par le serveur (SSE).'
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
			"Développement d'une plateforme web full-stack Intranet/Extranet pour la gestion complète d'un laboratoire de prothèses dentaires.",
			'Centralisation des commandes, des documents (fiches de travail, DMSM, factures) et de la communication avec les praticiens dentaires.',
			'Fonctionnalités intranet pour les administrateurs : gestion des clients, documents, produits (backend implémenté).',
			'Extranet client pour les praticiens : suivi des commandes, accès sécurisé aux documents, authentification OTP.',
			"Optimisation du flux de travail en remplaçant les processus papier et les échanges d'emails traditionnels."
		],
		tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'PocketBase', 'Authentification OTP'],
		github: '',
		demo: ''
	}
];
