# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primaire — le décideur technique qui peut l'employer.** Hiring manager, lead technique ou responsable de studio. Il arrive par un lien (LinkedIn, candidature, recommandation), sur laptop, entre deux réunions, et accorde 30 à 60 secondes avant de décider s'il continue. Sa question n'est pas « est-ce joli » mais « qui est-ce, quel est son niveau réel, qu'a-t-il livré, comment je le contacte ». Les deux donneurs d'ordre les plus probables à court terme sont Epitech Academy (déjà client, sous contrat freelance) et un studio de jeux vidéo.

**Secondaire — le pair game dev / futur associé.** Développeur ou artiste rencontré en game jam, sur Discord ou sur itch.io, souvent sur mobile. Il évalue le niveau de craft et l'envie de construire ensemble, pas un CV.

## Product Purpose

Le portfolio personnel de Mateo Cabrera. Il existe pour convertir un visiteur qui ne le connaît pas en un contact : entretien, mission freelance, ou collaboration de studio. Succès = le visiteur repart avec une idée exacte du niveau technique et un moyen de contact utilisé (CV téléchargé, email, LinkedIn).

## Positioning

**Il finit et il livre, en cycles courts.** Game jams livrées en 48 h avec un jeu jouable en ligne, produits clients livrés en semaines, 16 versions mises en production en un mois sur une plateforme institutionnelle. C'est le même mécanisme qui structure son EIP : au lieu d'un seul gros titre sur deux ans, plusieurs jeux courts sur des cycles de 4 à 6 mois, pour ne pas mettre tous les œufs dans le même panier.

Ce qu'un profil voisin ne peut pas copier honnêtement : la double preuve. Un moteur de jeu ECS en C++ et un raytracer sans librairie graphique d'un côté ; une plateforme en production déployée sur 8 campus avec 800+ utilisateurs onboardés de l'autre. La plupart des portfolios étudiants ont l'un ou l'autre.

## Operating Context

- **Rythme actuel** : 3ᵉ année Epitech terminée. Stage de Product Manager & Lead Dev chez Epitech Academy terminé (avril–août 2026).
- **Septembre 2026** : départ pour une année d'études à l'université d'Osaka (Japon), 4ᵉ année du cursus Epitech, avec un contrat freelance maintenu avec Epitech Academy en parallèle, sur la plateforme Jump.
- **4ᵉ et 5ᵉ année** : EIP (Epitech Innovative Project), équipe de 4 personnes, 1,5 à 2 ans. Le projet est un studio de jeux vidéo dont le modèle est la sortie de plusieurs jeux courts sur des cycles de 4 à 6 mois. Mateo ne veut pas être identifié au mot « agile », qui n'est qu'un raccourci pour ce modèle de cycles courts.
- **Après Epitech (1 à 2 ans)** : un revenu de jour pour rembourser son prêt étudiant, pendant que le studio personnel se construit le soir. La piste la plus probable est la poursuite de la relation Epitech Academy en freelance ; un poste salarié, chez eux ou dans un studio, n'est pas exclu.
- **Objectif long terme** : son propre studio de jeux vidéo, viable et stable.
- **Freelance** : auto-entrepreneur depuis 2024, missions actives.

## Capabilities and Constraints

