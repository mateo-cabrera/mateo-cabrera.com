// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Les défauts d'Astro sont exactement les valeurs voulues ici : sortie statique
// dans dist/, pages en dossier (donc /cv sans extension qui fuit), et les petites
// feuilles inlinées. Rien à redéclarer.
export default defineConfig({
	site: 'https://mateo-cabrera.com',
	vite: {
		plugins: [tailwindcss()]
	}
});
