<script lang="ts">
	import SectionHead from './SectionHead.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { projects } from '$lib/content/projects';
	import type { ProjectCategory } from '$lib/content/types';

	/**
	 * Trois enseignes de coin, hissées au-dessus du filtre.
	 *
	 * Avant, les onze projets pesaient exactement pareil derrière un filtre dont
	 * le défaut était « Jeux Vidéo » : un lead full-stack qui scanne quarante
	 * secondes ne voyait jamais Jump. Les trois vedettes couvrent les trois
	 * preuves distinctes — échelle produit, jeu livré et jouable, profondeur
	 * système — et sont exclues de l'index pour ne jamais apparaître deux fois.
	 */
	const featured = projects.filter((p) => p.featured);
	const indexed = projects.filter((p) => !p.featured);

	const tabs: ProjectCategory[] = ['Projets de Jeux Vidéo', 'Projets Web'];
	let selected = $state<ProjectCategory>('Projets de Jeux Vidéo');

	const shown = $derived(indexed.filter((p) => p.category === selected));
	const countOf = (category: ProjectCategory) =>
		indexed.filter((p) => p.category === category).length;

	let tabRefs: HTMLButtonElement[] = $state([]);

	/**
	 * Le curseur glisse en `translateX`/`scaleX`, jamais en `left`/`width` :
	 * animer deux propriétés de layout force un recalcul à chaque frame.
	 */
	let cursor = $state({ x: 0, w: 0 });

	$effect(() => {
		const node = tabRefs[tabs.indexOf(selected)];
		if (node) cursor = { x: node.offsetLeft, w: node.offsetWidth };
	});

	function onTabKey(event: KeyboardEvent) {
		const delta = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
		if (!delta) return;
		event.preventDefault();
		const next = (tabs.indexOf(selected) + delta + tabs.length) % tabs.length;
		selected = tabs[next];
		tabRefs[next]?.focus();
	}
</script>

<section id="travaux" class="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
	<SectionHead title="Travaux" note="{projects.length} projets" />

	<div class="grid gap-6 lg:grid-cols-3">
		{#each featured as project, i (project.title)}
			<div data-reveal use:reveal={{ delay: i * 60 }}>
				<ProjectCard {project} variant="featured" priority={i === 0} />
			</div>
		{/each}
	</div>

	<!-- Les deux galeries de la rue. -->
	<div class="mt-16 sm:mt-20">
		<div class="mb-8 flex flex-wrap items-end justify-between gap-4">
			<div
				role="tablist"
				aria-label="Filtrer les projets par domaine"
				class="border-ink bg-ground-sunk relative inline-flex border-2 p-1"
			>
				<span
					aria-hidden="true"
					class="bg-ink pointer-events-none absolute top-1 bottom-1 left-0 origin-left transition-transform duration-200 ease-out"
					style="width:1px;transform:translateX({cursor.x}px) scaleX({cursor.w})"
				></span>
				{#each tabs as tab, i (tab)}
					<button
						bind:this={tabRefs[i]}
						type="button"
						role="tab"
						id="tab-{i}"
						aria-selected={selected === tab}
						aria-controls="panel-projets"
						tabindex={selected === tab ? 0 : -1}
						onclick={() => (selected = tab)}
						onkeydown={onTabKey}
						class="text-small relative px-4 py-2.5 font-extrabold transition-colors duration-200 {selected ===
						tab
							? 'text-enamel-face'
							: 'text-ink-2 hover:text-ink'}"
					>
						{tab}
						<span class="admin ml-2 opacity-70">{countOf(tab)}</span>
					</button>
				{/each}
			</div>
		</div>

		<div
			id="panel-projets"
			role="tabpanel"
			aria-labelledby="tab-{tabs.indexOf(selected)}"
			class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
		>
			{#each shown as project (project.title)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
