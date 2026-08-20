import type { Picture } from 'vite-imagetools';

/**
 * Distingue un import `?enhanced` (objet `Picture`) d'une URL d'asset brute.
 *
 * C'est un prédicat de type, plus un simple booléen : sans ça, `enhanced:img`
 * reçoit une union non réduite et le type-check refuse chaque appel.
 */
export function isEnhancedImage(srcPath: unknown): srcPath is Picture {
	return typeof srcPath === 'object' && srcPath !== null && 'img' in srcPath;
}
