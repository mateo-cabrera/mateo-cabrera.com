<script lang="ts">
	import Icon from './Icon.svelte';
	import ProjectMedia from './ProjectMedia.svelte';
	import type { Project } from '$lib/content/types';

	let {
		project,
		variant = 'index',
		priority = false
	}: { project: Project; variant?: 'featured' | 'index'; priority?: boolean } = $props();

	/** L'enseigne de la boutique : chaque type de projet a sa couleur d'émail. */
	const awning: Record<Project['type'], string> = {
		Professionnel: 'bg-indigo text-enamel-face',
		Personnel: 'bg-vermilion text-enamel-face',
		Académique: 'bg-chrome text-ink'
	};

	const featured = $derived(variant === 'featured');
	/** itch.io est une démo jouable, pas un lien de plus : elle se nomme comme telle. */
	const isPlayable = $derived(project.demo.includes('itch.io'));
</script>

<article
	class="plate hoverable-lift border-ink bg-ground flex h-full flex-col overflow-hidden border-2"
>
	<ProjectMedia
		image={project.image}
		poster={project.poster}
		alt={project.alt}
		orientation={project.orientation}
		{priority}
	/>

	<!-- L'auvent : bandeau émaillé pleine largeur qui nomme la boutique. -->
	<div
		class="border-ink flex items-center justify-between gap-3 border-b-2 px-4 py-2 {awning[
			project.type
		]}"
	>
		<span class="admin">{project.type}</span>
		<span class="admin opacity-80">{project.category === 'Projets Web' ? 'Web' : 'Jeu vidéo'}</span>
	</div>

	<div class="flex flex-1 flex-col p-4 sm:p-5">
		<h3 class="lettering stretch-sign text-ink {featured ? 'text-plate' : 'text-sign'}">
			{project.title}
		</h3>

		{#if project.metrics}
			<dl class="border-ink-line mt-3.5 flex flex-wrap gap-x-5 gap-y-2 border-y-2 py-3">
				{#each project.metrics as metric (metric.label)}
					<div>
						<dt class="sr-only">{metric.label}</dt>
						<dd>
							<span class="lettering nums-tabular text-sign text-vermilion-deep block"
								>{metric.value}</span
							>
							<span class="admin text-ink-3 block">{metric.label}</span>
						</dd>
					</div>
				{/each}
			</dl>
		{/if}

		<ul class="text-small text-ink-2 mt-3.5 space-y-2">
			{#each featured ? project.bullets : project.bullets.slice(0, 2) as bullet (bullet)}
				<li class="grid grid-cols-[10px_1fr] gap-2.5">
					<span aria-hidden="true" class="bg-vermilion mt-[0.55em] block size-[6px]"></span>
					<span>{bullet}</span>
				</li>
			{/each}
		</ul>

		<ul class="mt-4 flex flex-wrap gap-1.5">
			{#each project.tags as tag (tag)}
				<li class="admin border-ink-line bg-ground-sunk text-ink-2 border px-2 py-1">{tag}</li>
			{/each}
		</ul>

		{#if project.demo || project.github}
			<div class="mt-auto flex flex-wrap gap-2 pt-5">
				{#if project.demo}
					<a
						href={project.demo}
						target="_blank"
						rel="noopener noreferrer"
						class="plate pressable bg-ink text-small text-enamel-face hover:bg-indigo inline-flex items-center gap-2 px-3.5 py-2 font-extrabold"
					>
						<Icon name={isPlayable ? 'itch' : 'external'} size={15} />
						{isPlayable ? 'Jouer' : 'Voir le site'}
					</a>
				{/if}
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						class="plate pressable border-ink bg-ground text-small text-ink hover:bg-chrome inline-flex items-center gap-2 border-2 px-3.5 py-[7px] font-bold"
					>
						<Icon name="github" size={15} />
						Code
					</a>
				{/if}
			</div>
		{/if}
	</div>
</article>
