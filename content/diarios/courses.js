import { getDomains } from "@/content/domains/domains";
import { getDiariosGateCards } from "@/content/diarios/welcome";
import { siteMetadata } from "@/content/metadata/site";
import { localize, localizeHref, pickLocale } from "@/libs/locale";
import { buildPageMetadata } from "@/libs/seo";

const domainIdByRoute = {
  body: "body",
  happeace: "happeace",
  dinero: "money",
};

const routeSequence = ["body", "happeace", "dinero"];

const weeks = {
  body: {
    slug: "body",
    href: "/body",
    volume: "I / III",
    span: "Días 1–7",
    opening: "Siete días para habitar el cuerpo como templo.",
    practices: [
      {
        day: 1,
        folio: "01",
        title: "Sobreviví a la ruina y creé Diarios del Fénix",
        learns:
          "Cómo el cuerpo se convierte en el primer plano cuando la vida se desordena.",
        youtubeId: "P6w-Wm0rIBw",
        start: 59,
        watchUrl: "https://www.youtube.com/watch?v=P6w-Wm0rIBw&t=59s",
      },
      {
        day: 2,
        folio: "02",
        title: "Desintoxiqué mi cuerpo y rescaté mi alma",
        learns:
          "Cómo limpiar el cuerpo para devolverle claridad al alma.",
        youtubeId: "aRm25jcmQgU",
        start: 1839,
        watchUrl: "https://www.youtube.com/watch?v=aRm25jcmQgU&t=1839s",
      },
      {
        day: 3,
        folio: "03",
        title: "Dejé de comer para llenar",
        learns:
          "Cómo el ayuno puede llenar de presencia en vez de vaciar el templo.",
        youtubeId: "X9hhaEOkAd8",
        start: 58,
        watchUrl: "https://www.youtube.com/watch?v=X9hhaEOkAd8&t=58s",
      },
      {
        day: 4,
        folio: "04",
        title: "Evito enfermedades y elevo mi claridad mental",
        learns:
          "Cómo el cuidado del cuerpo protege la salud y eleva la claridad.",
        youtubeId: "hCdQF6qpby4",
        start: 7,
        watchUrl: "https://www.youtube.com/watch?v=hCdQF6qpby4&t=7s",
      },
      {
        day: 5,
        folio: "05",
        title: "Multiplica mi energía vital y paz interior",
        learns:
          "Cómo cultivar vitalidad y paz desde la misma práctica diaria.",
        youtubeId: "HtLbf8Ls2bA",
        start: 0,
        watchUrl: "https://www.youtube.com/watch?v=HtLbf8Ls2bA",
      },
      {
        day: 6,
        folio: "06",
        title: "Curé mi insomnio y recuperé mi descanso interior",
        learns:
          "Cómo restaurar el sueño y custodiar el reposo como arquitectura.",
        youtubeId: "TaH4fjNRZxY",
        start: 32,
        watchUrl: "https://www.youtube.com/watch?v=TaH4fjNRZxY&t=32s",
      },
      {
        day: 7,
        folio: "07",
        title: "Domina y desbloquea tu poder creador",
        learns:
          "Cómo un cuerpo íntegro sostiene décadas de creación y servicio.",
        youtubeId: "rnsVjk9q2IM",
        start: 7,
        watchUrl: "https://www.youtube.com/watch?v=rnsVjk9q2IM&t=7s",
      },
    ],
  },
  happeace: {
    slug: "happeace",
    href: "/happeace",
    volume: "II / III",
    span: "Días 8–14",
    opening: "Siete días para cultivar claridad, presencia y paz interior.",
    practices: [
      {
        day: 8,
        folio: "08",
        title: "Escapé de la trampa de la felicidad",
        learns:
          "Cómo dejar de perseguir un ánimo y habitar una paz que no depende del momento.",
        youtubeId: "N7RhkgQ7S0s",
        start: 21,
        watchUrl: "https://www.youtube.com/watch?v=N7RhkgQ7S0s&t=21s",
      },
      {
        day: 9,
        folio: "09",
        title: "Silencié la ansiedad y el ruido mental",
        learns:
          "Cómo callar el ruido interior para que la presencia pueda volver.",
        youtubeId: "tYRm2Ao6Uww",
        start: 4,
        watchUrl: "https://www.youtube.com/watch?v=tYRm2Ao6Uww&t=4s",
      },
      {
        day: 10,
        folio: "10",
        title: "El error que me mantuvo en la escasez",
        learns:
          "Cómo reconocer el pensamiento que estrecha la vida y devolverle amplitud.",
        youtubeId: "_ONe9HZ54Ys",
        start: 212,
        watchUrl: "https://www.youtube.com/watch?v=_ONe9HZ54Ys&t=212s",
      },
      {
        day: 11,
        folio: "11",
        title: "Es un manual para empezar a prosperar hoy",
        learns:
          "Cómo ordenar el día para que la prosperidad nazca de la práctica, no de la prisa.",
        youtubeId: "zodOs7Y9LAY",
        start: 3,
        watchUrl: "https://www.youtube.com/watch?v=zodOs7Y9LAY&t=3s",
      },
      {
        day: 12,
        folio: "12",
        title: "Vencí la ansiedad y logré el descanso interior",
        learns:
          "Cómo restituir el descanso cuando la ansiedad ha ocupado la casa.",
        youtubeId: "20FPWGcVWZ0",
        start: 1,
        watchUrl: "https://www.youtube.com/watch?v=20FPWGcVWZ0&t=1s",
      },
      {
        day: 13,
        folio: "13",
        title: "Atraje mejores relaciones y oportunidades",
        learns:
          "Cómo una presencia íntegra invita vínculos y puertas que merecen quedarse.",
        youtubeId: "Aov0DsOKUnc",
        start: 2,
        watchUrl: "https://www.youtube.com/watch?v=Aov0DsOKUnc&t=2s",
      },
      {
        day: 14,
        folio: "14",
        title: "Así trabajamos el éxito familiar",
        learns:
          "Cómo cultivar el hogar como el primer lugar donde la paz se pone a prueba.",
        youtubeId: "QFbANfQpJGM",
        start: 692,
        watchUrl: "https://www.youtube.com/watch?v=QFbANfQpJGM&t=692s",
      },
    ],
  },
  dinero: {
    slug: "dinero",
    href: "/dinero",
    volume: "III / III",
    span: "Días 15–21",
    opening: "Siete días para convertir el capital en tiempo, libertad y legado.",
    practices: [
      {
        day: 15,
        folio: "15",
        title: "Me sacó de la quiebra",
        learns:
          "Cómo un orden nuevo puede sacar el capital del colapso y devolverle dirección.",
        youtubeId: "7ZFhuoReDX4",
        start: 52,
        watchUrl: "https://www.youtube.com/watch?v=7ZFhuoReDX4&t=52s",
      },
      {
        day: 16,
        folio: "16",
        title: "Recuperé mi fuente de abundancia",
        learns:
          "Cómo reconocer de nuevo la fuente y administrarla con mayordomía.",
        youtubeId: "75wfHtWQrvE",
        start: 0,
        watchUrl: "https://www.youtube.com/watch?v=75wfHtWQrvE",
      },
      {
        day: 17,
        folio: "17",
        title: "De la quiebra a la paz financiera",
        learns:
          "Cómo transitar del desorden a una paz que se siente en las cuentas.",
        youtubeId: "BG7VE5oxJfo",
        start: 0,
        watchUrl: "https://www.youtube.com/watch?v=BG7VE5oxJfo",
      },
      {
        day: 18,
        folio: "18",
        title: "Mayordomía: La educación financiera oculta",
        learns:
          "Cómo la mayordomía enseña lo que el dinero solo no puede formar.",
        youtubeId: "0tmvAhuBzFQ",
        start: 17,
        watchUrl: "https://www.youtube.com/watch?v=0tmvAhuBzFQ&t=17s",
      },
      {
        day: 19,
        folio: "19",
        title: "Construyo más paz financiera",
        learns:
          "Cómo edificar paz en el capital con práctica diaria, no con prisa.",
        youtubeId: "Mg547Y2wfYc",
        start: 54,
        watchUrl: "https://www.youtube.com/watch?v=Mg547Y2wfYc&t=54s",
      },
      {
        day: 20,
        folio: "20",
        title: "Camino al milagro financiero",
        learns:
          "Cómo disponer el capital para que sirva a un milagro que ya tiene dirección.",
        youtubeId: "fYvjPWTB6f8",
        start: 5,
        watchUrl: "https://www.youtube.com/watch?v=fYvjPWTB6f8&t=5s",
      },
      {
        day: 21,
        folio: "21",
        title: "Preguntas y respuestas: salud, felicidad, dinero",
        learns:
          "Cómo cerrar los 21 días integrando cuerpo, paz y capital en una sola arquitectura.",
        youtubeId: "ZWujvzcVOr0",
        start: 1,
        watchUrl: "https://www.youtube.com/watch?v=ZWujvzcVOr0&t=1s",
      },
    ],
  },
};

