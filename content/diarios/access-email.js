import { localize } from "@/libs/locale";

const copy = {
  es: {
    subject: "Tu acceso a Diarios del Fénix",
    text: (url) =>
      `Tu compra ya está en la casa.\n\nEste enlace abre las tres arquitecturas:\n${url}\n\nSi no pediste este mensaje, puedes dejarlo.`,
  },
  en: {
    subject: "Your access to Diarios del Fénix",
    text: (url) =>
      `Your purchase is already in the house.\n\nThis link opens the three architectures:\n${url}\n\nIf you did not ask for this message, you can leave it.`,
  },
};

export function getAccessEmail(locale, url) {
  const localized = localize(copy, locale);
  return {
    subject: localized.subject,
    text: localized.text(url),
  };
}
