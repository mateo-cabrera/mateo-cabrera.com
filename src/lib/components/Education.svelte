<script lang="ts">
	import SectionHead from './SectionHead.svelte';
	import { isEnhancedImage } from '$lib/utils';
	import { education } from '$lib/content/education';
</script>

<section id="education" class="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
	<SectionHead title="Formation" />

	<ol class="grid gap-5 md:grid-cols-3">
		{#each education as school (school.title)}
			<li class="plate border-ink bg-ground flex flex-col border-2 p-5">
				<div class="plate border-ink bg-sheet mb-4 size-14 border-2 p-1.5">
					{#if isEnhancedImage(school.logo)}
						<enhanced:img
							src={school.logo}
							alt={school.alt}
							class="size-full object-contain"
							loading="lazy"
						/>
					{:else}
						<img
							src={school.logo.toString()}
							alt={school.alt}
							class="size-full object-contain"
							loading="lazy"
						/>
					{/if}
				</div>
				<p class="admin nums-tabular text-vermilion">{school.date}</p>
				<h3 class="lettering text-sign text-ink mt-2">{school.title}</h3>
				<p class="text-small text-ink-2 mt-1.5">{school.institution}</p>
			</li>
		{/each}
	</ol>
</section>