const weekMeta = {
  es: {
    body: { span: "Días 1–7", opening: "Siete días para habitar el cuerpo como templo." },
    happeace: { span: "Días 8–14", opening: "Siete días para cultivar claridad, presencia y paz interior." },
    dinero: { span: "Días 15–21", opening: "Siete días para convertir el capital en tiempo, libertad y legado." },
  },
  en: {
    body: { span: "Days 1–7", opening: "Seven days to inhabit the body as a temple." },
    happeace: { span: "Days 8–14", opening: "Seven days to cultivate clarity, presence, and inner peace." },
    dinero: { span: "Days 15–21", opening: "Seven days to turn capital into time, freedom, and legacy." },
  },
};

const practiceText = {
  en: {
    1: {
      title: "I survived ruin and created Diarios del Fénix",
      learns: "How the body becomes the first blueprint when life loses its order.",
    },
    2: {
      title: "I detoxed my body and rescued my soul",
      learns: "How to cleanse the body in order to return clarity to the soul.",
    },
    3: {
      title: "I stopped eating in order to be filled",
      learns: "How fasting can fill with presence instead of emptying the temple.",
    },
    4: {
      title: "I avoid disease and raise my mental clarity",
      learns: "How care of the body protects health and raises clarity.",
    },
    5: {
      title: "Multiply my vital energy and inner peace",
      learns: "How to cultivate vitality and peace from the same daily practice.",
    },
    6: {
      title: "I healed my insomnia and recovered inner rest",
      learns: "How to restore sleep and guard rest as architecture.",
    },
    7: {
      title: "Master and unlock your creative power",
      learns: "How an integral body sustains decades of creation and service.",
    },
    8: {
      title: "I escaped the happiness trap",
      learns: "How to stop chasing a mood and inhabit a peace that does not depend on the moment.",
    },
    9: {
      title: "I silenced anxiety and mental noise",
      learns: "How to still the inner noise so that presence can return.",
    },
    10: {
      title: "The error that kept me in scarcity",
      learns: "How to recognize the thought that narrows life and restore its breadth.",
    },
    11: {
      title: "A manual for beginning to prosper today",
      learns: "How to order the day so that prosperity is born of practice, not haste.",
    },
    12: {
      title: "I overcame anxiety and found inner rest",
      learns: "How to restore rest when anxiety has occupied the house.",
    },
    13: {
      title: "I attracted better relationships and opportunities",
      learns: "How an integral presence invites bonds and doors that deserve to remain.",
    },
    14: {
      title: "This is how we work family success",
      learns: "How to cultivate the home as the first place where peace is tested.",
    },
    15: {
      title: "It brought me out of bankruptcy",
      learns: "How a new order can lift capital from collapse and return its direction.",
    },
    16: {
      title: "I recovered my source of abundance",
      learns: "How to recognize the source again and administer it with stewardship.",
    },
    17: {
      title: "From bankruptcy to financial peace",
      learns: "How to pass from disorder into a peace that can be felt in the accounts.",
    },
    18: {
      title: "Stewardship: the hidden financial education",
      learns: "How stewardship teaches what money alone cannot form.",
    },
    19: {
      title: "I build more financial peace",
      learns: "How to build peace in capital by daily practice, not by haste.",
    },
    20: {
      title: "The path to a financial miracle",
      learns: "How to dispose capital so that it serves a miracle that already has direction.",
    },
    21: {
      title: "Questions and answers: health, happiness, money",
      learns: "How to close the 21 days by integrating body, peace, and capital into one architecture.",
    },
  },
};

