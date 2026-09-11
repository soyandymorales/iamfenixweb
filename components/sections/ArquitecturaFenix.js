"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { canAffordHeavyMotion, simplifyMotion } from "@/lib/motion";

// Heavy WebGL piece: client-only, and only near the viewport.
const FenixDiagramCanvas = dynamic(() => import("./FenixDiagramCanvas"), {
  ssr: false,
  loading: () => null,
});

const PHOENIX_PLATE = encodeURI("/images/fenixiso_Mesa de trabajo 1.svg");

export default function ArquitecturaFenix() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!canAffordHeavyMotion()) return undefined;

    const node = sectionRef.current;
    if (!node) return undefined;

    const mobile = simplifyMotion();
    let idleId = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        const mount = () => setInView(true);
        if (mobile && typeof window.requestIdleCallback === "function") {
          idleId = window.requestIdleCallback(mount, { timeout: 450 });
        } else {
          mount();
        }
      },
      { rootMargin: mobile ? "80px 0px" : "200px 0px" }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section--viewport arquitectura"
      aria-labelledby="arquitectura-label"
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span id="arquitectura-label" className="eyebrow" data-reveal>
            Arquitectura Fénix
          </span>
        </header>

        <div className="arquitectura__canvas" aria-hidden="true">
          {/* Static plate until WebGL is ready, and the only view when it is not. */}
          <img
            src={PHOENIX_PLATE}
            alt=""
            className="arquitectura__fallback"
            decoding="async"
          />
          {inView ? <FenixDiagramCanvas /> : null}
          <div className="arquitectura__canvas-labels">
            <span>Desalineación y Fragmentación</span>
            <span className="arquitectura__accent">Alineación y Integración</span>
          </div>
        </div>
      </div>
    </section>
  );
}
