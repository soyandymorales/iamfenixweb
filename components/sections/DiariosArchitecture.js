import Link from "next/link";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { getDiariosCourse, getDiariosCourseUi, lessonHref } from "@/content/diarios/courses";
import { localizeHref } from "@/libs/locale";

export default function DiariosArchitecture({ slug, locale }) {
  const course = getDiariosCourse(slug, locale);
  const ui = getDiariosCourseUi(locale);
  const journalHref = localizeHref("/diarios", locale);
  const architecturesHref = localizeHref("/diarios/arquitecturas", locale);

  return (
    <section className="section section--viewport diario-curso" aria-labelledby="diario-arquitectura-title" data-domain={slug}>
      <div className="container diario-curso__inner">
        <header className="diario-curso__mast">
          <Breadcrumb
            label={ui.location}
            items={[
              { label: ui.journal, href: journalHref },
              { label: ui.architectures, href: architecturesHref },
              { label: course.title },
            ]}
          />
          <p className="diario-curso__status">
            {course.trademark} · {course.span}
          </p>
        </header>
        <h1 id="diario-arquitectura-title" className="diario-curso__film">
          {course.title}
        </h1>
        <p className="diario-curso__outcome">{course.opening}</p>
        <ol className="diario-curso__queue">
          {course.practices.map((practice) => (
            <li key={practice.day}>
              <Link
                href={localizeHref(lessonHref(slug, practice.day), locale)}
                className="diario-curso__item"
              >
                <span className="diario-curso__item-copy">
                  <span className="diario-curso__item-title">{practice.title}</span>
                  <span className="diario-curso__item-meta">
                    {ui.day} {practice.day}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
