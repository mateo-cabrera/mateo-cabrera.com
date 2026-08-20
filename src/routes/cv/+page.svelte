<script lang="ts">
	/**
	 * Le CV, rendu depuis la même couche de contenu que le portfolio.
	 *
	 * C'est le point : l'ancien CV vivait dans un HTML autonome et avait pris
	 * deux expériences et quatre projets de retard sur le site. Ici il ne peut
	 * plus diverger — il n'existe qu'une source.
	 *
	 * Le PDF servi sur /CV-Mateo-Cabrera.pdf est l'impression de cette page.
	 */
	import { profile, socials } from '$lib/content/profile';
	import { experience } from '$lib/content/experience';
	import { education } from '$lib/content/education';
	import { skills } from '$lib/content/skills';
	import { projects } from '$lib/content/projects';

	const notable = projects.filter((p) => p.featured);
</script>

<svelte:head>
	<title>CV — Mateo Cabrera</title>
	<meta name="description" content="CV de Mateo Cabrera, Développeur Web Full Stack" />
	<meta name="robots" content="noindex" />
</svelte:head>

<article class="sheet">
	<header class="masthead">
		<div>
			<h1 class="lettering name">{profile.name}</h1>
			<p class="role">{profile.role}</p>
		</div>
		<ul class="contact">
			<li>{profile.location}</li>
			{#each socials as social (social.id)}
				<li>{social.label} · {social.handle}</li>
			{/each}
		</ul>
	</header>

	<p class="pitch">{profile.tagline}</p>

	<section>
		<h2 class="rubric">Expérience</h2>
		{#each experience as job (job.title + job.company)}
			<div class="entry">
				<div class="entry-head">
					<h3>{job.title} — {job.company}</h3>
					<span class="meta">{job.date} · {job.location}</span>
				</div>
				{#if job.metrics}
					<p class="metrics">
						{#each job.metrics as metric, i (metric.label)}<span
								><strong>{metric.value}</strong> {metric.label}</span
							>{#if i < job.metrics.length - 1}<span class="sep">·</span>{/if}{/each}
					</p>
				{/if}
				<ul class="bullets">
					{#each job.bullets as bullet (bullet)}<li>{bullet}</li>{/each}
				</ul>
				<p class="tags">{job.tags.join(' · ')}</p>
			</div>
		{/each}
	</section>

	<section class="break-before">
		<h2 class="rubric">Projets notables</h2>
		{#each notable as project (project.title)}
			<div class="entry">
				<div class="entry-head">
					<h3>{project.title}</h3>
					<span class="meta">{project.type}</span>
				</div>
				{#if project.metrics}
					<p class="metrics">
						{#each project.metrics as metric, i (metric.label)}<span
								><strong>{metric.value}</strong> {metric.label}</span
							>{#if i < project.metrics.length - 1}<span class="sep">·</span>{/if}{/each}
					</p>
				{/if}
				<ul class="bullets">
					{#each project.bullets.slice(0, 2) as bullet (bullet)}<li>{bullet}</li>{/each}
				</ul>
				<p class="tags">{project.tags.join(' · ')}</p>
			</div>
		{/each}
	</section>

	<section>
		<h2 class="rubric">Compétences</h2>
		<dl class="skills">
			{#each skills as group (group.id)}
				<div>
					<dt>{group.label}</dt>
					<dd>{group.items.join(' · ')}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<section>
		<h2 class="rubric">Formation</h2>
		{#each education as school (school.title)}
			<div class="entry entry--tight">
				<div class="entry-head">
					<h3>{school.title}</h3>
					<span class="meta">{school.date}</span>
				</div>
				<p class="institution">{school.institution}</p>
			</div>
		{/each}
	</section>
</article>

<style>
	@page {
		size: A4;
		margin: 12mm 13mm;
	}

	:global(body) {
		background: var(--color-ground-deep);
	}

	.sheet {
		/* À l'écran la feuille est présentée posée ; à l'impression @page prend
		   le relais et ces marges disparaissent. */
		box-sizing: border-box;
		width: 210mm;
		min-height: 297mm;
		margin: 0 auto;
		padding: 12mm 13mm;
		/* Pas --color-enamel-face : c'est un rôle de premier plan (lettrage sur
		   émail) et il tire vers le crème chaud, alors que tous les fonds de ce
		   monde sont froids. */
		background: var(--color-sheet);
		color: var(--color-ink);
		font-size: 9.4pt;
		line-height: 1.42;
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
	}

	.masthead {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 8mm;
		padding-bottom: 3mm;
		border-bottom: 2.4pt solid var(--color-ink);
	}

	.name {
		margin: 0;
		font-size: 26pt;
		line-height: 0.94;
		letter-spacing: -0.02em;
	}

	.role {
		margin: 1.6mm 0 0;
		display: inline-block;
		padding: 1mm 2.4mm;
		background: var(--color-indigo);
		color: var(--color-enamel-face);
		font-size: 9.6pt;
		font-weight: 800;
		font-stretch: var(--stretch-sign);
	}

	.contact {
		margin: 0;
		padding: 0;
		list-style: none;
		text-align: right;
		font-size: 8.4pt;
		color: var(--color-ink-2);
	}

	.pitch {
		margin: 4mm 0 0;
		font-size: 10.4pt;
		font-weight: 600;
		color: var(--color-ink);
		max-width: 130mm;
	}

	section {
		margin-top: 6mm;
	}

	.break-before {
		break-before: page;
	}

	.rubric {
		margin: 0 0 3mm;
		padding-bottom: 1.2mm;
		border-bottom: 1.2pt solid var(--color-ink);
		font-size: 8.4pt;
		font-weight: 800;
		font-stretch: var(--stretch-tight);
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.entry {
		margin-bottom: 4.4mm;
		break-inside: avoid;
	}

	.entry--tight {
		margin-bottom: 2.6mm;
	}

	.entry-head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 0 6mm;
	}

	/* Un intitulé long prend sa ligne entière et fait descendre la mention de
	   date, plutôt que de se faire écraser en deux lignes hachées. */
	.entry-head h3 {
		margin: 0;
		flex: 1 1 auto;
		min-width: 0;
		font-size: 10.4pt;
		font-weight: 800;
		font-stretch: var(--stretch-sign);
	}

	.meta {
		flex: none;
		font-size: 8.2pt;
		font-weight: 700;
		font-stretch: var(--stretch-tight);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-ink-3);
	}

	.metrics {
		margin: 1.4mm 0 0;
		font-size: 8.6pt;
		color: var(--color-vermilion-deep);
	}

	.metrics strong {
		font-weight: 800;
		font-variant-numeric: tabular-nums;
	}

	.metrics .sep {
		margin: 0 1.6mm;
		color: var(--color-ink-3);
	}

	.bullets {
		margin: 1.6mm 0 0;
		padding-left: 4mm;
	}

	.bullets li {
		margin-bottom: 0.9mm;
		list-style: square;
	}

	.bullets li::marker {
		color: var(--color-vermilion);
	}

	.tags,
	.institution {
		margin: 1.6mm 0 0;
		font-size: 8.4pt;
		color: var(--color-ink-3);
	}

	.skills {
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.6mm 8mm;
	}

	.skills div {
		break-inside: avoid;
	}

	.skills dt {
		font-size: 8.2pt;
		font-weight: 800;
		font-stretch: var(--stretch-tight);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-indigo);
	}

	.skills dd {
		margin: 0.6mm 0 0;
		color: var(--color-ink-2);
	}

	@media print {
		:global(body) {
			background: transparent;
		}

		.sheet {
			width: auto;
			min-height: 0;
			margin: 0;
			padding: 0;
			background: transparent;
		}
	}
</style>
