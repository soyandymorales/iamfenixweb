import { getDomains } from "@/content/domains/domains";
import { localize, localizeHref } from "@/libs/locale";

const copy = {
  es: {
    titleBefore: "Bienvenido a tu Diario ",
    titleAccent: "Fénix",
    titleAfter: ".",
    markLabel: "i.am Fénix — inicio",
    question: "¿Por dónde quieres comenzar?",
    listLabel: "Elige una arquitectura para comenzar",
    gates: {
      body: "Arquitectura Corporal",
      happeace: "Arquitectura Happeace",
      money: "Arquitectura Dinero",
    },
  },
  en: {
    titleBefore: "Welcome to your ",
    titleAccent: "Fénix",
    titleAfter: " Journal.",
    markLabel: "i.am Fénix — home",
    question: "Where would you like to begin?",
    listLabel: "Choose an architecture to begin",
    gates: {
      body: "Body Architecture",
      happeace: "Happeace Architecture",
      money: "Money Architecture",
    },
  },
};

const gateHrefs = {
  body: "/body",
  happeace: "/happeace",
  money: "/dinero",
};

export function getDiariosWelcome(locale) {
  const localized = localize(copy, locale);
  return {
    title: `${localized.titleBefore}${localized.titleAccent}${localized.titleAfter}`,
    titleBefore: localized.titleBefore,
    titleAccent: localized.titleAccent,
    titleAfter: localized.titleAfter,
    markLabel: localized.markLabel,
    question: localized.question,
    listLabel: localized.listLabel,
  };
}

export function getDiariosGateCards(locale) {
  const localized = localize(copy, locale);
  return getDomains(locale).map((domain) => ({
    id: domain.id,
    numeral: domain.numeral,
    title: localized.gates[domain.id],
    trademark: domain.trademark,
    href: localizeHref(gateHrefs[domain.id], locale),
  }));
}
