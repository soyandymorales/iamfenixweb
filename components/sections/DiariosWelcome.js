import Link from "next/link";

import FenixMark from "@/components/ui/FenixMark";
import { getDiariosGateCards, getDiariosWelcome } from "@/content/diarios/welcome";
import { localizeHref } from "@/libs/locale";

export default function DiariosWelcome({ locale }) {
  const diariosWelcome = getDiariosWelcome(locale);
  const diariosGateCards = getDiariosGateCards(locale);
  const homeHref = localizeHref("/", locale);

  return (
    <section
      className="section section--parchment section--viewport diarios-gate"
      aria-labelledby="diarios-welcome-title"
    >
      <div className="container diarios-gate__inner">
        <header className="diarios-gate__header">
          <Link
            href={homeHref}
            className="diarios-gate__mark"
            aria-label={diariosWelcome.markLabel}
            data-reveal
          >
            <FenixMark />
          </Link>
          <h1 id="diarios-welcome-title" data-reveal>
            {diariosWelcome.titleBefore}
            <span className="diarios-gate__accent">
              {diariosWelcome.titleAccent}
            </span>
            {diariosWelcome.titleAfter}
          </h1>
          <h2 className="diarios-gate__question" data-reveal>
            {diariosWelcome.question}
          </h2>
        </header>

        <ul className="diarios-gate__grid" aria-label={diariosWelcome.listLabel}>
          {diariosGateCards.map((card) => (
            <li key={card.id} data-reveal>
              <Link
                href={card.href}
                className="diarios-gate__card"
                data-domain={card.id}
              >
                <span className="diarios-gate__numeral">{card.numeral}</span>
                <div className="diarios-gate__body">
                  <h3 className="diarios-gate__title">{card.title}</h3>
                  <p className="diarios-gate__trademark">{card.trademark}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
