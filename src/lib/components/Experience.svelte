<script lang="ts">
	import SectionHead from './SectionHead.svelte';
	import { isEnhancedImage } from '$lib/utils';
	import { experience } from '$lib/content/experience';
</script>

<section id="experience" class="border-ink bg-ground-sunk border-t-2">
	<div class="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
		<SectionHead title="Expérience" note="{experience.length} postes" />

		<ol>
			{#each experience as job (job.title + job.company)}
				<li
					class="border-ink grid gap-x-8 gap-y-4 border-t-2 py-8 first:border-t-0 first:pt-0 lg:grid-cols-[170px_1fr]"
				>
					<!-- La colonne des dates : le registre administratif de la rue. -->
					<div class="lg:pt-1">
						<p class="admin nums-tabular text-ink">{job.date}</p>
						<p class="admin text-ink-3 mt-1.5">{job.location}</p>
					</div>

					<div>
						<div class="flex items-start gap-4">
							<div class="plate border-ink bg-sheet size-14 shrink-0 border-2 p-1.5 sm:size-16">
								{#if isEnhancedImage(job.logo)}
									<enhanced:img
										src={job.logo}
										alt={job.alt}
										class="size-full object-contain"
										loading="lazy"
									/>
								{:else}
									<img
										src={job.logo.toString()}
										alt={job.alt}
										class="size-full object-contain"
										loading="lazy"
									/>
								{/if}
							</div>
							<div class="min-w-0">
								<h3 class="lettering stretch-sign text-plate text-ink">{job.title}</h3>
								<p class="text-sign text-indigo mt-1 font-bold">{job.company}</p>
							</div>
						</div>

						{#if job.metrics}
							<dl
								class="divide-ink border-ink bg-indigo text-enamel-face mt-5 flex w-fit max-w-full flex-wrap divide-x-2 border-2"
							>
								{#each job.metrics as metric (metric.label)}
									<div class="px-5 py-3">
										<dt class="sr-only">{metric.label}</dt>
										<dd>
											<span class="lettering nums-tabular text-plate text-chrome block"
												>{metric.value}</span
											>
											<span class="admin text-enamel-face/90 mt-1 block">{metric.label}</span>
										</dd>
									</div>
								{/each}
							</dl>
						{/if}

						<ul class="text-body text-ink-2 mt-5 max-w-[70ch] space-y-2.5">
							{#each job.bullets as bullet (bullet)}
								<li class="grid grid-cols-[10px_1fr] gap-3">
									<span aria-hidden="true" class="bg-vermilion mt-[0.6em] block size-[6px]"></span>
									<span>{bullet}</span>
								</li>
							{/each}
						</ul>

						<ul class="mt-5 flex flex-wrap gap-1.5">
							{#each job.tags as tag (tag)}
								<li class="admin border-ink-line bg-ground text-ink-2 border px-2 py-1">{tag}</li>
							{/each}
						</ul>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
