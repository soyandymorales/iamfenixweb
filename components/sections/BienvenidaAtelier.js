import { atelierWelcome } from "@/content/services/tiers";

export default function BienvenidaAtelier() {
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
          <p className="section-lead" data-reveal>
            {atelierWelcome.lead}
          </p>
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
          {atelierWelcome.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={`btn btn--${action.variant}`}
              data-reveal
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
