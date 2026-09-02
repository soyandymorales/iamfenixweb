import Link from "next/link";

import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  lessonHref,
  youtubeEmbedSrc,
  youtubeThumbSrc,
} from "@/content/diarios/courses";

export default function DiariosCourse({ lesson }) {
  const { course, current } = lesson;
  const embedSrc = youtubeEmbedSrc(current);

  return (
    <section
      className="section section--viewport diario-curso"
      aria-labelledby="diario-curso-title"
      data-domain={course.slug}
    >
      <div className="container diario-curso__inner">
        <header className="diario-curso__mast">
          <Breadcrumb
            items={[
              { label: "El Diario", href: "/diarios" },
              { label: course.title, href: course.href },
              { label: `Día ${current.day}` },
            ]}
          />
          <p className="diario-curso__status">
            {course.trademark} · Día {current.day} de 21
          </p>
        </header>

        <div className="diario-curso__board">
          <p className="diario-curso__kicker">Tu progreso</p>

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
                    <p>El plano de este día llega pronto.</p>
                  </div>
                )}
              </div>

              <div className="diario-curso__learn">
                <h1 id="diario-curso-title" className="diario-curso__film">
                  {current.title}
                </h1>
                <p className="diario-curso__byline">
                  Día {current.day} · {course.trademark}
                </p>
                <p className="diario-curso__outcome">{current.learns}</p>
              </div>
            </div>
          </div>

          <aside className="diario-curso__rail">
            <ol className="diario-curso__queue" aria-label="Tu progreso">
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
                          Día {practice.day}
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
