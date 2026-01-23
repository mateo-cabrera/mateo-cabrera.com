<script>
	import { ExternalLink, Github } from 'lucide-svelte';
	import { isEnhancedImage } from '$lib/utils';

	let {
		image,
		alt,
		title,
		bullets,
		tags,
		github,
		demo,
		type,
		orientation = 'landscape'
	} = $props();

	const typeClasses = {
		Professionnel: 'bg-blue-500/30 text-blue-400',
		Personnel: 'bg-purple-500/30 text-purple-400',
		Académique: 'bg-orange-500/30 text-orange-400'
	};

	function isVideo(src) {
		if (typeof src !== 'string') return false;
		const lower = src.toLowerCase();
		return lower.endsWith('.webm') || lower.endsWith('.mp4');
	}

	function lazyPlay(node) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.play().catch(() => {});
					} else {
						node.pause();
					}
				});
			},
			{ threshold: 0.05 }
		);
		observer.observe(node);
		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<li
	class="relative pl-8 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-gray-600 before:content-['']"
>
	<div class="flex flex-col md:flex-row">
		<div
			class="mb-4 flex flex-col md:mr-6 md:mb-0 md:w-1/3 {orientation === 'portrait'
				? 'items-center'
				: ''}"
		>
			{#if isVideo(image)}
				<video
					use:lazyPlay
					src={image}
					class="rounded-lg object-cover shadow-lg transition-shadow duration-300 hover:shadow-xl {orientation ===
					'portrait'
						? 'h-auto max-h-[400px] w-auto'
						: 'w-full'}"
					loop
					muted
					playsinline
					preload="none"
					aria-label={alt}
				>
					Your browser does not support the video tag.
				</video>
			{:else if isEnhancedImage(image)}
				<enhanced:img
					{alt}
					class="rounded-lg object-cover shadow-lg transition-shadow duration-300 hover:shadow-xl {orientation ===
					'portrait'
						? 'h-auto max-h-[400px] w-auto'
						: ''}"
					loading="lazy"
					src={image}
				/>
			{:else}
				<img
					{alt}
					class="rounded-lg object-cover shadow-lg transition-shadow duration-300 hover:shadow-xl {orientation ===
					'portrait'
						? 'h-auto max-h-[400px] w-auto'
						: ''}"
					loading="lazy"
					src={image}
				/>
			{/if}
		</div>
		<div class="md:w-2/3">
			<div class="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
				<h3 class="text-2xl font-semibold text-gray-100">{title}</h3>
				{#if type}
					<span
						class="inline-block rounded-full px-3 py-1 text-xs font-semibold {typeClasses[type] ||
							'bg-gray-500/30 text-gray-400'}"
					>
						{type}
					</span>
				{/if}
			</div>

			<ul class="mb-4 space-y-2 text-gray-300">
				{#each bullets as bullet}
					<li class="flex items-start">
						<span class="mt-1.5 mr-2 text-gray-500">•</span><span>{bullet}</span>
					</li>
				{/each}
			</ul>
			<div class="flex flex-wrap">
				{#each tags as tag}
					<span
						class="bg-opacity-30 mr-2 mb-2 inline-block rounded-full bg-green-500/30 px-3 py-1.5 text-xs font-medium text-green-500"
						>{tag}</span
					>
				{/each}
			</div>
			<div class="mt-4 flex space-x-4">
				{#if demo}
					<a
						href={demo}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-white"
					>
						<ExternalLink />
						<span>Voir le site</span>
					</a>
				{/if}
				{#if github}
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-white"
					>
						<Github />
						<span>Voir le code</span>
					</a>
				{/if}
			</div>
		</div>
	</div>
</li>

<style>
	img {
		filter: blur(10px);
		transition: filter 0.5s;
	}
	img[loading='lazy']:not([src*='placeholder']) {
		filter: none;
	}
	video {
		opacity: 0;
		transition: opacity 0.5s;
	}
	video {
		opacity: 1;
	}
</style>
