"use client";

import BrandWordmark from "@/components/ui/BrandWordmark";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { getFooterNavigation, getNavigationChrome } from "@/content/navigation/main";
import { getSiteCopy, siteMetadata } from "@/content/metadata/site";
import { useLocale } from "@/hooks/useLocale";
import { localizeHref } from "@/libs/locale";

const socialLinks = [
  { label: "LinkedIn", href: siteMetadata.social.linkedin },
  { label: "YouTube", href: siteMetadata.social.youtube },
  { label: "Strava", href: siteMetadata.social.strava },
];

export default function Footer() {
  const locale = useLocale();
  const footerNavigation = getFooterNavigation(locale);
  const chrome = getNavigationChrome(locale);
  const copy = getSiteCopy(locale);
  const homeHref = localizeHref("/#top", locale);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href={homeHref} className="footer__home" aria-label={chrome.homeLabel}>
            <BrandWordmark className="wordmark footer__logo" />
          </a>
          <p className="footer__tagline">{copy.tagline}</p>
        </div>

        <div className="footer__meta">
          <nav aria-label={chrome.footerNav}>
            <ul className="footer__list">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={chrome.socialNav}>
            <ul className="footer__list">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="footer__link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__colophon">
          <p>© {new Date().getFullYear()} Fénix</p>
          <p>{copy.colophon}</p>
          <LanguageToggle />
        </div>
      </div>
    </footer>
  );
}
