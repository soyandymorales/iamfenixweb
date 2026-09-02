import { notFound } from "next/navigation";

import LayoutClient from "@/components/layout/LayoutClient";
import DiariosCourse from "@/components/sections/DiariosCourse";
import { getCourseLesson, lessonHref } from "@/content/diarios/courses";
import { siteMetadata } from "@/content/metadata/site";
import { buildBreadcrumbSchema } from "@/libs/schema/breadcrumb";
import { buildDiariosCourseSchema } from "@/libs/schema/course";
import { buildArchitectureResourceSchema } from "@/libs/schema/learning-resource";
import { buildLessonVideoSchema } from "@/libs/schema/video";

export default function DiariosCoursePage({ slug, dia }) {
  const lesson = getCourseLesson(slug, dia);
  if (!lesson) notFound();

  const { course, current } = lesson;
  const videoSchema = buildLessonVideoSchema(course, current);
  const schemas = [
    buildDiariosCourseSchema(),
    buildArchitectureResourceSchema(course),
    buildBreadcrumbSchema([
      { name: siteMetadata.name, url: siteMetadata.url },
      { name: "Diarios del Fénix", url: `${siteMetadata.url}/diarios` },
      { name: course.title, url: `${siteMetadata.url}${course.href}` },
      {
        name: `Día ${current.day}`,
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
