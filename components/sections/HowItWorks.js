import Image from "next/image";

import { getDomains, getDomainsGateway } from "@/content/domains/domains";

export default function HowItWorks({ locale }) {
  const domains = getDomains(locale);
  const gateway = getDomainsGateway(locale);

  return (
    <section
      className="section section--parchment section--hairline-top dominios"
      aria-labelledby="dominios-title"
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="eyebrow" data-reveal>
            {gateway.kicker}
          </span>
          <h2 id="dominios-title" data-reveal>
            {gateway.title}
          </h2>
          <p className="section-lead" data-reveal>
            {gateway.intro}
          </p>
        </header>

        <div className="dominios__grid">
          {domains.map((domain, index) => (
            <article
              key={domain.id}
              className="dominio"
              data-domain={domain.id}
              data-reveal
            >
              <header className="dominio__folio">
                <span>{domain.numeral}</span>
                <span>{String(index + 1).padStart(2, "0")} / 03</span>
              </header>
              <div className="dominio__image">
                <Image
                  src={domain.image}
                  alt={domain.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                  className="dominio__photo"
                />
                <div className="dominio__heading">
                  <h3 className="dominio__name">
                    {domain.trademark.replace(" ", "\n")}
                  </h3>
                </div>
              </div>
              <p className="dominio__definition">{domain.definition}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
