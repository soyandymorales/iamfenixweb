import { localize, localizeHref } from "@/libs/locale";

const main = {
  es: [
    { label: "Historia", href: "/#historia" },
    { label: "Trabajo", href: "/#ecosistema" },
    { label: "Biblioteca", href: "/#biblioteca" },
  ],
  en: [
    { label: "Story", href: "/#historia" },
    { label: "Work", href: "/#ecosistema" },
    { label: "Library", href: "/#biblioteca" },
  ],
};

const cta = {
  es: { label: "Empieza Aquí", href: "/diarios" },
  en: { label: "Begin Here", href: "/diarios" },
};

const footer = {
  es: [
    { label: "El Atelier", href: "/atelier", kicker: "Práctica privada" },
    { label: "La House", href: "/house", kicker: "Obras" },
    { label: "La Biblioteca del Arquitecto", href: "/#biblioteca", kicker: "Lecturas" },
    { label: "Historia", href: "/#historia", kicker: "Origen" },
  ],
  en: [
    { label: "The Atelier", href: "/atelier", kicker: "Private practice" },
    { label: "The House", href: "/house", kicker: "Works" },
    { label: "The Architect’s Library", href: "/#biblioteca", kicker: "Readings" },
    { label: "Story", href: "/#historia", kicker: "Origin" },
  ],
};

const chrome = {
  es: {
    homeLabel: "i.am Fénix — inicio",
    primaryNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    footerNav: "Navegación de pie de página",
    socialNav: "Redes sociales",
    openNav: "Abrir navegación",
    closeNav: "Cerrar navegación",
    languageLabel: "Idioma",
  },
  en: {
    homeLabel: "i.am Fénix — home",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    footerNav: "Footer navigation",
    socialNav: "Social profiles",
    openNav: "Open navigation",
    closeNav: "Close navigation",
    languageLabel: "Language",
  },
};

function withLocalizedHrefs(items, locale) {
  return items.map((item) => ({
    ...item,
    href: localizeHref(item.href, locale),
  }));
}

export function getMainNavigation(locale) {
  return withLocalizedHrefs(localize(main, locale), locale);
}

export function getNavigationCta(locale) {
  const item = localize(cta, locale);
  return { ...item, href: localizeHref(item.href, locale) };
}

export function getFooterNavigation(locale) {
  return withLocalizedHrefs(localize(footer, locale), locale);
}

export function getNavigationChrome(locale) {
  return localize(chrome, locale);
}
