"use client";

import { useEffect, useRef } from "react";

const MAX_POINTS = 1400;
const PHOENIX_URL = encodeURI("/images/fenixiso_Mesa de trabajo 1.svg");

const ROLE_PHOENIX = 0;
const ROLE_RING = 1;
const ROLE_NODE = 2;
const ROLE_LINE = 3;

function readToken(name, fallback) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || fallback;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

function collectFilledPixels(img, { maxDim = 720, step = 2, alphaMin = 28 } = {}) {
  const naturalW = img.naturalWidth || 901;
  const naturalH = img.naturalHeight || 523;
  const fit = Math.min(maxDim / naturalW, maxDim / naturalH, 1.6);
  const width = Math.max(1, Math.round(naturalW * fit));
  const height = Math.max(1, Math.round(naturalH * fit));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, 0, 0, width, height);
  const { data } = ctx.getImageData(0, 0, width, height);

  const samples = [];
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      if (data[(y * width + x) * 4 + 3] >= alphaMin) {
        samples.push({ x, y });
      }
    }
  }

  return samples;
}

function pickEven(samples, count) {
  if (samples.length <= count) return samples;
  const picked = [];
  const stride = samples.length / count;
  for (let i = 0; i < count; i += 1) {
    picked.push(samples[Math.floor(i * stride)]);
  }
  return picked;
}

function mapPhoenixToWorld(samples) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const sample of samples) {
    if (sample.x < minX) minX = sample.x;
    if (sample.x > maxX) maxX = sample.x;
    if (sample.y < minY) minY = sample.y;
    if (sample.y > maxY) maxY = sample.y;
  }

  const cx = (minX + maxX) * 0.5;
  const cy = (minY + maxY) * 0.5;
  const halfW = Math.max((maxX - minX) * 0.5, 1);
  const halfH = Math.max((maxY - minY) * 0.5, 1);
  const scale = 2.15 / halfW;

  return {
    halfW: halfW * scale,
    halfH: halfH * scale,
    points: samples.map((sample) => ({
      x: (sample.x - cx + (Math.random() - 0.5) * 0.35) * scale,
      y: -(sample.y - cy + (Math.random() - 0.5) * 0.35) * scale,
      role: ROLE_PHOENIX,
    })),
  };
}

function buildOrbitPoints(halfW, halfH) {
  const outer = Math.max(halfW, halfH) * 1.14;
  const rings = [0.5, 0.7, 0.88, 1].map((t) => t * outer);
  const points = [];

  for (const radius of rings) {
    const count = Math.round(32 + radius * 24);
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
      points.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        role: ROLE_RING,
      });
    }
  }

  const nodeYs = [-1, -0.7, -0.5, 0.5, 0.7, 1].map((t) => t * outer);
  for (let i = 0; i < nodeYs.length; i += 1) {
    const cluster = i === 0 || i === nodeYs.length - 1 ? 9 : 6;
    for (let n = 0; n < cluster; n += 1) {
      points.push({
        x: (Math.random() - 0.5) * 0.035,
        y: nodeYs[i] + (Math.random() - 0.5) * 0.035,
        role: ROLE_NODE,
      });
    }
  }

  for (const t of [1, 0.7, -0.7, -1]) {
    const y = t * outer;
    const start = 0.1;
    const end = outer * 0.48;
    const count = 11;
    for (let i = 0; i < count; i += 1) {
      points.push({
        x: start + ((end - start) * i) / (count - 1),
        y,
        role: ROLE_LINE,
      });
    }
  }

  return points;
}

function scatterAround() {
  const radius = 1.6 + Math.random() * 3.4;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi) * 0.72,
    radius * Math.sin(phi) * Math.sin(theta) * 0.9,
  ];
}

/**
 * Fragmentation → integration diagram. Scattered particles assemble into
 * the Fénix celestial plate, then keep the rings, nodes and silhouette alive.
 */
