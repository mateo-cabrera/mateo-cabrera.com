<script lang="ts">
	import Icon from './Icon.svelte';
	import { profile, headlineMetrics, socials, cv } from '$lib/content/profile';
	import { projects } from '$lib/content/projects';

	/** Les trois enseignes de coin, nommées dans le premier viewport. Un
	 *  recruteur doit pouvoir citer une chose qu'il a construite, pas seulement
	 *  réciter quatre chiffres. */
	const featured = projects.filter((p) => p.featured);

	let copied = $state(false);
	let copyTimer: ReturnType<typeof setTimeout>;

	async function copyEmail(event: MouseEvent) {
		const email = socials.find((s) => s.id === 'email')?.handle;
		if (!email || !navigator.clipboard) return; // sans presse-papiers, le mailto: fait le travail
		event.preventDefault();
		try {
			await navigator.clipboard.writeText(email);
			copied = true;
			clearTimeout(copyTimer);
			copyTimer = setTimeout(() => (copied = false), 1800);
		} catch {
			window.location.href = `mailto:${email}`;
		}
	}
</script>

<section id="accueil" class="border-ink relative border-b-2">
	<div class="mx-auto w-full max-w-[1240px] px-5 pt-8 pb-0 sm:px-8 lg:pt-10">
		<!-- Portrait + plaque de lieu : sur mobile ils ouvrent, sur desktop ils
		     rejoignent la colonne de droite sous le lettrage. -->
		<div class="mb-5 flex items-center gap-4 lg:hidden">
			<div class="plate bg-indigo border-ink size-[72px] shrink-0 overflow-hidden border-2">
				<enhanced:img
					src={profile.photo}
					alt={profile.photoAlt}
					class="size-full object-cover"
					fetchpriority="high"
				/>
			</div>
			<p class="admin text-ink-3 flex items-center gap-1.5">
				<Icon name="pin" size={13} />
				{profile.location}
			</p>
		</div>

		<!-- Le nom occupe son panneau sur une seule ligne, plafonné à 6rem ; la
		     place qui reste à sa droite porte les trois produits nommés, de sorte
		     que le panneau soit rempli d'un bord à l'autre. En dessous de xl le
		     nom remplit déjà sa mesure et il n'y a pas de vide à combler. -->
		<div class="xl:grid xl:grid-cols-[auto_minmax(0,1fr)] xl:items-center xl:gap-10">
			<h1 class="lettering text-marquee text-ink xl:whitespace-nowrap">{profile.name}</h1>

			<ul
				aria-label="Projets en vedette"
				class="plate border-ink bg-ground hidden border-2 xl:block"
			>
				{#each featured as project (project.title)}
					<li class="border-ink-line not-first:border-t-2">
						<a
							href="#travaux"
							class="group hover:bg-chrome block px-4 py-2.5 transition-colors duration-200"
						>
							<span class="admin text-ink-3 group-hover:text-ink block">
								{project.category === 'Projets Web' ? 'Web' : 'Jeu vidéo'}
							</span>
							<span class="stretch-sign text-small text-ink mt-0.5 block font-extrabold">
								{project.title}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
			<div>
				<p
					class="plate stretch-sign bg-indigo text-sign text-enamel-face inline-block px-3.5 py-2 font-extrabold"
				>
					{profile.role}
				</p>

				<!-- Le statut, pas un sur-titre : il est sous le rôle, pas au-dessus d'un
				     titre. Il répond à « où il en est » sans que le lecteur déduise. -->
				<ul class="admin text-ink-3 mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
					{#each profile.status as fact, i (fact)}
						{#if i > 0}<li aria-hidden="true" class="text-ink-3">·</li>{/if}
						<li>{fact}</li>
					{/each}
				</ul>

				<p class="text-body text-ink-2 mt-4 max-w-[46ch]">{profile.tagline}</p>

				<div class="mt-6 flex flex-wrap items-center gap-2.5">
					<a
						href={cv.href}
						download={cv.filename}
						class="plate pressable stretch-sign bg-vermilion text-sign text-enamel-face hover:bg-vermilion-deep inline-flex items-center gap-2.5 px-5 py-3 font-extrabold"
					>
						<Icon name="download" size={17} />
						{cv.label}
					</a>

					{#each socials as social (social.id)}
						<a
							href={social.href}
							target={social.id === 'email' ? null : '_blank'}
							rel={social.id === 'email' ? null : 'noopener noreferrer'}
							onclick={social.id === 'email' ? copyEmail : null}
							class="plate pressable border-ink bg-ground text-small text-ink hover:bg-chrome inline-flex items-center gap-2 border-2 px-3.5 py-2.5 font-bold"
						>
							<Icon name={social.id === 'email' ? 'mail' : social.id} size={16} />
							<span>{social.id === 'email' && copied ? 'Adresse copiée' : social.label}</span>
						</a>
					{/each}
				</div>
				<p class="sr-only" aria-live="polite">
					{copied ? 'Adresse e-mail copiée dans le presse-papiers.' : ''}
				</p>
			</div>

			<div class="hidden lg:block">
				<div class="plate bg-indigo border-ink size-[188px] overflow-hidden border-2">
					<enhanced:img
						src={profile.photo}
						alt={profile.photoAlt}
						class="size-full object-cover"
						fetchpriority="high"
					/>
				</div>
				<p class="admin text-ink-3 mt-3 flex items-center gap-1.5">
					<Icon name="pin" size={13} />
					{profile.location}
				</p>
			</div>
		</div>
	</div>

	<!-- Le bandeau de preuve. Chiffres jaunes sur émail indigo : c'est la seule
	     région de la page qui existe pour être lue en trois secondes. -->
	<div class="border-ink bg-indigo mt-8 border-t-2 lg:mt-12">
		<dl
			class="divide-indigo-deep mx-auto grid w-full max-w-[1240px] grid-cols-1 divide-x-0 divide-y-2 sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0"
		>
			{#each headlineMetrics as metric (metric.label)}
				<!-- Sur mobile la valeur et son libellé tiennent sur une ligne, comme
				     une rangée de tableau d'affichage : trois cellules empilées en
				     colonne coûteraient un tiers du premier viewport. -->
				<div class="flex items-baseline gap-3 px-5 py-4 sm:block sm:px-6 sm:py-7">
					<dt class="sr-only">{metric.label}</dt>
					<dd class="contents sm:block">
						<span
							class="lettering nums-tabular text-plate text-chrome sm:text-plate-xl min-w-[3.4em] sm:block sm:min-w-0"
							>{metric.value}</span
						>
						<span class="admin text-enamel-face/90 sm:mt-1.5 sm:block">{metric.label}</span>
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
