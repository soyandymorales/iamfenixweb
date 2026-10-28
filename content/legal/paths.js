// Public legal routes. Spanish is the canonical path; English is the other reading.
// Keep these pairs aligned with the pages under app/[locale].

export const LEGAL_DOCS = [
  { id: "privacy", es: "/privacidad", en: "/privacy" },
  { id: "terms", es: "/terminos", en: "/terms" },
  { id: "refunds", es: "/reembolsos", en: "/refunds" },
];

export const LEGAL_PATH_READINGS = LEGAL_DOCS.map(({ es, en }) => ({ es, en }));
