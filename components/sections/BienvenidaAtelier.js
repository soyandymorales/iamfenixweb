import { getAtelierWelcome } from "@/content/services/tiers";
import { localizeHref } from "@/libs/locale";

export default function BienvenidaAtelier({ locale }) {
  const atelierWelcome = getAtelierWelcome(locale);

  return (
    <section
      id="bienvenida"
      className="section section--viewport bienvenida"
      aria-labelledby="bienvenida-title"
    >
      <div className="container biblioteca__inner">
        <header className="section-header section-header--center">
          <span className="eyebrow" data-reveal>
            {atelierWelcome.eyebrow}
          </span>
          <h2 id="bienvenida-title" data-reveal>
            {atelierWelcome.title}
          </h2>
        </header>

        <div className="bienvenida__stage">
          <div
            className="biblioteca__frame biblioteca__frame--video"
            data-reveal
            aria-label={atelierWelcome.videoTitle}
          >
            {atelierWelcome.embedSrc ? (
              <iframe
                src={atelierWelcome.embedSrc}
                title={atelierWelcome.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            ) : null}
          </div>
        </div>

        <div className="bienvenida__actions">
          {atelierWelcome.actions.map((action) => {
            const isExternal = action.href.startsWith("http");
            return (
              <a
                key={action.label}
                href={isExternal ? action.href : localizeHref(action.href, locale)}
                className={`btn btn--${action.variant}`}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {action.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
