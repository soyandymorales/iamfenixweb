import { siteMetadata } from "@/content/metadata/site";
import { youtubeEmbedSrc } from "@/content/diarios/courses";

export function buildLessonVideoSchema(course, practice) {
  if (!practice?.youtubeId) return null;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${siteMetadata.url}${course.href}?dia=${practice.day}#video`,
    name: practice.title,
    description: `${course.title}. Día ${practice.day} de Diarios del Fénix.`,
    embedUrl: youtubeEmbedSrc(practice),
    thumbnailUrl: `https://i.ytimg.com/vi/${practice.youtubeId}/hqdefault.jpg`,
    url: practice.watchUrl,
    isPartOf: { "@id": `${siteMetadata.url}/#diarios-del-fenix` },
  };
}
