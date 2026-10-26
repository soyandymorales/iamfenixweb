"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

import { homeSectionId } from "@/libs/home-sections";

function scrollToSection(id) {
  if (id === "top") {
    window.scrollTo(0, 0);
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const padding =
    parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const top = Math.max(
    0,
    Math.round(el.getBoundingClientRect().top + window.scrollY - (padding + margin))
  );

  window.scrollTo(0, top);
}

export default function HomeSectionScroll() {
  const pathname = usePathname() || "/";

  useLayoutEffect(() => {
    const id = homeSectionId(pathname);
    if (!id) return undefined;

    let cancelled = false;
    const align = () => {
      if (cancelled) return;
      document.documentElement.style.scrollBehavior = "auto";
      scrollToSection(id);
      document.documentElement.style.scrollBehavior = "";
    };

    align();
    const onLoad = () => align();
    window.addEventListener("load", onLoad);
    document.fonts?.ready?.then(align);

    return () => {
      cancelled = true;
      document.documentElement.style.scrollBehavior = "";
      window.removeEventListener("load", onLoad);
    };
  }, [pathname]);

  return null;
}
