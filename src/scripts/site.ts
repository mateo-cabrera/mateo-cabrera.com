/**
 * Tout le JavaScript du site.
 *
 * Le site est rendu au build et n'hydrate rien : ce module est le seul script
 * expédié, et chacun de ses cinq blocs est une amélioration progressive. Sans
 * lui, rien n'est masqué, le filtre des travaux fonctionne quand même (il est
 * porté par des boutons radio et `:has()`), et le lien e-mail reste un
 * `mailto:`. C'est la contrainte à tenir quand on ajoute quelque chose ici.
 */

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
function reveal() {
	const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
	if (!nodes.length) return;

	const show = (node: HTMLElement) => (node.dataset.reveal = 'shown');

	if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
		nodes.forEach(show);
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				show(entry.target as HTMLElement);
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: '0px 0px -10% 0px' }
	);

	for (const node of nodes) {
		/* Le décalage du stagger, en ms. 30–80 entre voisins ; au-delà l'interface
		   traîne. Il vient du markup parce que c'est lui qui connaît l'ordre. */
		const delay = node.dataset.revealDelay;
		if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);
		observer.observe(node);
	}
}

/**
 * Ne lit une vidéo d'aperçu que lorsqu'elle est à l'écran, et la met en pause
 * dès que l'onglet passe en arrière-plan.
 *
 * Le second point est le genre de détail que personne ne remarque : une page
 * avec onze aperçus en boucle continue de décoder onze flux vidéo pendant que
 * le visiteur lit ses mails dans un autre onglet.
 */
function lazyPlay() {
	const videos = [...document.querySelectorAll<HTMLVideoElement>('video[data-lazy-play]')];
	if (!videos.length) return;

	const onScreen = new WeakSet<HTMLVideoElement>();

	const sync = (video: HTMLVideoElement) => {
		if (onScreen.has(video) && !document.hidden) video.play().catch(() => {});
		else video.pause();
	};

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const video = entry.target as HTMLVideoElement;
				if (entry.isIntersecting) onScreen.add(video);
				else onScreen.delete(video);
				sync(video);
			}
		},
		{ threshold: 0.05 }
	);

	for (const video of videos) observer.observe(video);
	document.addEventListener('visibilitychange', () => videos.forEach(sync));
}

/**
 * Marque dans la navigation la section que le visiteur est en train de lire.
 *
 * Le script ne pose que `aria-current` ; le soulignement en découle en CSS.
 */
function scrollspy() {
	const nav = document.querySelector<HTMLElement>('[data-scrollspy]');
	if (!nav) return;

	const links = new Map<string, HTMLAnchorElement>();
	for (const link of nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
		links.set(link.hash.slice(1), link);
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				for (const link of links.values()) link.removeAttribute('aria-current');
				links.get(entry.target.id)?.setAttribute('aria-current', 'true');
			}
		},
		// Bande de lecture étroite au tiers haut : la section active est celle
		// que le visiteur lit, pas celle qui touche le bord du viewport.
		{ rootMargin: '-15% 0px -70% 0px' }
	);

	for (const id of links.keys()) {
		const target = document.getElementById(id);
		if (target) observer.observe(target);
	}
}

/**
 * Fait glisser l'indicateur du filtre sous l'onglet coché.
 *
 * Le filtrage lui-même est en CSS et n'a pas besoin de ce script. Sans lui,
 * l'onglet coché porte directement le champ d'encre — c'est la même lecture,
 * sans le glissement.
 *
 * La position bouge en `translateX` (compositeur, pas de layout) ; la largeur
 * passe par `width` plutôt que `scaleX` — voir le commentaire dans `place()`.
 */
function filterCursor() {
	const group = document.querySelector<HTMLElement>('[data-filtre]');
	const cursor = group?.querySelector<HTMLElement>('[data-filtre-curseur]');
	if (!group || !cursor) return;

	const place = () => {
		const checked = group.querySelector<HTMLInputElement>('input:checked');
		const label = checked && group.querySelector<HTMLElement>(`label[for="${checked.id}"]`);
		if (!label) return;
		// `scaleX` depuis une base de 1px grossit le curseur ~200x : sur certains
		// rendus mobiles la rastérisation de ce facteur déborde visuellement de la
		// géométrie réelle. `width` reste un recalcul de layout, mais seulement au
		// clic/resize, jamais par frame — le coût est nul ici.
		cursor.style.transform = `translateX(${label.offsetLeft}px)`;
		cursor.style.width = `${label.offsetWidth}px`;
	};

	place();
	// Le premier placement doit être posé avant que la transition ne s'active,
	// sinon le curseur traverse la barre depuis le bord gauche au chargement.
	void cursor.offsetWidth;
	cursor.dataset.placed = '';

	group.addEventListener('change', place);
	addEventListener('resize', place);
	// L'échange de la webfont (font-display: swap) reflow les libellés après ce
	// premier calcul : sans ce re-placement le curseur reste figé sur la largeur
	// de la police de repli.
	document.fonts?.ready.then(place);
}

/**
 * Copie l'adresse e-mail plutôt que d'ouvrir un client de messagerie.
 *
 * Le repli est le comportement natif du lien : sans presse-papiers, ou si
 * l'écriture échoue, le `mailto:` fait le travail.
 */
function copyEmail() {
	const link = document.querySelector<HTMLAnchorElement>('[data-copy-email]');
	const label = link?.querySelector<HTMLElement>('[data-copied-label]');
	const status = document.querySelector<HTMLElement>('[data-copy-status]');
	if (!link || !label) return;

	const address = link.href.replace(/^mailto:/, '');
	const idle = label.textContent ?? '';
	const copied = label.dataset.copiedLabel ?? idle;
	let timer: ReturnType<typeof setTimeout>;

	link.addEventListener('click', async (event) => {
		if (!navigator.clipboard) return;
		event.preventDefault();
		try {
			await navigator.clipboard.writeText(address);
			label.textContent = copied;
			if (status) status.textContent = 'Adresse e-mail copiée dans le presse-papiers.';
			clearTimeout(timer);
			timer = setTimeout(() => {
				label.textContent = idle;
				if (status) status.textContent = '';
			}, 1800);
		} catch {
			location.href = `mailto:${address}`;
		}
	});
}

reveal();
lazyPlay();
scrollspy();
filterCursor();
copyEmail();
