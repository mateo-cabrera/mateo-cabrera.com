import type { ImageMetadata } from 'astro';

/**
 * Distingue une image locale, qu'Astro peut optimiser, d'une URL servie telle
 * quelle.
 *
 * C'est un prédicat de type, plus un simple booléen : sans ça, `<Picture>`
 * reçoit une union non réduite et le type-check refuse chaque appel.
 *
 * `astro:assets` n'expose pas d'équivalent public — il en a un en interne, sous
 * `astro/assets/utils/imageKind.js`, mais c'est un chemin privé qu'une montée de
 * version peut déplacer sans prévenir.
 */
export function isLocalImage(src: unknown): src is ImageMetadata {
	return typeof src === 'object' && src !== null && 'src' in src && 'format' in src;
}
