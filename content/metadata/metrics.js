import { localize } from "@/libs/locale";

const TRAJECTORY_HIGHLIGHT =
  "https://www.instagram.com/stories/highlights/17990753008607651/";
const EL_PAIS_ARTICLE =
  "https://elpais.com/cultura/2016/04/22/actualidad/1461324741_187329.html";

const metricsCopy = {
  es: [
    {
      id: "people",
      value: "100+",
      label:
        "personas desarrolladas, lideradas o impactadas — incluyendo stakeholders C-level — en emprendimiento, operaciones, deporte, ventas y fulfillment en +6 países.",
    },
    {
      id: "founders",
      value: "100+",
      label: "emprendedores en LATAM impulsados mediante soluciones fintech.",
    },
  ],
  en: [
    {
      id: "people",
      value: "100+",
      label:
        "people developed, led, or impacted — including C-level stakeholders — across entrepreneurship, operations, sport, sales, and fulfillment in 6+ countries.",
    },
    {
      id: "founders",
      value: "100+",
      label: "founders across LATAM advanced through fintech solutions.",
    },
  ],
};

const proofCopy = {
  es: {
    title: "He aparecido y caminado con personas de",
  },
  en: {
    title: "Featured",
  },
};

const logos = [
  {
    name: "Davivienda",
    src: "/images/daviviendalogo.png",
    href: TRAJECTORY_HIGHLIGHT,
    modifier: "wordmark",
    width: 507,
    height: 99,
  },
  {
    name: "Real Madrid",
    src: "/images/realmadridlogo.png",
    href: "https://youtu.be/zvcLBpepe7c?si=2LdeGMbGBn2WQZIC&t=20",
  },
  { name: "Metapurse", src: "/images/metapurselogo.png", href: TRAJECTORY_HIGHLIGHT },
  { name: "Stanford", src: "/images/stanfordlogo.png", href: TRAJECTORY_HIGHLIGHT, modifier: "stanford" },
  { name: "MIT", src: "/images/mitlogo.png", href: TRAJECTORY_HIGHLIGHT },
  { name: "Harvard", src: "/images/harvardlogo.webp", href: TRAJECTORY_HIGHLIGHT },
  { name: "Columbia", src: "/images/columbialogo.webp", href: TRAJECTORY_HIGHLIGHT },
  { name: "YC", src: "/images/ycombinatorlogo.png", href: TRAJECTORY_HIGHLIGHT },
  { name: "NFT NYC", src: "/images/nftnyclogo.png", href: TRAJECTORY_HIGHLIGHT },
  { name: "El País", src: "/images/Elpaislogo.png", href: EL_PAIS_ARTICLE },
  { name: "Colombia Fintech", src: "/images/colombiafintechlogo.png", href: TRAJECTORY_HIGHLIGHT },
  {
    name: "Be in Crypto",
    src: "/images/beincryptologo.png",
    href: "https://es.beincrypto.com/artistas-digitales-colombia-presentan-coleccion-nft-exhibicion-sofa/",
  },
];

export function getMetrics(locale) {
  return localize(metricsCopy, locale);
}

export function getSocialProof(locale) {
  return {
    ...localize(proofCopy, locale),
    logos,
  };
}
