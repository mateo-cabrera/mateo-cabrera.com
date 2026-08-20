<script lang="ts">
	// Le millésime était figé à 2025 dans le markup, pendant que le README
	// affichait 2026. Il se calcule maintenant.
	const year = new Date().getFullYear();
</script>

<footer class="border-ink bg-ink text-enamel-face border-t-2">
	<div
		class="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-3 px-5 py-6 sm:px-8"
	>
		<p class="admin">Designed and built by Mateo Cabrera</p>
		<p class="admin nums-tabular text-enamel-face/60">© {year} All rights reserved</p>
	</div>
</footer>
