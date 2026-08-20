<script lang="ts">
	import '../app.css';

	let { children } = $props();

	// Svelte retire les commentaires du markup à la compilation ; {@html} est le
	// seul moyen de garantir que le contrat survive au build de production.
	const contract = `<!--
THESIS: un portfolio n'est pas une vitrine unique mais une rue couverte — onze produits indépendants sous un même toit, chacun sa plaque. Refuse le split-pane bio-fixe / colonne scrollante.
OWN-WORLD: plaques émaillées de shōtengai. Sol d'arcade pâle et froid, champs saturés indigo / vermillon / jaune de chrome qui possèdent des régions entières, arête franche, une seule ligne de brillance. Archivo variable, wdth 125 / wght 800 pour les plaques, wdth 64 pour l'administratif. Aucun dégradé, aucune ombre portée décalée, aucune pilule.
STORY: le visiteur lit nom, métier, promesse et quatre chiffres réels sans scroller, prend le CV, descend la rue, voit trois enseignes tourner en boucle, repart avec un contact.
FIRST VIEWPORT: enseigne pleine largeur — nom en lettrage marquee, plaque de métier, promesse, bandeau de quatre plaques chiffrées, portrait monté carré à droite ; action primaire vermillon (CV) et trois plaques de contact sous la promesse.
FORM: shōtengai enamel signage, candidat 3 de la liste ordonnée, seed 2e270072.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
-->`;
</script>

{@html contract}

{@render children()}
