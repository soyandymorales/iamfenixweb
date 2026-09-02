import { domains } from "@/content/domains/domains";
import { diariosGateCards } from "@/content/diarios/welcome";
import { siteMetadata } from "@/content/metadata/site";

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

function cardForRoute(slug) {
  const domainId = domainIdByRoute[slug];
  return diariosGateCards.find((item) => item.id === domainId) ?? null;
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

export function getDiariosCourse(slug) {
  const week = weeks[slug];
  const domainId = domainIdByRoute[slug];
  const domain = domains.find((item) => item.id === domainId);
  const card = cardForRoute(slug);
  if (!week || !domain || !card) return null;

  return {
    ...week,
    numeral: domain.numeral,
    title: card.title,
    trademark: domain.trademark,
    definition: domain.definition,
  };
}

export function getCourseLesson(slug, rawDia) {
  const course = getDiariosCourse(slug);
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
  const nextArchitecture = nextRoute ? cardForRoute(nextRoute) : null;

  return {
    course,
    current,
    previous,
    next,
    nextArchitecture,
    weekIndex: index + 1,
    weekTotal: course.practices.length,
  };
}

export function lessonHref(courseHref, day) {
  return `${courseHref}?dia=${day}`;
}

export function diariosCourseMetadata(slug, rawDia) {
  const lesson = getCourseLesson(slug, rawDia);
  if (!lesson) {
    return { title: `Diarios del Fénix — ${siteMetadata.name}` };
  }

  const { course, current } = lesson;
  const pageUrl = `${siteMetadata.url}${lessonHref(course.href, current.day)}`;
  const title = `Día ${current.day} — ${course.title}`;
  const description = current.title || course.definition;

  return {
    title: `${title} — Diarios del Fénix`,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${title} — Diarios del Fénix`,
      description,
      url: pageUrl,
      siteName: siteMetadata.brand,
      locale: "es_CO",
      type: "website",
    },
  };
}
