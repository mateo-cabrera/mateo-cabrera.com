import type { Action } from 'svelte/action';

/**
 * Ne lit une vidéo d'aperçu que lorsqu'elle est à l'écran, et la met en pause
 * dès que l'onglet passe en arrière-plan.
 *
 * Le second point est le genre de détail que personne ne remarque : une page
 * avec onze aperçus en boucle continue de décoder onze flux vidéo pendant que
 * le visiteur lit ses mails dans un autre onglet.
 */
export const lazyPlay: Action<HTMLVideoElement> = (node) => {
	let visible = false;

	const sync = () => {
		if (visible && !document.hidden) {
			node.play().catch(() => {});
		} else {
			node.pause();
		}
	};

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				visible = entry.isIntersecting;
			}
			sync();
		},
		{ threshold: 0.05 }
	);

	observer.observe(node);
	document.addEventListener('visibilitychange', sync);

	return {
		destroy() {
			observer.disconnect();
			document.removeEventListener('visibilitychange', sync);
		}
	};
};
