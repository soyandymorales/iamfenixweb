"use client";

import { Fragment, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* Static imports: the bundler fingerprints the file, so re-exporting the
   artwork under the same name can never serve a stale optimised version. */
import blueprintField from "@/public/images/blueprinthero.png";
import andyScene from "@/public/images/andyherofinal.jpg";
import { siteMetadata } from "@/content/metadata/site";

const HEADLINE = [{ text: "Arquitectura" }, { text: "Humana" }];

/* Labels espaciados a propósito — voz editorial de la composición, no branding oficial. */
const SOCIAL_LINKS = [
  { label: "Linked in", href: siteMetadata.social.linkedin },
  { label: "You Tube", href: siteMetadata.social.youtube },
  { label: "Strava", href: siteMetadata.social.strava },
];

export default function Hero() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
          "[data-hero-figure]",
          { autoAlpha: 0, scale: 1.035 },
          { autoAlpha: 1, scale: 1, duration: 2.6 },
          0
        )
        .fromTo("[data-hero-blueprint]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 2.4 }, 0.15)
        .fromTo(
          "[data-hero-atmosphere]",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 2.6 },
          0.2
        )
        .fromTo(
          "[data-hero-word]",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.1, stagger: 0.07 },
          0.75
        )
        .fromTo(
          "[data-hero-kicker], [data-hero-sub], [data-hero-cta]",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 },
          1.25
        )
        .fromTo("[data-hero-bar]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.4 }, 1.7);
    },
    { scope: rootRef }
  );

  return (
    <section className="hero" id="top" ref={rootRef}>
      <div className="hero__figure" aria-hidden="true" data-hero-figure>
        <Image
          src={andyScene}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__figure-image"
        />
      </div>

      <div className="hero__blueprint" aria-hidden="true" data-hero-blueprint>
        <Image
          src={blueprintField}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__blueprint-image"
        />
      </div>

      <div className="hero__atmosphere" aria-hidden="true" data-hero-atmosphere>
        <div className="hero__glow" />
        <div className="hero__bloom" />
      </div>

      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__dissolve" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__headline">
          {HEADLINE.map((word, i) => (
            <Fragment key={i}>
              <span className="hero__word-mask">
                <span className="hero__word" data-hero-word>
                  {word.text}
                </span>
              </span>{" "}
            </Fragment>
          ))}
        </h1>

        <p className="hero__kicker" data-hero-kicker>
          Estudio el arte de hacer de la vida una obra maestra.
        </p>

        <p className="hero__subheadline" data-hero-sub>
          Ayudo a fundadores, ejecutivos y atletas a proteger y expandir{" "}
          <br className="hero__break" aria-hidden="true" />
          su energía vital, presencia y libertad sin perder su alma.
        </p>

        <div className="hero__bar-cta" data-hero-cta>
          <a href="#empieza-aqui" className="btn btn--solid">
            Diarios del Fénix
          </a>
          <span className="hero__bar-note">Accede gratis a los planos</span>
        </div>
      </div>

      <div className="hero__bar" data-hero-bar>
        <nav className="hero__bar-links" aria-label="Perfiles de Andy">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
