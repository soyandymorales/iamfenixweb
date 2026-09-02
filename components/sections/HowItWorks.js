import Image from "next/image";

import { domains } from "@/content/domains/domains";

export default function HowItWorks() {
  return (
    <section className="section dominios" aria-labelledby="dominios-title">
      <div className="container">
        <header className="dominios__masthead">
          <div className="dominios__edition" data-reveal>
            <span>Como funciona</span>
            <span>Diarios del Fénix</span>
          </div>

          <div className="dominios__intro">
            <h2 id="dominios-title" data-reveal>
              Los <em>3</em>
              <span>Dominios</span>
            </h2>
            <p data-reveal>
              Un cuerpo con energía. Una mente en calma. Un hogar lleno de amor.
              Una obra de vida con propósito.
            </p>
          </div>
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
                  <h3 className="dominio__name">{domain.name}</h3>
                  <p className="dominio__tm">{domain.trademark}</p>
                </div>
              </div>
              <div className="dominio__content">
                <p className="dominio__definition">{domain.definition}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="dominios__closing">
          <div className="dominios__closing-body">
            <p data-reveal>
              Cada arquitectura se diseña alrededor de tu realidad. Tu familia.
              Tu negocio. Tu vocación. Tus valores. No existen planos
              universales — solo arquitecturas profundamente personales.
            </p>
            <a href="#atelier" className="dominios__link" data-reveal>
              <span>Comenzar arquitectura privada</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
