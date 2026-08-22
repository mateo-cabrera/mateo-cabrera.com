// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Les défauts d'Astro sont exactement les valeurs voulues ici : sortie statique
// dans dist/, pages en dossier (donc /cv sans extension qui fuit), et les petites
// feuilles inlinées. Rien à redéclarer de ce côté.
export default defineConfig({
	site: 'https://mateo-cabrera.com',
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
			config: {
				/*
				 * Sans prop `quality`, Astro ne passe rien à sharp et sharp applique
				 * ses propres défauts — dont un AVIF à 50, qui marbre la peau et bave
				 * les cheveux sur le portrait à 368 px. Le défaut se règle une fois
				 * ici plutôt qu'en prop sur chaque appel : c'est une propriété de
				 * l'encodeur, pas de l'image.
				 *
				 * `effort: 6` au-dessus du défaut de 4 : le build est déjà court, et
				 * l'AVIF y gagne en octets à qualité égale.
				 */
				avif: { quality: 72, effort: 6 },
				webp: { quality: 85 }
			}
		}
	},
	vite: {
		plugins: [tailwindcss()]
	}
});
