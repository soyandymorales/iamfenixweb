// Testimonials — structured source of truth.
// Cada testimonio es evidencia atribuible: persona real, origen, organización.
// Citas en español (versión canónica publicada); cargos como títulos originales.
export const testimonials = [
  {
    id: "shivang-patel",
    name: "Shivang Patel",
    role: "Head of Membership Criya (YC W22)",
    portrait: "/images/shivang.jpg",
    country: { name: "Canadá", flag: "/images/canada.png" },
    organizations: [
      { name: "Y Combinator", logo: "/images/ycombinatorlogo.png" },
    ],
    verified: true,
    quote:
      "Andy ha sido un gran activo para nosotros. Ha sido un placer trabajar con él",
  },
  {
    id: "angelica-palacios",
    name: "Angélica Palacios",
    role: "Business Partner & Specialist Talent Culture",
    portrait: "/images/angelica.jpg",
    country: { name: "Colombia", flag: "/images/colombia.png" },
    organizations: [
      { name: "Davivienda", logo: "/images/daviviendalogo.png" },
    ],
    verified: true,
    quote:
      "Es muy bueno en lo que hace. Me sentí muy cómoda trabajando con Andy",
  },
  {
    id: "gustavo-silikovich",
    name: "Gustavo Silikovich",
    role: "Ex CEO RiverPlate & CEO Virtus Sports",
    portrait: "/images/gustavos.jpg",
    country: { name: "México", flag: "/images/mexico.svg" },
    organizations: [
      { name: "River Plate", logo: "/images/river.png" },
      { name: "FIFA", logo: "/images/fifa.png", compact: true },
    ],
    verified: true,
    quote:
      "Nos ha ayudado a establecer una fuerte presencia y estrategia de crecimiento",
  },
  {
    id: "juri-henley-cohn",
    name: "Juri Henley-Cohn",
    role: "Harvard Alumni, Actor Netflix & Prime",
    portrait: "/images/juri.jpg",
    country: { name: "Estados Unidos", flag: "/images/usa.webp" },
    organizations: [{ name: "Harvard", logo: "/images/harvardlogo.webp" }],
    verified: true,
    quote: "Trabajar con Andy ha sido realmente un placer. No puedo estar más agradecido de trabajar con él."
  },
  {
    id: "diana-angarita",
    name: "Diana Angarita",
    role: "Directora — Davivienda",
    portrait: "/images/dianaangaria.jpg",
    country: { name: "Colombia", flag: "/images/colombia.png" },
    organizations: [{ name: "Davivienda", logo: "/images/davivienda.png" }],
    verified: true,
    quote:
      "De esas personas que te llenan el alma y te hacen reflexionar para ser mejor persona cada día",
  },
  {
    id: "francisco-cordoba",
    name: "Francisco Córdoba",
    role: "Emprendedor",
    portrait: "/images/francisco.jpg",
    country: { name: "LATAM", flag: "/images/latam.png" },
    organizations: [{ name: "MIT", logo: "/images/mitlogo.png" }],
    verified: true,
    quote:
      "Gracias a sus estrategias pudimos ayudar + de 100 familias en LATAM",
  },
  {
    id: "ivan-dario",
    name: "Ivan Dario",
    role: "Guarda de Seguridad",
    portrait: "/images/ivan.jpg",
    country: { name: "Colombia", flag: "/images/colombia.png" },
    organizations: [],
    verified: true,
    quote:
      "Desde que empecé este proceso es gracias a Andy que cambié mi mentalidad",
  },
  {
    id: "juan-felipe-rengifo",
    name: "Juan Felipe Rengifo",
    role: "Emprendedor",
    portrait: "/images/juanfe.jpg",
    country: { name: "Estados Unidos", flag: "/images/usa.webp" },
    organizations: [
      { name: "Columbia", logo: "/images/columbialogo.webp" },
    ],
    verified: true,
    quote:
      "Como siempre la experiencia fue espectacular. El profesionalismo y la excelencia en lo personal y profesional son inspiradores",
  },
];
