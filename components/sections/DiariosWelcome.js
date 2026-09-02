import Link from "next/link";

import FenixMark from "@/components/ui/FenixMark";
import { diariosGateCards, diariosWelcome } from "@/content/diarios/welcome";

export default function DiariosWelcome() {
  return (
    <section
      className="section section--parchment section--viewport diarios-gate"
      aria-labelledby="diarios-welcome-title"
    >
      <div className="container diarios-gate__inner">
        <header className="diarios-gate__header">
          <Link
            href="/"
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
