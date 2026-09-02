import Image from "next/image";
import Link from "next/link";

import atelierFigure from "@/public/images/atelier.png";
import houseFigure from "@/public/images/house.png";
import { ecosystem } from "@/content/entities/ecosystem";

const FIGURES = {
  atelier: atelierFigure,
  house: houseFigure,
};

export default function TheEcosystem() {
  return (
    <section
      className="ecosystem"
      aria-label={ecosystem.label}
      id="ecosistema"
    >
      {ecosystem.chambers.map((chamber) => (
        <Link
          key={chamber.id}
          href={chamber.href}
          className="ecosystem__chamber"
          data-chamber={chamber.id}
        >
          <p className="eyebrow" data-reveal>
            {chamber.kicker}
          </p>

          <div className="ecosystem__body">
            <div className="ecosystem__figure" data-reveal>
              <Image
                src={FIGURES[chamber.id]}
                alt={chamber.illustration.alt}
                width={chamber.illustration.width}
                height={chamber.illustration.height}
                sizes="(max-width: 768px) min(100vw, 18rem), 22vw"
                className="ecosystem__figure-image"
              />
            </div>

            <h2 className="ecosystem__title" data-reveal>
              <span>{chamber.house}</span>
              <em>{chamber.room}</em>
            </h2>
          </div>

          <div className="ecosystem__foot">
            <p className="ecosystem__description" data-reveal>
              {chamber.description}
            </p>
            <span className="ecosystem__cta" data-reveal>
              {chamber.cta}
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
