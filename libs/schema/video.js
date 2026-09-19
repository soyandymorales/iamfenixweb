import { getDiariosCourseUi, youtubeEmbedSrc } from "@/content/diarios/courses";
import { siteMetadata } from "@/content/metadata/site";

export function buildLessonVideoSchema(course, practice, locale) {
  if (!practice?.youtubeId) return null;

  const ui = getDiariosCourseUi(locale);

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${siteMetadata.url}${course.href}?dia=${practice.day}#video`,
    name: practice.title,
    description: `${course.title}. ${ui.day} ${practice.day} ${ui.of} Diarios del Fénix.`,
    embedUrl: youtubeEmbedSrc(practice),
    thumbnailUrl: `https://i.ytimg.com/vi/${practice.youtubeId}/hqdefault.jpg`,
    url: practice.watchUrl,
    isPartOf: { "@id": `${siteMetadata.url}/#diarios-del-fenix` },
  };
}
