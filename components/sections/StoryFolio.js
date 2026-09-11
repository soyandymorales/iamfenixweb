"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

import { pilares } from "@/content/domains/filosofia";

const pillarsById = Object.fromEntries(pilares.map((pillar) => [pillar.id, pillar]));

function domainTitle(domain) {
  return pillarsById[domain]?.title ?? domain;
}

function plateAnnouncement(folio, plate, total) {
  const parts = [`${folio.kicker} ${plate.numeral} de ${total}`];

  if (plate.domain) {
    parts.push(domainTitle(plate.domain));
  }

  if (plate.bands?.length) {
    parts.push(
      plate.bands
        .map((band) => [band.title, band.line].filter(Boolean).join(", "))
        .join(". ")
    );
  } else if (plate.caption) {
    parts.push(plate.caption);
  }

  return parts.join(". ");
}

function PlateMock({ plate, empty }) {
  return (
    <div className="story__mock" aria-hidden="true">
      <span className="story__mock-numeral">{plate.numeral}</span>
      <span className="story__mock-domain">{domainTitle(plate.domain)}</span>
      <span className="story__mock-subject">{plate.subject}</span>
      <span className="story__mock-empty">{empty}</span>
    </div>
  );
}

export default function StoryFolio({ folio, founderName }) {
  const plates = folio?.plates ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const pointer = useRef(null);

  const goTo = useCallback(
    (index) => {
      if (plates.length === 0) return;
      const next = (index + plates.length) % plates.length;
      setActiveIndex(next);
    },
    [plates.length]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        goTo(activeIndex + 1);
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        goTo(activeIndex - 1);
      }

      if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        goTo(plates.length - 1);
      }
    },
    [activeIndex, goTo, plates.length]
  );

  const handlePointerDown = useCallback((event) => {
    pointer.current = { x: event.clientX, y: event.clientY };
  }, []);

  const handlePointerUp = useCallback(
    (event) => {
      if (!pointer.current) return;

      const dx = event.clientX - pointer.current.x;
      const dy = event.clientY - pointer.current.y;
      pointer.current = null;

      if (Math.abs(dx) < 48 || Math.abs(dx) <= Math.abs(dy)) return;

      goTo(dx > 0 ? activeIndex - 1 : activeIndex + 1);
    },
    [activeIndex, goTo]
  );

  if (plates.length === 0) {
    return (
      <aside className="story__folio story__folio--empty" aria-label={folio?.label}>
        <p>{folio?.empty}</p>
      </aside>
    );
  }

  const active = plates[activeIndex];
  const total = String(plates.length).padStart(2, "0");
  const hasBands = Boolean(active.bands?.length);
  const colophonClass = [
    "story__colophon",
    active.caption ? "" : "story__colophon--bare",
    hasBands ? "story__colophon--bands" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside
      className="story__folio"
      role="region"
      aria-label={`${folio.label} de ${founderName}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      data-reveal
    >
      <p className="sr-only" aria-live="polite">
        {plateAnnouncement(folio, active, total)}
      </p>

      <figure
        className="story__stage"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <div
          className={hasBands ? "story__plate story__plate--bands" : "story__plate"}
          key={active.id}
        >
          <div className="story__frame">
            {active.image ? (
              <Image
                src={active.image}
                alt={active.alt}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className="story__image"
              />
            ) : (
              <PlateMock plate={active} empty={folio.empty} />
            )}

            {hasBands ? (
              <ol className="story__bands" aria-hidden="true">
                {active.bands.map((band) => (
                  <li key={band.title} className="story__band">
                    <span className="story__band-title">{band.title}</span>
                    {band.line ? <span className="story__band-line">{band.line}</span> : null}
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        </div>

        <figcaption className={colophonClass}>
          <div className="story__colophon-meta">
            <span className="story__colophon-numeral">{active.numeral}</span>
            {active.caption ? <p className="story__colophon-caption">{active.caption}</p> : null}
          </div>
          <div className="story__colophon-nav">
            <button
              type="button"
              className="story__step"
              onClick={() => goTo(activeIndex - 1)}
              aria-label={folio.previous}
            >
              Anterior
            </button>
            <span className="story__count" aria-hidden="true">
              {active.numeral} / {total}
            </span>
            <button
              type="button"
              className="story__step"
              onClick={() => goTo(activeIndex + 1)}
              aria-label={folio.next}
            >
              Siguiente
            </button>
          </div>
        </figcaption>
      </figure>
    </aside>
  );
}