const courseUi = {
  es: {
    journal: "El Diario",
    day: "Día",
    of: "de",
    progress: "Tu progreso",
    empty: "El plano de este día llega pronto.",
    location: "Ubicación",
  },
  en: {
    journal: "The Journal",
    day: "Day",
    of: "of",
    progress: "Your progress",
    empty: "This day’s blueprint arrives soon.",
    location: "You are here",
  },
};

export function getDiariosCourseUi(locale) {
  return localize(courseUi, locale);
}

function cardForRoute(slug, locale) {
  const domainId = domainIdByRoute[slug];
  return getDiariosGateCards(locale).find((item) => item.id === domainId) ?? null;
}

export function youtubeEmbedSrc(practice) {
  if (!practice?.youtubeId) return null;
  const params = new URLSearchParams({ rel: "0" });
  if (practice.start) params.set("start", String(practice.start));
  return `https://www.youtube-nocookie.com/embed/${practice.youtubeId}?${params}`;
}

export function youtubeThumbSrc(practice) {
  if (!practice?.youtubeId) return null;
  return `https://i.ytimg.com/vi/${practice.youtubeId}/mqdefault.jpg`;
}

export function getDiariosCourse(slug, locale) {
  const lang = pickLocale(locale);
  const week = weeks[slug];
  const domainId = domainIdByRoute[slug];
  const domain = getDomains(lang).find((item) => item.id === domainId);
  const card = cardForRoute(slug, lang);
  if (!week || !domain || !card) return null;

  const meta = localize(weekMeta, lang)[slug];
  const overlay = lang === "en" ? practiceText.en : null;

  return {
    ...week,
    href: localizeHref(week.href, lang),
    span: meta.span,
    opening: meta.opening,
    practices: week.practices.map((practice) => ({
      ...practice,
      ...(overlay?.[practice.day] ?? {}),
    })),
    numeral: domain.numeral,
    title: card.title,
    trademark: domain.trademark,
    definition: domain.definition,
  };
}

