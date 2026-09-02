"use client";

import { useEffect, useState } from "react";
import {
  mainNavigation,
  navigationCta,
} from "@/content/navigation/main";
import BrandWordmark from "@/components/ui/BrandWordmark";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = `site-header${
    scrolled || menuOpen ? " site-header--scrolled" : ""
  }`;

  return (
    <header className={headerClass}>
      <div className="site-header__inner">
        <a href="/#top" className="site-header__logo" aria-label="i.am Fénix — inicio">
          <BrandWordmark className="wordmark site-header__wordmark" />
        </a>

        <nav className="site-header__nav" aria-label="Navegación principal">
          {mainNavigation.map((item) => (
            <a key={item.href} href={item.href} className="site-header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? "Cerrar navegación" : "Abrir navegación"}
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

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="site-header__mobile"
          aria-label="Navegación móvil"
        >
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-header__link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={navigationCta.href}
            className="btn btn--solid"
            onClick={() => setMenuOpen(false)}
          >
            {navigationCta.label}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
