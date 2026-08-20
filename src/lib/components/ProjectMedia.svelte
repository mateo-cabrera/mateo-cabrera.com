<script lang="ts">
	import { lazyPlay } from '$lib/actions/lazyPlay';
	import { isEnhancedImage } from '$lib/utils';
	import type { MediaSource } from '$lib/content/types';

	let {
		image,
		poster,
		alt,
		orientation = 'landscape',
		priority = false
	}: {
		image: MediaSource;
		poster?: string;
		alt: string;
		orientation?: 'landscape' | 'portrait';
		priority?: boolean;
	} = $props();

	// Une valeur plutôt qu'un prédicat de type : `src is string` retirerait
	// `string` de l'union dans la branche `else`, alors que les svg et jpg bruts
	// y arrivent justement en tant que chaînes.
	const video = $derived(typeof image === 'string' && /\.(webm|mp4)$/i.test(image) ? image : null);

	/**
	 * Le cadre a un ratio fixe et le média est contenu, jamais recadré.
	 *
	 * Un ratio fixe supprime tout décalage de mise en page au chargement ; le
	 * `contain` évite de rogner l'interface d'une capture produit, ce qui est
	 * précisément ce qu'un visiteur vient regarder. Les captures vont de 1.53 à
	 * 1.94 de ratio : elles sont montées sur une plaque, comme un tirage.
	 */
	const frame = $derived(orientation === 'portrait' ? 'aspect-[4/5]' : 'aspect-[16/10]');
</script>

<div class="{frame} border-ink bg-ground-deep relative w-full overflow-hidden border-b-2">
	{#if video}
		<video
			src={video}
			{poster}
			aria-label={alt}
			class="absolute inset-0 size-full object-contain"
			loop
			muted
			playsinline
			preload="none"
			use:lazyPlay
		></video>
	{:else if isEnhancedImage(image)}
		<enhanced:img
			src={image}
			{alt}
			class="absolute inset-0 size-full object-contain"
			loading={priority ? 'eager' : 'lazy'}
			fetchpriority={priority ? 'high' : 'auto'}
		/>
	{:else}
		<img
			src={image.toString()}
			{alt}
			class="absolute inset-0 size-full object-contain"
			loading={priority ? 'eager' : 'lazy'}
		/>
	{/if}
</div>