- Le site est un Astro rendu au build, sans hydratation, déployé sur Cloudflare Pages. Le SSG est une contrainte à conserver, et le zéro-JS de framework avec : le seul script expédié tient en un module d'amélioration progressive.
- Tailwind CSS v4 via le plugin Vite, sans fichier de configuration. `astro:assets` pour la génération responsive AVIF/WebP. Les icônes sont des tracés dessinés à la main dans `src/components/Icon.astro`, sans dépendance. Aucune dépendance de production. Gestionnaire de paquets : bun.
- Contenu en français, sans i18n. Aucune version anglaise n'existe et aucune n'est prévue à ce stade.
- Une seule page publique aujourd'hui (`/`).
- Le contenu rédactionnel (paragraphes de présentation, bullets d'expériences et de projets) est écrit par Mateo et ne doit pas être réécrit sans son accord.
- **Faits datés à surveiller** : la présentation contient l'âge (« 20 ans ») et l'année de cursus (« troisième année ») en dur, tous deux périmés ou en voie de l'être. La localisation affichée (« Strasbourg, France ») devient fausse en septembre 2026.
- **Décision produit ouverte** : la mention de l'année à Osaka et de l'EIP studio n'existe nulle part sur le site. Mateo doit décider s'il les publie et sous quelle formulation.

## Brand Commitments

- Nom affiché : **Mateo Cabrera**. Intitulé : **Développeur Web Full Stack**.
- Proposition de valeur en une ligne, déjà écrite et validée par l'usage : « Créer de vrais produits pour de vrais clients, pas juste des projets supplémentaires. »
- Le mot **« agile »** ne doit pas servir d'étiquette d'identité, même si la méthode Agile figure légitimement dans ses compétences et son expérience professionnelle.
- Pseudonyme de publication de jeux : **vanova** (itch.io).

## Evidence on Hand

Tout est réel, vérifiable et déjà présent dans le dépôt. Rien n'est à inventer.

- **3 expériences** : Product Manager & Lead Dev chez Epitech Academy (stage, avril–août 2026) ; Développeur Full-Stack Freelance en auto-entrepreneur (2024–aujourd'hui, Epitech Academy parmi les clients) ; Stagiaire Développement Web Full-Stack chez Epiphanie / Endless Paper (juillet–décembre 2024).
- **11 projets** répartis en 4 jeux vidéo et 7 projets web, avec captures, GIF et vidéos de démonstration (`src/assets/`).
- **Chiffres réels, déjà écrits dans les descriptions** : 8 campus pilotes, 800+ talents onboardés, 40 membres du staff, 2 000 utilisateurs simultanés, 16 versions mises en production en un mois, Contributor #1 et #2 sur le moteur R-Engine et le raytracer.
- **2 jeux livrés et jouables publiquement** : Forge FeveR (GMTK Game Jam 2025) et Unseen Anomaly (Godot Wild Jam #82), tous deux sur itch.io.
- **3 formations** : TakerAcademy, Epitech (2023–2028), Baccalauréat mention bien.
- **32 compétences** réparties en 6 catégories, dont « IA & Agents », qui nomme la méthode derrière la cadence de livraison.
- **3 canaux de contact** : GitHub `mateo-cabrera`, email `mateo.cabrera@epitech.eu`, LinkedIn `mateo-cabrera`.
- **CV** : `cv/CV_Tek3-Mateo_CABRERA.html` et son PDF existent mais sont hors de `static/`, donc non servis, et en retard sur le site (ni Epitech Academy/Jump, ni AREA, ni R-Type, ni Raytracer). Le site n'expose aujourd'hui **aucun lien de téléchargement de CV**.
- **Absences à ne jamais combler par invention** : aucun témoignage client, aucune métrique de trafic, aucun revenu, aucun chiffre pour les missions freelance, Spotiflyx, AREA, le labo dentaire, la page d'intégration Endless Paper, le portfolio Eartsup et Unseen Anomaly.

## Product Principles

1. **La preuve prime sur la déclaration.** Chaque affirmation de niveau doit être adossée à un projet visible, un chiffre déjà écrit ou un lien jouable. Aucun chiffre n'est produit qui ne figure pas déjà dans le contenu.
2. **Un décideur doit pouvoir conclure en 30 secondes.** Identité, niveau, preuve et moyen de contact sont accessibles sans scroll, sans clic et sans attente.
3. **Les deux pistes ne se diluent pas.** Ingénierie produit full-stack et développement de jeux sont la même personne et le même mécanisme ; le site ne doit pas les présenter comme deux profils concurrents ni en sacrifier un.
4. **La cadence est le sujet.** Ce que ce portfolio doit rendre lisible, c'est la régularité de livraison — pas un talent abstrait.
5. **Vitesse et lisibilité ne se négocient pas contre l'effet.** Un dispositif visuel qui coûte du temps de chargement, de la latence ou de la lisibilité au visiteur est écarté, quelle que soit sa valeur de démonstration.

## Accessibility & Inclusion

Aucune exigence normative imposée par un client. Standard visé : WCAG 2.1 AA sur les contrastes, navigation clavier complète, respect de `prefers-reduced-motion`. Le site étant intégralement en français, la langue du document doit être déclarée en `fr` (elle est actuellement déclarée en `en`).
