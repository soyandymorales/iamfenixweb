"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Heavy WebGL piece: loaded only client-side, and only near the viewport.
const FenixDiagramCanvas = dynamic(() => import("./FenixDiagramCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function ArquitecturaFenix() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
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
