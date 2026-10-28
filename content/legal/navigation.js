import { localize, localizedPath } from "@/libs/locale";
import { LEGAL_DOCS } from "@/content/legal/paths";

const labels = {
  es: {
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
    refunds: "Política de reembolsos",
  },
  en: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    refunds: "Refund Policy",
  },
};

export function legalPath(id, locale) {
  const doc = LEGAL_DOCS.find((item) => item.id === id);
  return localizedPath(doc.es, locale);
}

export function getLegalNavigation(locale) {
  const names = localize(labels, locale);
  return LEGAL_DOCS.map((doc) => ({
    id: doc.id,
    label: names[doc.id],
    href: legalPath(doc.id, locale),
  }));
}
