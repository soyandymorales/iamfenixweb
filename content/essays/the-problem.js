import { localize } from "@/libs/locale";

const copy = {
  es: {
    eyebrow: "El Problema",
    product: "Diarios del Fénix",
    title: {
      lead: "Éxito sin",
      accent: "plenitud",
      rest: "no es victoria.",
    },
    exterior: {
      label: "Desde afuera",
      lines: [
        "Construiste una carrera.",
        "Quizás una empresa.",
        "Quizás un patrimonio.",
        "Quizás un cuerpo fit.",
        "Desde afuera parece que todo funciona.",
      ],
      turn: "Pero por dentro… algo perdió su orden.",
    },
    interior: {
      label: "Por dentro",
      fragments: [
        {
          id: "cuerpo",
          roman: "I",
          numeral: "01",
          label: "Cuerpo",
          line: "Tu cuerpo carece de energía.",
        },
        {
          id: "mente",
          roman: "II",
          numeral: "02",
          label: "Mente",
          line: "Tu mente nunca se detiene.",
        },
        {
          id: "relaciones",
          roman: "III",
          numeral: "03",
          label: "Relaciones",
          line: "Tus relaciones se sienten lejanas.",
        },
        {
          id: "libertad",
          roman: "IV",
          numeral: "04",
          label: "Libertad",
          line: "Tu dinero crece…",
          emphasis: "pero tu libertad no.",
        },
      ],
    },
  },
  en: {
    eyebrow: "The Problem",
    product: "Diarios del Fénix",
    title: {
      lead: "Success without",
      accent: "fullness",
      rest: "is not victory.",
    },
    exterior: {
      label: "From the outside",
      lines: [
        "You built a career.",
        "Perhaps a company.",
        "Perhaps a fortune.",
        "Perhaps a fit body.",
        "From the outside it appears that everything works.",
      ],
      turn: "But inwardly… something lost its order.",
    },
    interior: {
      label: "Inwardly",
      fragments: [
        {
          id: "cuerpo",
          roman: "I",
          numeral: "01",
          label: "Body",
          line: "Your body lacks energy.",
        },
        {
          id: "mente",
          roman: "II",
          numeral: "02",
          label: "Mind",
          line: "Your mind never stops.",
        },
        {
          id: "relaciones",
          roman: "III",
          numeral: "03",
          label: "Relationships",
          line: "Your relationships feel distant.",
        },
        {
          id: "libertad",
          roman: "IV",
          numeral: "04",
          label: "Freedom",
          line: "Your money grows…",
          emphasis: "but your freedom does not.",
        },
      ],
    },
  },
};

export function getTheProblem(locale) {
  return localize(copy, locale);
}