export function getCourseLesson(slug, rawDia, locale) {
  const course = getDiariosCourse(slug, locale);
  if (!course) return null;

  const days = course.practices.map((practice) => practice.day);
  const parsed = Number.parseInt(String(rawDia ?? ""), 10);
  const currentDay = days.includes(parsed) ? parsed : days[0];
  const index = course.practices.findIndex((practice) => practice.day === currentDay);
  const current = course.practices[index];
  const previous = course.practices[index - 1] ?? null;
  const next = course.practices[index + 1] ?? null;

  const routeIndex = routeSequence.indexOf(slug);
  const nextRoute = routeSequence[routeIndex + 1] ?? null;
  const nextArchitecture = nextRoute ? cardForRoute(nextRoute, locale) : null;

  return {
    course,
    current,
    previous,
    next,
    nextArchitecture,
    weekIndex: index + 1,
    weekTotal: course.practices.length,
    locale: pickLocale(locale),
    ui: getDiariosCourseUi(locale),
  };
}

export function lessonHref(courseHref, day) {
  return `${courseHref}?dia=${day}`;
}

export function diariosCourseMetadata(slug, rawDia, locale) {
  const lang = pickLocale(locale);
  const ui = getDiariosCourseUi(lang);
  const lesson = getCourseLesson(slug, rawDia, lang);
  if (!lesson) {
    return buildPageMetadata({
      locale: lang,
      pathname: `/${slug}`,
      title: `Diarios del Fénix — ${siteMetadata.name}`,
    });
  }

  const { course, current } = lesson;
  const pathname = lessonHref(weeks[slug].href, current.day);
  const title = `${ui.day} ${current.day} — ${course.title}`;
  const description = current.title || course.definition;

  return buildPageMetadata({
    locale: lang,
    pathname,
    title: `${title} — Diarios del Fénix`,
    description,
  });
}
