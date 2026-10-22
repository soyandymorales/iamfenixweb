"use client";

import DiariosLeadForm from "@/components/forms/DiariosLeadForm";
import { getDomains } from "@/content/domains/domains";
import { getHomeCopy } from "@/content/metadata/home";
import { useLocale } from "@/hooks/useLocale";

export default function CTADiariosFenix() {
  const locale = useLocale();
  const copy = getHomeCopy(locale).lead;
  const domains = getDomains(locale);

  return (
    <section
      id="empieza-aqui"
      className="section section--parchment section--viewport cta-final"
      aria-labelledby="cta-title"
    >
      <div className="container cta-final__inner">
        <span className="eyebrow" data-reveal>
          {copy.eyebrow}
        </span>
        <h2 id="cta-title" className="cta-final__headline" data-reveal>
          {copy.title}
        </h2>
        <div className="cta-final__architectures">
          <p className="cta-final__meta-kicker" data-reveal>
            {copy.architecturesKicker}
          </p>
          <ul className="cta-final__meta" aria-label={copy.architecturesLabel}>
            {domains.map((domain) => (
              <li key={domain.id} data-domain={domain.id} data-reveal>
                <span className="cta-final__meta-numeral">{domain.numeral}</span>
                <span className="cta-final__meta-name">{domain.shortName}</span>
              </li>
            ))}
          </ul>
          <p className="cta-final__meta-offer" data-reveal>
            {copy.offer}
          </p>
        </div>
        <DiariosLeadForm reveal />
      </div>
    </section>
  );
}
