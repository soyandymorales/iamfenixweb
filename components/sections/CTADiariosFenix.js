"use client";

import DiariosLeadForm from "@/components/forms/DiariosLeadForm";
import { getDomains } from "@/content/domains/domains";
import { getHomeCopy } from "@/content/metadata/home";
import { useLocale } from "@/hooks/useLocale";

export default function CTADiariosFenix({ reveal = true }) {
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
        <span className="eyebrow" {...(reveal ? { "data-reveal": true } : {})}>
          {copy.eyebrow}
        </span>
        <h2 id="cta-title" className="cta-final__headline" {...(reveal ? { "data-reveal": true } : {})}>
          {copy.title}
        </h2>
        <div className="cta-final__architectures">
          <p className="cta-final__meta-kicker" {...(reveal ? { "data-reveal": true } : {})}>
            {copy.architecturesKicker}
          </p>
          <ul className="cta-final__meta" aria-label={copy.architecturesLabel}>
            {domains.map((domain) => (
              <li key={domain.id} data-domain={domain.id} {...(reveal ? { "data-reveal": true } : {})}>
                <span className="cta-final__meta-numeral">{domain.numeral}</span>
                <span className="cta-final__meta-name">{domain.shortName}</span>
              </li>
            ))}
          </ul>
          <p className="cta-final__meta-offer" {...(reveal ? { "data-reveal": true } : {})}>
            {copy.offer}
          </p>
        </div>
        <DiariosLeadForm reveal={reveal} />
      </div>
    </section>
  );
}
