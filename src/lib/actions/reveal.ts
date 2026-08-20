import type { Action } from 'svelte/action';

interface RevealOptions {
	/** Décalage du stagger, en ms. 30–80 entre voisins ; au-delà l'interface traîne. */
	delay?: number;
}

/**
 * Révèle un élément quand il entre dans le viewport, une seule fois.
 *
 * Remplace les sept `in:fly` à délais codés en dur (200→600 ms) qui se
 * déclenchaient tous au mount : le contenu situé trois écrans plus bas avait
 * fini son animation avant que le visiteur ne l'atteigne.
 *
 * L'état masqué est porté par `[data-js] [data-reveal]` : sans JavaScript,
 * l'attribut `data-js` n'est jamais posé et tout le contenu reste visible.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	if (options?.delay) {
		node.style.setProperty('--reveal-delay', `${options.delay}ms`);
	}

	const show = () => {
		node.dataset.reveal = 'shown';
	};

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		show();
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					show();
					observer.disconnect();
				}
			}
		},
		{ rootMargin: '0px 0px -10% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
