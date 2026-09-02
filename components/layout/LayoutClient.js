"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Orchestrates the scroll-driven reveals for every element marked with
 * [data-reveal]. Sections stay Server Components; this single client
 * boundary owns all scroll animation state.
 */
export default function LayoutClient({ children }) {
  useEffect(() => {
    const elements = gsap.utils.toArray("[data-reveal]");
    if (elements.length === 0) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(elements, { autoAlpha: 1 });
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const tweens = elements.map((el) => {
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children).filter((child) =>
            child.hasAttribute("data-reveal")
          )
        : [el];
      const indexInGroup = Math.max(siblings.indexOf(el), 0);

      return gsap.fromTo(
        el,
        { autoAlpha: 0, y: "var(--reveal-distance)" },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: indexInGroup * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, []);

  return children;
}
