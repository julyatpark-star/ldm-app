import { useState } from 'react';
import PlaceholderHalftone from './PlaceholderHalftone.jsx';

/**
 * PersonaCard — top 60% is the halftone graphic (real image or fallback SVG),
 * bottom 40% is the text block.
 *
 * Real images: drop PNGs at /public/personas/{id}.png and the card
 * will use them automatically (placeholder is only the fallback).
 */
export default function PersonaCard({ persona, index = 0 }) {
  const [imgFailed, setImgFailed] = useState(false);
  const personaColor = `var(${persona.colorVar})`;

  return (
    <article
      className="
        group flex flex-col overflow-hidden
        rounded-lg bg-surface
        border transition-all duration-200
        hover:-translate-y-0.5 hover:bg-surface-hi
        animate-fade-in
      "
      style={{
        borderColor: `color-mix(in srgb, ${personaColor} 25%, transparent)`,
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="relative w-full">
        {!imgFailed ? (
          <img
            src={persona.image}
            alt={`${persona.name} portrait`}
            onError={() => setImgFailed(true)}
            className="block w-full aspect-square object-cover bg-black"
          />
        ) : (
          <PlaceholderHalftone
            shape={persona.fallbackShape}
            color={personaColor}
          />
        )}
        {/* Top-right corner dot accent */}
        <div
          className="absolute top-3 right-3 w-10 h-10 dot-pattern-dense opacity-30 pointer-events-none"
          style={{ color: personaColor }}
        />
      </div>

      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-2xl font-bold tracking-tight">{persona.name}</h3>
          <span
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: personaColor }}
          >
            {persona.essence}
          </span>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          {persona.description}
        </p>
      </div>
    </article>
  );
}
