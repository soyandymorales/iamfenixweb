import Link from "next/link";

import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  lessonHref,
  youtubeEmbedSrc,
  youtubeThumbSrc,
} from "@/content/diarios/courses";
import { localizeHref } from "@/libs/locale";

export default function DiariosCourse({ lesson }) {
  const { course, current, ui, locale } = lesson;
  const embedSrc = youtubeEmbedSrc(current);
  const diariosHref = localizeHref("/diarios", locale);

  return (
    <section
      className="section section--viewport diario-curso"
      aria-labelledby="diario-curso-title"
      data-domain={course.slug}
    >
      <div className="container diario-curso__inner">
        <header className="diario-curso__mast">
          <Breadcrumb
            label={ui.location}
            items={[
              { label: ui.journal, href: diariosHref },
              { label: course.title, href: course.href },
              { label: `${ui.day} ${current.day}` },
            ]}
          />
          <p className="diario-curso__status">
            {course.trademark} · {ui.day} {current.day} {ui.of} 21
          </p>
        </header>

        <div className="diario-curso__board">
          <p className="diario-curso__kicker">{ui.progress}</p>

          <div className="diario-curso__main">
            <div className="diario-curso__watch">
              <div className="diario-curso__stage">
                {embedSrc ? (
                  <div className="diario-curso__frame">
                    <iframe
                      src={embedSrc}
                      title={current.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="diario-curso__frame diario-curso__frame--empty">
                    <p>{ui.empty}</p>
                  </div>
                )}
              </div>

              <div className="diario-curso__learn">
                <h1 id="diario-curso-title" className="diario-curso__film">
                  {current.title}
                </h1>
                <p className="diario-curso__byline">
                  {ui.day} {current.day} · {course.trademark}
                </p>
                <p className="diario-curso__outcome">{current.learns}</p>
              </div>
            </div>
          </div>

          <aside className="diario-curso__rail">
            <ol className="diario-curso__queue" aria-label={ui.progress}>
              {course.practices.map((practice) => {
                const isCurrent = practice.day === current.day;
                const thumb = youtubeThumbSrc(practice);
                return (
                  <li key={practice.day}>
                    <Link
                      href={lessonHref(course.href, practice.day)}
                      className="diario-curso__item"
                      aria-current={isCurrent ? "step" : undefined}
                    >
                      <span className="diario-curso__thumb">
                        {thumb ? (
                          <img
                            src={thumb}
                            alt=""
                            width={320}
                            height={180}
                          />
                        ) : (
                          <span className="diario-curso__folio">
                            {practice.folio}
                          </span>
                        )}
                        <span className="diario-curso__day">
                          {ui.day} {practice.day}
                        </span>
                      </span>
                      <span className="diario-curso__item-copy">
                        <span className="diario-curso__item-title">
                          {practice.title}
                        </span>
                        <span className="diario-curso__item-meta">
                          {course.trademark}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
