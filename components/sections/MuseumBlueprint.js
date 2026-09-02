"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, DrawSVGPlugin, ScrollTrigger);

const CX = 500;
const CY = 500;
const RINGS = [140, 240, 340];
const OUTER = RINGS[2];

function round(value) {
  return Math.round(value * 100) / 100;
}

function polar(radius, deg, originX = CX, originY = CY) {
  const rad = (deg * Math.PI) / 180;
  return [
    round(originX + radius * Math.cos(rad)),
    round(originY + radius * Math.sin(rad)),
  ];
}

function ringTicks(count, radius, length) {
  return Array.from({ length: count }, (_, i) => {
    const deg = (i * 360) / count - 90;
    const inner = polar(radius - length, deg);
    const outer = polar(radius + length * 0.35, deg);
    return { x1: inner[0], y1: inner[1], x2: outer[0], y2: outer[1] };
  });
}

function axisTicks(step = 40, inset = 160, length = 8) {
  const ticks = [];
  for (let pos = inset; pos <= 1000 - inset; pos += step) {
    if (pos === CX) continue;
    ticks.push({ x1: pos, y1: CY - length, x2: pos, y2: CY + length });
    ticks.push({ x1: CX - length, y1: pos, x2: CX + length, y2: pos });
  }
  return ticks;
}

const MAJOR_TICKS = ringTicks(12, OUTER, 16);
const MINOR_TICKS = ringTicks(24, OUTER, 8).filter((_, i) => i % 2 === 1);
const AXIS_TICKS = axisTicks();
const CARDINALS = [0, 90, 180, 270].map((deg) => polar(OUTER, deg - 90));

function durationToken(name, fallback) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  const ms = Number.parseFloat(raw);
  return Number.isFinite(ms) && ms > 0 ? ms / 1000 : fallback;
}

export default function MuseumBlueprint() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const strokes = rootRef.current?.querySelectorAll("[data-stroke]");
      if (!strokes?.length) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced) {
        gsap.set(strokes, { drawSVG: "100%" });
        return;
      }

      const slow = durationToken("--motion-duration-slow", 1.2);
      const base = durationToken("--motion-duration", 0.6);

      gsap.set(strokes, { drawSVG: "0%" });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.to('[data-stroke="axis"]', {
        drawSVG: "100%",
        duration: slow,
        stagger: 0.06,
      })
        .to(
          '[data-stroke="ring"]',
          { drawSVG: "100%", duration: slow, stagger: 0.18 },
          "-=0.7"
        )
        .to(
          '[data-stroke="ray"]',
          { drawSVG: "100%", duration: slow },
          "-=0.9"
        )
        .to(
          '[data-stroke="tick"]',
          { drawSVG: "100%", duration: base, stagger: 0.012 },
          "-=0.8"
        )
        .to(
          '[data-stroke="node"]',
          { drawSVG: "100%", duration: base, stagger: 0.08 },
          "-=0.4"
        )
        .to(
          '[data-stroke="frame"]',
          { drawSVG: "100%", duration: base, stagger: 0.05 },
          "-=0.5"
        );
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="museum__blueprint" aria-hidden="true">
      <svg
        className="museum__blueprint-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line data-stroke="axis" x1={CX} y1="80" x2={CX} y2="920" />
        <line data-stroke="axis" x1="80" y1={CY} x2="920" y2={CY} />

        {RINGS.map((radius) => (
          <circle
            key={radius}
            data-stroke="ring"
            cx={CX}
            cy={CY}
            r={radius}
          />
        ))}

        <line
          data-stroke="ray"
          x1={CX - 240}
          y1={CY - 240}
          x2={CX + 240}
          y2={CY + 240}
        />
        <line
          data-stroke="ray"
          x1={CX + 240}
          y1={CY - 240}
          x2={CX - 240}
          y2={CY + 240}
        />

        <rect
          data-stroke="ray"
          x={CX - 240}
          y={CY - 240}
          width="480"
          height="480"
        />

        {AXIS_TICKS.map((tick, i) => (
          <line key={`axis-${i}`} data-stroke="tick" {...tick} />
        ))}
        {MAJOR_TICKS.map((tick, i) => (
          <line key={`major-${i}`} data-stroke="tick" {...tick} />
        ))}
        {MINOR_TICKS.map((tick, i) => (
          <line key={`minor-${i}`} data-stroke="tick" {...tick} />
        ))}

        {CARDINALS.map(([x, y], i) => (
          <circle key={`node-${i}`} data-stroke="node" cx={x} cy={y} r="5" />
        ))}

        <polyline data-stroke="frame" points="80,60 60,60 60,80" />
        <polyline data-stroke="frame" points="920,60 940,60 940,80" />
        <polyline data-stroke="frame" points="80,940 60,940 60,920" />
        <polyline data-stroke="frame" points="920,940 940,940 940,920" />
      </svg>
    </div>
  );
}
