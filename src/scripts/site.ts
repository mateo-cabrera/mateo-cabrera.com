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
 * Lit une vidéo d'aperçu quand elle est à l'écran, la met en pause dès que
 * l'onglet passe en arrière-plan, et donne au visiteur le dernier mot.
 *
 * Le second point est le genre de détail que personne ne remarque : une page
 * avec onze aperçus en boucle continue de décoder onze flux vidéo pendant que
 * le visiteur lit ses mails dans un autre onglet.
 *
 * Le troisième est une exigence : une boucle sans fin à côté du texte doit
 * pouvoir être arrêtée (WCAG 2.2.2). L'intention du visiteur prime sur la
 * visibilité — un aperçu mis en pause le reste quand il revient à l'écran — et
 * sous `prefers-reduced-motion` aucun aperçu ne démarre de lui-même.
 */
function previews() {
	const videos = [...document.querySelectorAll<HTMLVideoElement>('video[data-lazy-play]')];
	if (!videos.length) return;

	const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
	const onScreen = new WeakSet<HTMLVideoElement>();
	const wanted = new WeakMap<HTMLVideoElement, boolean>();

	const sync = (video: HTMLVideoElement) => {
		if (wanted.get(video) && onScreen.has(video) && !document.hidden) video.play().catch(() => {});
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

	for (const video of videos) {
		wanted.set(video, !still);
		observer.observe(video);

		const toggle = video.parentElement?.querySelector<HTMLButtonElement>('[data-video-toggle]');
		if (!toggle) continue;

		// Le bouton reflète l'état réel de la vidéo, pas l'intention : il dit
		// toujours ce que la prochaine pression fera.
		const render = () => {
			toggle.toggleAttribute('data-paused', video.paused);
			toggle.setAttribute(
				'aria-label',
				video.paused ? 'Lire l’aperçu' : 'Mettre l’aperçu en pause'
			);
		};
		video.addEventListener('play', render);
		video.addEventListener('pause', render);

		toggle.addEventListener('click', () => {
			wanted.set(video, video.paused);
			sync(video);
		});
	}

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
 * Copie l'adresse e-mail sur un ordinateur, ouvre l'application de messagerie
 * sur un téléphone. Le même comportement pour chaque lien e-mail de la page.
 *
 * Sur un pointeur fin, un `mailto:` ouvre le plus souvent un client que
 * personne n'a configuré ; sur un écran tactile, il ouvre l'application que
 * tout le monde a. Le repli reste le comportement natif du lien : sans
 * presse-papiers, ou si l'écriture échoue, le `mailto:` fait le travail.
 *
 * La confirmation ne réécrit aucun texte : le lien reçoit `data-copied`, et
 * `.copy-swap` fond un libellé dans l'autre sans changer de largeur.
 */
function copyEmail() {
	const links = document.querySelectorAll<HTMLAnchorElement>('[data-copy-email]');
	const status = document.querySelector<HTMLElement>('[data-copy-status]');
	const finePointer = matchMedia('(pointer: fine)');

	for (const link of links) {
		const address = link.href.replace(/^mailto:/, '');
		let timer: ReturnType<typeof setTimeout>;

		link.addEventListener('click', async (event) => {
			if (!finePointer.matches || !navigator.clipboard) return;
			event.preventDefault();
			try {
				await navigator.clipboard.writeText(address);
				link.dataset.copied = '';
				if (status) status.textContent = 'Adresse e-mail copiée dans le presse-papiers.';
				clearTimeout(timer);
				timer = setTimeout(() => {
					delete link.dataset.copied;
					if (status) status.textContent = '';
				}, 1800);
			} catch {
				location.href = `mailto:${address}`;
			}
		});
	}
}

reveal();
previews();
scrollspy();
filterCursor();
copyEmail();
