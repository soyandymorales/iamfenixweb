import Link from "next/link";

import FenixMark from "@/components/ui/FenixMark";
import { getDiariosConfirmation } from "@/content/diarios/confirmation";
import { localizeHref } from "@/libs/locale";

export default function DiariosConfirmation({ locale }) {
  const copy = getDiariosConfirmation(locale);
  const homeHref = localizeHref("/", locale);

  return (
    <main className="diarios-confirmation">
      <section
        className="diarios-confirmation__page"
        aria-labelledby="diarios-confirmation-title"
      >
        <header className="diarios-confirmation__masthead">
          <Link
            href={homeHref}
            className="diarios-confirmation__mark"
            aria-label={copy.markLabel}
          >
            <FenixMark />
          </Link>
          <div className="diarios-confirmation__identity">
            <p>{copy.edition}</p>
            <span aria-hidden="true">·</span>
            <p>{copy.folio}</p>
          </div>
        </header>

        <article className="diarios-confirmation__message">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 id="diarios-confirmation-title">
            {copy.titleBefore}
            <span>{copy.titleAccent}</span>
          </h1>
          <p className="diarios-confirmation__promise">{copy.promise}</p>
          <p className="diarios-confirmation__foundation">{copy.foundation}</p>

          <section
            className="diarios-confirmation__inbox"
            aria-labelledby="diarios-confirmation-inbox-title"
          >
            <p className="diarios-confirmation__inbox-kicker">
              {copy.inboxKicker}
            </p>
            <h2 id="diarios-confirmation-inbox-title">{copy.inboxTitle}</h2>
            <p>{copy.inboxNote}</p>
          </section>
        </article>

        <footer className="diarios-confirmation__colophon">
          <p>{copy.closing}</p>
        </footer>
      </section>
    </main>
  );
}
