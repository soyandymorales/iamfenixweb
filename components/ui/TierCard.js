import { getTierDomainLabels, getTierFacts } from "@/content/services/tiers";
import { localizeHref } from "@/libs/locale";

export default function TierCard({ tier, locale }) {
  const facts = getTierFacts(locale);
  const labels = getTierDomainLabels(locale);
  const ctaHref = localizeHref("/#empieza-aqui", locale);

  return (
    <article className="tier-card" data-reveal>
      <header>
        <p className="tier-card__mission">{tier.mission}</p>
        <h3 className="tier-card__name">{tier.tier}</h3>
        <p className="tier-card__variant">{tier.variant}</p>
      </header>

      <dl className="tier-card__facts">
        <div className="tier-card__fact">
          <dt>{facts.role}</dt>
          <dd>{tier.role}</dd>
        </div>
        <div className="tier-card__fact">
          <dt>{facts.outcome}</dt>
          <dd>{tier.outcome}</dd>
        </div>
        <div className="tier-card__fact">
          <dt>{facts.duration}</dt>
          <dd>{tier.duration}</dd>
        </div>
      </dl>

      <ul className="tier-card__domains">
        {labels.map(({ key, label }) => (
          <li key={key}>
            <span className="tier-card__domain-label">{label}</span>
            <span className="tier-card__domain-copy">{tier.domains[key]}</span>
          </li>
        ))}
      </ul>

      <p className="tier-card__investment">
        <span>{facts.investment}</span>
        {tier.investment}
      </p>

      <a href={ctaHref} className="btn btn--outline">
        {tier.cta}
      </a>
    </article>
  );
}
