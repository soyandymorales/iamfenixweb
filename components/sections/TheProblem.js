import { theProblem } from "@/content/essays/the-problem";

export default function TheProblem() {
  const { eyebrow, title, exterior, interior } = theProblem;
  const total = String(interior.fragments.length).padStart(2, "0");

  return (
    <section
      className="section section--charcoal problem"
      aria-labelledby="problem-title"
    >
      <div className="container">
        <header className="problem__masthead">
          <div className="problem__edition" data-reveal>
            <span>{eyebrow}</span>
            <span>Diarios del Fénix</span>
          </div>

          <div className="problem__intro">
            <h2 id="problem-title" data-reveal>
              {title.lead} <em>{title.accent}</em>
              <span>{title.rest}</span>
            </h2>
            <p data-reveal>{exterior.lines.join(" ")}</p>
          </div>
        </header>

        <div className="problem__grid">
          {interior.fragments.map((fragment, index) => (
            <article
              key={fragment.id}
              className="fracture"
              data-emphasis={fragment.emphasis ? "true" : undefined}
              data-reveal
            >
              <header className="fracture__folio">
                <span>{fragment.roman}</span>
                <span>
                  {String(index + 1).padStart(2, "0")} / {total}
                </span>
              </header>

              <div className="fracture__plate">
                <span className="fracture__watermark" aria-hidden="true">
                  {fragment.roman}
                </span>
                <div className="fracture__heading">
                  <h3 className="fracture__name">{fragment.label}</h3>
                  <p className="fracture__tm">{interior.label}</p>
                </div>
              </div>

              <div className="fracture__content">
                <p className="fracture__line">
                  {fragment.line}
                  {fragment.emphasis ? (
                    <>
                      {" "}
                      <em>{fragment.emphasis}</em>
                    </>
                  ) : null}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="problem__closing">
          <p data-reveal>{exterior.turn}</p>
        </div>
      </div>
    </section>
  );
}
