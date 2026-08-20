<script lang="ts">
	import Icon from './Icon.svelte';
	import { cv, profile } from '$lib/content/profile';

	/** Le tableau d'orientation de la rue : les quatre ancres existaient déjà dans
	 *  le markup depuis le début, sans que rien ne pointe jamais dessus. */
	const stops = [
		{ id: 'travaux', label: 'Travaux' },
		{ id: 'experience', label: 'Expérience' },
		{ id: 'education', label: 'Formation' },
		{ id: 'skills', label: 'Compétences' },
		{ id: 'about', label: 'À propos' }
	];

	let active = $state('');

	$effect(() => {
		const targets = stops
			.map((s) => document.getElementById(s.id))
			.filter((el): el is HTMLElement => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			// Bande de lecture étroite au tiers haut : la section active est celle
			// que le visiteur lit, pas celle qui touche le bord du viewport.
			{ rootMargin: '-15% 0px -70% 0px' }
		);

		targets.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<header
	class="border-ink bg-ground/92 supports-[backdrop-filter]:bg-ground/85 sticky top-0 z-50 border-b-2 backdrop-blur-[6px]"
>
	<nav
		aria-label="Navigation principale"
		class="mx-auto flex h-14 w-full max-w-[1240px] items-center gap-4 px-5 sm:px-8"
	>
		<a
			href="#accueil"
			class="admin text-ink hover:text-vermilion shrink-0 transition-colors duration-200"
		>
			{profile.name}
		</a>

		<ul class="ml-auto hidden items-center gap-1 md:flex">
			{#each stops as stop (stop.id)}
				<li>
					<a
						href="#{stop.id}"
						aria-current={active === stop.id ? 'true' : null}
						class="admin text-ink-3 hover:text-ink aria-[current]:text-ink relative block px-2.5 py-2 transition-colors duration-200"
					>
						{stop.label}
						<span
							aria-hidden="true"
							class="bg-vermilion absolute inset-x-2.5 -bottom-px h-[3px] origin-left scale-x-0 transition-transform duration-200 ease-out"
							class:scale-x-100={active === stop.id}
						></span>
					</a>
				</li>
			{/each}
		</ul>

		<a
			href={cv.href}
			download={cv.filename}
			class="plate pressable bg-vermilion text-small text-enamel-face hover:bg-vermilion-deep ml-auto inline-flex shrink-0 items-center gap-2 px-3.5 py-2 font-extrabold md:ml-2"
		>
			<Icon name="download" size={15} />
			CV
		</a>
	</nav>
</header>
