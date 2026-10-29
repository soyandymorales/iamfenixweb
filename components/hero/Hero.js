"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getHomeCopy } from "@/content/metadata/home";
import { siteMetadata } from "@/content/metadata/site";
import { useLocale } from "@/hooks/useLocale";
import { localizeHref } from "@/libs/locale";
import { prefersReducedMotion, simplifyMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP);

/* Static imports: the bundler fingerprints the file, so re-exporting the
   artwork under the same name can never serve a stale optimised version. */
import blueprintField from "@/public/images/blueprinthero.png";
import andyScene from "@/public/images/andyherofinal.jpg";

/* Public files. Bump the query when an mp4 is replaced so caches drop the previous cut. */
const HERO_VIDEO_DESKTOP = "/images/andyhero.mp4?v=202610261944";
const HERO_VIDEO_MOBILE = "/images/andyheromobile.mp4?v=202610261948";
const heroPoster = andyScene.src ?? andyScene;

const SOCIAL_LINKS = [
  { label: "Linked in", href: siteMetadata.social.linkedin },
  { label: "You Tube", href: siteMetadata.social.youtube },
  { label: "Strava", href: siteMetadata.social.strava },
];

export default function Hero() {
  const locale = useLocale();
  const copy = getHomeCopy(locale);
  const diariosHref = localizeHref("/planosddf", locale);
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const narrowRef = useRef(null);
  const [videoOn, setVideoOn] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      const saveData = navigator.connection?.saveData === true;
      const allowed = !mobile.matches && !reduced.matches && !saveData;
      setVideoOn(allowed);
      if (!allowed) setVideoReady(false);
    };

    update();
    mobile.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const root = rootRef.current;
    if (!videoOn || !video || !root) return undefined;

    video.muted = true;

    const play = () => {
      if (document.hidden) return;
      video.play().then(() => setVideoReady(true)).catch(() => {});
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) play();
      else video.pause();
    });
    observer.observe(root);

    const onVisibility = () => {
      if (document.hidden) video.pause();
      else play();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      video.pause();
    };
  }, [videoOn]);

  useEffect(() => {
    const video = narrowRef.current;
    const root = rootRef.current;
    if (!video || !root) return undefined;

    const mobile = window.matchMedia("(max-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const arm = (node) => {
      node.muted = true;
      node.defaultMuted = true;
      node.playsInline = true;
      node.setAttribute("muted", "");
      node.setAttribute("playsinline", "");
      node.setAttribute("webkit-playsinline", "true");
    };

    const play = () => {
      if (!mobile.matches || reduced.matches || document.hidden) {
        video.pause();
        return;
      }
      if (navigator.connection?.saveData) {
        video.pause();
        return;
      }
      arm(video);
      video.play().catch(() => {});
    };

    arm(video);
    play();
    video.addEventListener("canplay", play);
    video.addEventListener("loadeddata", play);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) play();
      else video.pause();
    });
    observer.observe(root);

    const onGesture = () => play();
    window.addEventListener("touchstart", onGesture, { passive: true });
    window.addEventListener("pointerdown", onGesture);

    const onVisibility = () => play();
    document.addEventListener("visibilitychange", onVisibility);
    mobile.addEventListener("change", play);
    reduced.addEventListener("change", play);

    return () => {
      video.removeEventListener("canplay", play);
      video.removeEventListener("loadeddata", play);
      observer.disconnect();
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("pointerdown", onGesture);
      document.removeEventListener("visibilitychange", onVisibility);
      mobile.removeEventListener("change", play);
      reduced.removeEventListener("change", play);
      video.pause();
    };
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion() || simplifyMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

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
          "[data-hero-kicker], [data-hero-cta]",
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
          quality={90}
          sizes="(max-width: 768px) 100vw, 120vw"
          className="hero__figure-image"
        />
        {videoOn ? (
          <video
            ref={videoRef}
            className={`hero__figure-video hero__figure-video--wide${videoReady ? " is-ready" : ""}`}
            src={HERO_VIDEO_DESKTOP}
            poster={heroPoster}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            disablePictureInPicture
          />
        ) : null}
        {/* In the first HTML: iOS only autoplays a muted inline video that
            was parsed with the page, not one inserted after hydration. */}
        <video
          ref={narrowRef}
          className="hero__figure-video hero__figure-video--narrow"
          src={HERO_VIDEO_MOBILE}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          disablePictureInPicture
          webkit-playsinline="true"
        />
      </div>

      <div className="hero__blueprint" aria-hidden="true" data-hero-blueprint>
        <Image
          src={blueprintField}
          alt=""
          fill
          priority
          quality={75}
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
          {copy.headline.map((line, lineIndex) => (
            <span
              key={lineIndex}
              className={`hero__line${lineIndex === 0 ? " hero__line--lead" : ""}`}
            >
              {line.map((word, wordIndex) => (
                <Fragment key={wordIndex}>
                  <span className="hero__word-mask">
                    <span className="hero__word" data-hero-word>
                      {word}
                    </span>
                  </span>{" "}
                </Fragment>
              ))}
            </span>
          ))}
        </h1>

        <p className="hero__kicker" data-hero-kicker>
          {copy.kicker}
        </p>

        <div className="hero__bar-cta" data-hero-cta>
          <a href={diariosHref} className="btn btn--solid">
            {copy.cta}
          </a>
          <span className="hero__bar-note">{copy.ctaNote}</span>
        </div>
      </div>

      <div className="hero__bar" data-hero-bar>
        <nav className="hero__bar-links" aria-label={copy.socialLabel}>
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
