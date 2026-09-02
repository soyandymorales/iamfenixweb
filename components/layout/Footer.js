import { footerNavigation } from "@/content/navigation/main";
import { siteMetadata } from "@/content/metadata/site";
import BrandWordmark from "@/components/ui/BrandWordmark";

const socialLinks = [
  { label: "LinkedIn", href: siteMetadata.social.linkedin },
  { label: "YouTube", href: siteMetadata.social.youtube },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="/#top" className="footer__home" aria-label="i.am Fénix — inicio">
            <BrandWordmark className="wordmark footer__logo" />
          </a>
          <p className="footer__tagline">Una casa para el arte de vivir.</p>
        </div>

        <div className="footer__meta">
          <nav aria-label="Navegación de pie de página">
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

          <nav aria-label="Redes sociales">
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
          <p>Arquitectura Humana</p>
        </div>
      </div>
    </footer>
  );
}
