import Image from "next/image";

import bodyFigure from "@/public/images/Body.png";
import happeaceFigure from "@/public/images/Happeace.png";
import moneyFigure from "@/public/images/Money.png";
import { domains, domainsGateway } from "@/content/domains/domains";

const FIGURES = {
  body: bodyFigure,
  happeace: happeaceFigure,
  money: moneyFigure,
};

export default function DiariosArquitecturas() {
  return (
    <section
      className="diarios-gates"
      aria-labelledby="diarios-gates-title"
      id="las-3-arquitecturas"
    >
      <header className="diarios-gates__edition" data-reveal>
        <span>{domainsGateway.kicker}</span>
        <h2 id="diarios-gates-title">{domainsGateway.title}</h2>
        <span>{domainsGateway.product}</span>
      </header>

      <div className="diarios-gates__grid">
        {domains.map((domain, index) => (
          <article
            key={domain.id}
            className="diarios-gate"
            data-domain={domain.id}
            data-reveal
          >
            <header className="diarios-gate__folio">
              <span>{domain.numeral}</span>
              <span>
                {String(index + 1).padStart(2, "0")} / 03
              </span>
            </header>

            <div className="diarios-gate__image">
              <Image
                src={FIGURES[domain.id]}
                alt={domain.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="diarios-gate__photo"
              />
              <div className="diarios-gate__heading">
                <h3 className="diarios-gate__name">{domain.name}</h3>
                <p className="diarios-gate__tm">{domain.trademark}</p>
              </div>
            </div>

            <p className="diarios-gate__definition">{domain.definition}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
