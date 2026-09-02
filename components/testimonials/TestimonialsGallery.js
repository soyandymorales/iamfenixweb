"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Galería de voces: una sola voz en escena a la vez.
 * Los retratos actúan como selector; el resto de la sección
 * permanece como Server Component.
 */
export default function TestimonialsGallery({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <div className="voices" data-reveal>
      <div className="voices__stagewrap" aria-live="polite">
        <figure key={active.id} className="voices__stage">
          <blockquote className="voices__quote">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          <figcaption className="voices__meta">
            <strong className="voices__name">
              {active.name}
              <Image
                src={active.country.flag}
                alt={active.country.name}
                width={18}
                height={12}
                className="voices__flag"
              />
            </strong>
            <span className="voices__role">{active.role}</span>

            <span className="voices__proof">
              {active.organizations.map((organization) => (
                <Image
                  key={organization.name}
                  src={organization.logo}
                  alt={organization.name}
                  width={120}
                  height={32}
                  className={
                    organization.compact
                      ? "voices__org voices__org--compact"
                      : "voices__org"
                  }
                />
              ))}
              <a
                href="https://www.instagram.com/stories/highlights/17990753008607651/"
                className="voices__verified"
                target="_blank"
                rel="noopener noreferrer"
              >
                verificar ahora
              </a>
            </span>
          </figcaption>
        </figure>
      </div>

      <div
        className="voices__selector"
        role="group"
        aria-label="Elegir testimonio"
      >
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            className={
              index === activeIndex
                ? "voices__thumb voices__thumb--active"
                : "voices__thumb"
            }
            aria-label={`Testimonio de ${testimonial.name}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {testimonial.portrait ? (
              <Image src={testimonial.portrait} alt="" fill sizes="48px" />
            ) : (
              <span className="voices__initials" aria-hidden="true">
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
