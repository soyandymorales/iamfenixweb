import LayoutClient from "@/components/layout/LayoutClient";
import DiariosCourse from "@/components/sections/DiariosCourse";
import { getCourseLesson, lessonHref } from "@/content/diarios/courses";
import { siteMetadata } from "@/content/metadata/site";
import { buildBreadcrumbSchema } from "@/libs/schema/breadcrumb";
import { buildDiariosCourseSchema } from "@/libs/schema/course";
import { buildArchitectureResourceSchema } from "@/libs/schema/learning-resource";
import { buildLessonVideoSchema } from "@/libs/schema/video";
import { publicUrl } from "@/libs/seo";
import { notFound } from "next/navigation";

export default function DiariosCoursePage({ slug, dia, locale }) {
  const lesson = getCourseLesson(slug, dia, locale);
  if (!lesson) notFound();

  const { course, current, ui } = lesson;
  const videoSchema = buildLessonVideoSchema(course, current, locale);
  const schemas = [
    buildDiariosCourseSchema(locale),
    buildArchitectureResourceSchema(course, locale),
    buildBreadcrumbSchema([
      { name: siteMetadata.name, url: siteMetadata.url },
      { name: "Diarios del Fénix", url: publicUrl("/diarios", locale) },
      { name: course.title, url: `${siteMetadata.url}${course.href}` },
      {
        name: `${ui.day} ${current.day}`,
        url: `${siteMetadata.url}${lessonHref(course.href, current.day)}`,
      },
    ]),
  ];
  if (videoSchema) schemas.push(videoSchema);

  return (
    <LayoutClient>
      {schemas.map((schema) => (
        <script
          key={schema["@id"] || schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main>
        <DiariosCourse lesson={lesson} />
      </main>
    </LayoutClient>
  );
}
