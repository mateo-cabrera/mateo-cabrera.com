<script lang="ts">
	import SiteNav from '$lib/components/SiteNav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Work from '$lib/components/Work.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Education from '$lib/components/Education.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const title = 'Mateo Cabrera — Développeur Web Full Stack';
	const description =
		'Développeur web full stack. Créer de vrais produits pour de vrais clients, pas juste des projets supplémentaires.';
	const url = 'https://mateo-cabrera.com';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:locale" content="fr_FR" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{url}/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{url}/og.png" />
</svelte:head>

<a
	href="#travaux"
	class="plate bg-vermilion text-enamel-face sr-only z-[60] px-4 py-3 font-bold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
>
	Aller au contenu
</a>

<SiteNav />

<main>
	<Hero />
	<Work />
	<Experience />
	<Education />
	<Skills />
	<About />
	<Contact />
</main>

<Footer />
