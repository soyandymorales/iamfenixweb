"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion, simplifyMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Orchestrates the scroll-driven reveals for every element marked with
 * [data-reveal]. Sections stay Server Components; this single client
 * boundary owns all scroll animation state.
 *
 * Mobile skips ScrollTrigger entirely: hiding and translating text during
 * native scroll is what produces the Safari/Chrome glitches.
 */
export default function LayoutClient({ children }) {
  useGSAP(() => {
    const elements = gsap.utils.toArray("[data-reveal]");
    if (elements.length === 0) return undefined;

    if (prefersReducedMotion() || simplifyMotion()) {
      gsap.set(elements, { autoAlpha: 1, y: 0, clearProps: "transform" });
      return undefined;
    }

    ScrollTrigger.config({ ignoreMobileResize: true });

    gsap.set(elements, { autoAlpha: 0, y: 24 });

    ScrollTrigger.batch(elements, {
      start: "top 88%",
      once: true,
      interval: 0.1,
      batchMax: 8,
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power2.out",
          overwrite: true,
        });
      },
    });

    const fonts = document.fonts;
    let cancelled = false;
    if (fonts?.ready) {
      fonts.ready.then(() => {
        if (!cancelled && window.scrollY < 8) ScrollTrigger.refresh();
      });
    }

    return () => {
      cancelled = true;
    };
  });

  return children;
}
