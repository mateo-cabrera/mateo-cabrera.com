<script lang="ts">
	/**
	 * L'en-tête de rubrique.
	 *
	 * Ni sur-titre ni numéro de section : le titre porte son propre poids, et une
	 * séquence 01→06 ne dit rien au lecteur que la note de comptage ne dise déjà
	 * mieux.
	 */
	let { title, note }: { title: string; note?: string } = $props();
</script>

<div class="border-ink mb-8 flex items-end justify-between gap-6 border-b-2 pb-3 sm:mb-10">
	<h2 class="lettering text-plate text-ink">{title}</h2>
	{#if note}
		<p class="admin text-ink-3 shrink-0 pb-1">{note}</p>
	{/if}
</div>
