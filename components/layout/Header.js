"use client";

import { useCallback, useEffect, useState } from "react";

import BrandWordmark from "@/components/ui/BrandWordmark";
import LanguageToggle from "@/components/layout/LanguageToggle";
import {
  getMainNavigation,
  getNavigationChrome,
  getNavigationCta,
} from "@/content/navigation/main";
import { useLocale } from "@/hooks/useLocale";
import { localizeHref } from "@/libs/locale";
import { prefersReducedMotion } from "@/lib/motion";

function scrollToAnchor(id, behavior) {
  const el = document.getElementById(id);
  if (!el) return false;

  const padding =
    parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const top = Math.max(
    0,
    Math.round(el.getBoundingClientRect().top + window.scrollY - (padding + margin))
  );

  window.scrollTo({ top, behavior });
  return true;
}

export default function Header() {
  const locale = useLocale();
  const mainNavigation = getMainNavigation(locale);
  const navigationCta = getNavigationCta(locale);
  const chrome = getNavigationChrome(locale);
  const homeHref = localizeHref("/#top", locale);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [overStory, setOverStory] = useState(false);

  const onHashClick = useCallback((event) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href || !href.includes("#")) return;

    const url = new URL(href, window.location.href);
    const here = window.location.pathname.replace(/\/$/, "") || "/";
    const there = url.pathname.replace(/\/$/, "") || "/";
    if (here !== there) return;

    const id = decodeURIComponent(url.hash.replace(/^#/, ""));
    if (!id || !document.getElementById(id)) return;

    event.preventDefault();
    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    scrollToAnchor(id, behavior);
    if (window.location.hash !== url.hash) {
      history.pushState(null, "", url.hash);
    }
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    let last = window.scrollY > 24;
    setScrolled(last);
    const onScroll = () => {
      const next = window.scrollY > 24;
      if (next === last) return;
      last = next;
      setScrolled(next);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const story = document.getElementById("historia");
    if (!story) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { top, bottom } = entry.boundingClientRect;
        const vh = entry.rootBounds?.height ?? window.innerHeight;
        setOverStory(top <= 48 && bottom >= vh * 0.85);
      },
      { threshold: [0, 0.15, 0.4, 0.7, 1] }
    );

    observer.observe(story);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const alignHash = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (id) scrollToAnchor(id, "auto");
      document.documentElement.style.scrollBehavior = "";
    };

    const schedule = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(alignHash);
      });
    };

    schedule();
    window.addEventListener("hashchange", alignHash);
    window.addEventListener("load", schedule);
    let cancelled = false;
    document.fonts?.ready?.then(() => {
      if (!cancelled) schedule();
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", alignHash);
      window.removeEventListener("load", schedule);
    };
  }, []);

  const headerClass = [
    "site-header",
    overStory && !menuOpen ? "site-header--over-story" : "",
    (scrolled || menuOpen) && !(overStory && !menuOpen) ? "site-header--scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="site-header__inner">
        <a
          href={homeHref}
          className="site-header__logo"
          aria-label={chrome.homeLabel}
          onClick={onHashClick}
        >
          <BrandWordmark className="wordmark site-header__wordmark" priority />
        </a>

        <nav className="site-header__nav" aria-label={chrome.primaryNav}>
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-header__link"
              onClick={onHashClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__tools">
          <LanguageToggle />
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? chrome.closeNav : chrome.openNav}
            </span>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.25" />
              ) : (
                <path d="M2 6.5h18M2 15.5h18" stroke="currentColor" strokeWidth="1.25" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="site-header__mobile"
          aria-label={chrome.mobileNav}
        >
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-header__link"
              onClick={onHashClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href={navigationCta.href}
            className="btn btn--solid"
            onClick={onHashClick}
          >
            {navigationCta.label}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
