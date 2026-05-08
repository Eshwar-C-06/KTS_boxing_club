"use client";

/**
 * FilmGrain — Ultra-subtle CSS-only grain overlay.
 * Opacity is 3% — barely perceptible, adds analog texture.
 * Completely hidden when prefers-reduced-motion is active.
 * No animations, no canvas, no GPU cost.
 */
export default function FilmGrain() {
  return (
    <div
      className="film-grain"
      aria-hidden="true"
      role="presentation"
    />
  );
}
