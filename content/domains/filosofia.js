import { localize } from "@/libs/locale";

const intro = {
  es: "Creo que las obras de vida extraordinarias practican el renacimiento y servicio diario para proteger, ordenar, reinvertir y expandir lo que importa.",
  en: "I believe extraordinary life’s work practices daily rebirth and service — to protect, order, reinvest, and expand what matters.",
};

const copy = {
  es: [
    {
      id: "salud",
      numeral: "01",
      title: "Salud",
      claim: "El cuerpo es un templo.",
      definition:
        "Tu cuerpo es la primera arquitectura sobre la que descansa todo lo demás.",
      accent: "charcoal",
      illustration: {
        src: "/images/card_body.png",
        alt: "Grabado anatómico de un torso inscrito en un círculo y ejes geométricos.",
        width: 700,
        height: 700,
      },
      scripture: {
        reference: "1 Corintios 6:19–20",
        text: "¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo? Por tanto, glorificad a Dios en vuestro cuerpo.",
      },
    },
    {
      id: "felicidad",
      numeral: "02",
      title: "Felicidad",
      claim: "No es placer; es paz interior.",
      definition: "Una mente en calma. Un hogar lleno de amor. Memorias compartidas.",
      accent: "ember",
      illustration: {
        src: "/images/card_happeace.png",
        alt: "Grabado de un ventanal arqueado abierto a un paisaje de montañas y agua.",
        width: 700,
        height: 700,
      },
      scripture: {
        reference: "Mateo 6:33",
        text: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.",
      },
    },
    {
      id: "dinero",
      numeral: "03",
      title: "Dinero",
      claim: "No posees; eres mayordomo.",
      definition: "Activos que administramos y multiplicamos temporalmente.",
      accent: "cedar",
      illustration: {
        src: "/images/card_money.png",
        alt: "Grabado de un árbol con raíces, inscrito en un círculo con ejes.",
        width: 700,
        height: 700,
      },
      scripture: {
        reference: "Mateo 25:14–30",
        text: "A cada uno dio según su capacidad. El que había recibido cinco talentos negoció con ellos y ganó otros cinco.",
      },
    },
  ],
  en: [
    {
      id: "salud",
      numeral: "01",
      title: "Health",
      claim: "The body is a temple.",
      definition:
        "Your body is the first architecture on which everything else rests.",
      accent: "charcoal",
      illustration: {
        src: "/images/card_body.png",
        alt: "Anatomical engraving of a torso inscribed in a circle with geometric axes.",
        width: 700,
        height: 700,
      },
      scripture: {
        reference: "1 Corinthians 6:19–20",
        text: "Know ye not that your body is the temple of the Holy Ghost? Therefore glorify God in your body.",
      },
    },
    {
      id: "felicidad",
      numeral: "02",
      title: "Happiness",
      claim: "It is not pleasure; it is inner peace.",
      definition: "A quiet mind. A home filled with love. Shared memory.",
      accent: "ember",
      illustration: {
        src: "/images/card_happeace.png",
        alt: "Engraving of an arched window opening onto mountains and water.",
        width: 700,
        height: 700,
      },
      scripture: {
        reference: "Matthew 6:33",
        text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
      },
    },
    {
      id: "dinero",
      numeral: "03",
      title: "Money",
      claim: "You do not own; you steward.",
      definition: "Assets we administer and multiply for a time.",
      accent: "cedar",
      illustration: {
        src: "/images/card_money.png",
        alt: "Engraving of a tree with roots, inscribed in a circle with axes.",
        width: 700,
        height: 700,
      },
      scripture: {
        reference: "Matthew 25:14–30",
        text: "To every man according to his several ability. He that had received five talents traded with the same, and made them other five talents.",
      },
    },
  ],
};

export function getFilosofiaIntro(locale) {
  return localize(intro, locale);
}

export function getPilares(locale) {
  return localize(copy, locale);
}
