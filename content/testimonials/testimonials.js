import { localize } from "@/libs/locale";

const records = [
  {
    id: "shivang-patel",
    name: "Shivang Patel",
    role: "Head of Membership Criya (YC W22)",
    portrait: "/images/shivang.jpg",
    country: { flag: "/images/canada.png" },
    organizations: [
      { name: "Y Combinator", logo: "/images/ycombinatorlogo.png" },
    ],
    verified: true,
  },
  {
    id: "angelica-palacios",
    name: "Angélica Palacios",
    role: "Business Partner & Specialist Talent Culture",
    portrait: "/images/angelica.jpg",
    country: { flag: "/images/colombia.png" },
    organizations: [
      { name: "Davivienda", logo: "/images/daviviendalogo.png" },
    ],
    verified: true,
  },
  {
    id: "gustavo-silikovich",
    name: "Gustavo Silikovich",
    role: "Ex CEO RiverPlate & CEO Virtus Sports",
    portrait: "/images/gustavos.jpg",
    country: { flag: "/images/mexico.svg" },
    organizations: [
      { name: "River Plate", logo: "/images/river.png" },
      { name: "FIFA", logo: "/images/fifa.png", compact: true },
    ],
    verified: true,
  },
  {
    id: "juri-henley-cohn",
    name: "Juri Henley-Cohn",
    role: "Harvard Alumni, Actor Netflix & Prime",
    portrait: "/images/juri.jpg",
    country: { flag: "/images/usa.webp" },
    organizations: [{ name: "Harvard", logo: "/images/harvardlogo.webp" }],
    verified: true,
  },
  {
    id: "diana-angarita",
    name: "Diana Angarita",
    role: "Directora — Davivienda",
    portrait: "/images/dianaangaria.jpg",
    country: { flag: "/images/colombia.png" },
    organizations: [{ name: "Davivienda", logo: "/images/davivienda.png" }],
    verified: true,
  },
  {
    id: "francisco-cordoba",
    name: "Francisco Córdoba",
    role: "Emprendedor",
    portrait: "/images/francisco.jpg",
    country: { flag: "/images/latam.png" },
    organizations: [{ name: "MIT", logo: "/images/mitlogo.png" }],
    verified: true,
  },
  {
    id: "ivan-dario",
    name: "Ivan Dario",
    role: "Guarda de Seguridad",
    portrait: "/images/ivan.jpg",
    country: { flag: "/images/colombia.png" },
    organizations: [],
    verified: true,
  },
  {
    id: "juan-felipe-rengifo",
    name: "Juan Felipe Rengifo",
    role: "Emprendedor",
    portrait: "/images/juanfe.jpg",
    country: { flag: "/images/usa.webp" },
    organizations: [{ name: "Columbia", logo: "/images/columbialogo.webp" }],
    verified: true,
  },
];

const copy = {
  es: {
    "shivang-patel": {
      country: "Canadá",
      quote:
        "Andy ha sido un gran activo para nosotros. Ha sido un placer trabajar con él",
    },
    "angelica-palacios": {
      country: "Colombia",
      quote:
        "Es muy bueno en lo que hace. Me sentí muy cómoda trabajando con Andy",
    },
    "gustavo-silikovich": {
      country: "México",
      quote:
        "Nos ha ayudado a establecer una fuerte presencia y estrategia de crecimiento",
    },
    "juri-henley-cohn": {
      country: "Estados Unidos",
      quote:
        "Trabajar con Andy ha sido realmente un placer. No puedo estar más agradecido de trabajar con él.",
    },
    "diana-angarita": {
      country: "Colombia",
      quote:
        "De esas personas que te llenan el alma y te hacen reflexionar para ser mejor persona cada día",
    },
    "francisco-cordoba": {
      country: "LATAM",
      quote: "Gracias a sus estrategias pudimos ayudar + de 100 familias en LATAM",
    },
    "ivan-dario": {
      country: "Colombia",
      quote:
        "Desde que empecé este proceso es gracias a Andy que cambié mi mentalidad",
    },
    "juan-felipe-rengifo": {
      country: "Estados Unidos",
      quote:
        "Como siempre la experiencia fue espectacular. El profesionalismo y la excelencia en lo personal y profesional son inspiradores",
    },
  },
  en: {
    "shivang-patel": {
      country: "Canada",
      quote:
        "Andy has been a great asset for us. It has been a pleasure to work with him",
    },
    "angelica-palacios": {
      country: "Colombia",
      quote:
        "He is very good at what he does. I felt very at ease working with Andy",
    },
    "gustavo-silikovich": {
      country: "Mexico",
      quote:
        "He has helped us establish a strong presence and a strategy for growth",
    },
    "juri-henley-cohn": {
      country: "United States",
      quote:
        "Working with Andy has truly been a pleasure. I could not be more grateful to work with him.",
    },
    "diana-angarita": {
      country: "Colombia",
      quote:
        "One of those people who fill the soul and make you reflect on becoming a better person each day",
    },
    "francisco-cordoba": {
      country: "LATAM",
      quote:
        "Thanks to his strategies we were able to help 100+ families across LATAM",
    },
    "ivan-dario": {
      country: "Colombia",
      quote:
        "Since I began this process, it is thanks to Andy that I changed my mindset",
    },
    "juan-felipe-rengifo": {
      country: "United States",
      quote:
        "As always the experience was exceptional. The professionalism and excellence, personal and professional, are inspiring",
    },
  },
};

const roleCopy = {
  es: {},
  en: {
    "diana-angarita": "Director — Davivienda",
    "francisco-cordoba": "Founder",
    "ivan-dario": "Security Guard",
    "juan-felipe-rengifo": "Founder",
  },
};

export function getTestimonials(locale) {
  const localized = localize(copy, locale);
  const roles = localize(roleCopy, locale);
  return records.map((item) => ({
    ...item,
    role: roles[item.id] || item.role,
    quote: localized[item.id].quote,
    country: {
      ...item.country,
      name: localized[item.id].country,
    },
  }));
}