export default function FenixDiagramCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const [THREE, gsapModule, scrollTriggerModule] = await Promise.all([
        import("three"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed) return;

      const gsap = gsapModule.default;
      const { ScrollTrigger } = scrollTriggerModule;
      gsap.registerPlugin(ScrollTrigger);

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const ember = new THREE.Color(readToken("--color-ember", "#b56a3a"));

      let targets = [];
      try {
        const img = await loadImage(PHOENIX_URL);
        if (disposed) return;
        const filled = collectFilledPixels(img);
        const phoenix = mapPhoenixToWorld(pickEven(filled, 820));
        targets = [...phoenix.points, ...buildOrbitPoints(phoenix.halfW, phoenix.halfH)];
      } catch {
        targets = [];
      }

      if (disposed) return;
      if (targets.length < 80) return;

      const count = Math.min(targets.length, MAX_POINTS);

      const scattered = new Float32Array(count * 3);
      const rest = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const staggers = new Float32Array(count);
      const radii = new Float32Array(count);
      const angles = new Float32Array(count);
      const roles = new Uint8Array(count);
      const spin = new Float32Array(count);

      for (let i = 0; i < count; i += 1) {
        const target = targets[i];
        const x = target.x;
        const y = target.y;
        rest[i * 3] = x;
        rest[i * 3 + 1] = y;
        rest[i * 3 + 2] = 0;

        const [sx, sy, sz] = scatterAround();
        scattered[i * 3] = sx;
        scattered[i * 3 + 1] = sy;
        scattered[i * 3 + 2] = sz;

        const radius = Math.hypot(x, y);
        radii[i] = radius;
        angles[i] = Math.atan2(y, x);
        roles[i] = target.role;
        spin[i] =
          target.role === ROLE_RING ? 0.22 / Math.max(radius, 0.55) : 0;

        colors[i * 3] = ember.r;
        colors[i * 3 + 1] = ember.g;
        colors[i * 3 + 2] = ember.b;

        staggers[i] = Math.min(radius / 3.4, 1) * 0.42 + Math.random() * 0.08;
      }

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        42,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 0.08, 7.1);
      camera.lookAt(0, 0, 0);

      const sizes = new Float32Array(count);
      for (let i = 0; i < count; i += 1) {
        if (roles[i] === ROLE_NODE) sizes[i] = 10;
        else if (roles[i] === ROLE_PHOENIX) sizes[i] = 4.8;
        else if (roles[i] === ROLE_LINE) sizes[i] = 3.2;
        else sizes[i] = 3.8;
      }

      const positions = new Float32Array(scattered);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        },
        vertexShader: `
          attribute float aSize;
          attribute vec3 aColor;
          varying vec3 vColor;
          uniform float uPixelRatio;
          void main() {
            vColor = aColor;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            float attenuation = 5.4 / max(1.0, -mvPosition.z);
            gl_PointSize = aSize * uPixelRatio * attenuation;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            vec2 coord = gl_PointCoord - vec2(0.5);
            float dist = length(coord);
            if (dist > 0.5) discard;
            float alpha = smoothstep(0.5, 0.08, dist) * 0.42;
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        toneMapped: false,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const state = { progress: reduced ? 1 : 0 };
      let frame = 0;
      const easeInOut = (t) => t * t * (3 - 2 * t);

      const living = (index, time) => {
        const role = roles[index];
        const restX = rest[index * 3];
        const restY = rest[index * 3 + 1];
        const breath = 1 + Math.sin(time * 0.00115) * 0.02;

        if (role === ROLE_RING) {
          const angle = angles[index] + time * 0.001 * spin[index];
          const radius = radii[index] * breath;
          return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0];
        }

        if (role === ROLE_PHOENIX) {
          return [
            restX * breath,
            restY * breath,
            Math.sin(time * 0.0014 + index * 0.15) * 0.04,
          ];
        }

        if (role === ROLE_NODE) {
          const pulse = 1 + Math.sin(time * 0.0024 + radii[index] * 4) * 0.035;
          return [restX * pulse, restY * pulse, 0];
        }

        return [
          restX + Math.sin(time * 0.0017 + restY * 6) * 0.025,
          restY,
          0,
        ];
      };

      const render = (time) => {
        const attr = geometry.getAttribute("position");
        const array = attr.array;
        const progress = state.progress;

        for (let i = 0; i < count; i += 1) {
          const local = Math.min(
            Math.max((progress - staggers[i]) / 0.58, 0),
            1
          );
          const t = easeInOut(local);
          const [lx, ly, lz] = living(i, time);
          const i3 = i * 3;
          array[i3] = scattered[i3] + (lx - scattered[i3]) * t;
          array[i3 + 1] = scattered[i3 + 1] + (ly - scattered[i3 + 1]) * t;
          array[i3 + 2] = scattered[i3 + 2] + (lz - scattered[i3 + 2]) * t;
        }

        attr.needsUpdate = true;
        points.rotation.y = reduced ? 0 : (1 - progress) * 0.32;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(render);
      };
      frame = requestAnimationFrame(render);

      let scrollTween = null;
      if (!reduced) {
        scrollTween = gsap.to(state, {
          progress: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            end: "top 18%",
            scrub: 0.85,
          },
        });
        ScrollTrigger.refresh();
      }

      const onResize = () => {
        const { clientWidth, clientHeight } = container;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
        material.uniforms.uPixelRatio.value = Math.min(
          window.devicePixelRatio,
          2
        );
      };
      window.addEventListener("resize", onResize);

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", onResize);
        scrollTween?.scrollTrigger?.kill();
        scrollTween?.kill();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />;
}
