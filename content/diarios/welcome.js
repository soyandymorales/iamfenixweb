import { domains } from "@/content/domains/domains";

const titleBefore = "Bienvenido a tu Diario ";
const titleAccent = "Fénix";
const titleAfter = ".";

export const diariosWelcome = {
  title: `${titleBefore}${titleAccent}${titleAfter}`,
  titleBefore,
  titleAccent,
  titleAfter,
  markLabel: "i.am Fénix — inicio",
  question: "¿Por dónde quieres comenzar?",
  listLabel: "Elige una arquitectura para comenzar",
};

const gateTitles = {
  body: "Arquitectura Corporal",
  happeace: "Arquitectura Happeace",
  money: "Arquitectura Dinero",
};

const gateHrefs = {
  body: "/body",
  happeace: "/happeace",
  money: "/dinero",
};

export const diariosGateCards = domains.map((domain) => ({
  id: domain.id,
  numeral: domain.numeral,
  title: gateTitles[domain.id],
  trademark: domain.trademark,
  href: gateHrefs[domain.id],
}));
