import { tierDomainLabels } from "@/content/services/tiers";

export default function TierCard({ tier }) {
  return (
    <article className="tier-card" data-reveal>
      <header>
        <p className="tier-card__mission">{tier.mission}</p>
        <h3 className="tier-card__name">{tier.tier}</h3>
        <p className="tier-card__variant">{tier.variant}</p>
      </header>

      <dl className="tier-card__facts">
        <div className="tier-card__fact">
          <dt>Rol</dt>
          <dd>{tier.role}</dd>
        </div>
        <div className="tier-card__fact">
          <dt>Resultado</dt>
          <dd>{tier.outcome}</dd>
        </div>
        <div className="tier-card__fact">
          <dt>Duración</dt>
          <dd>{tier.duration}</dd>
        </div>
      </dl>

      <ul className="tier-card__domains">
        {tierDomainLabels.map(({ key, label }) => (
          <li key={key}>
            <span className="tier-card__domain-label">{label}</span>
            <span className="tier-card__domain-copy">{tier.domains[key]}</span>
          </li>
        ))}
      </ul>

      <p className="tier-card__investment">
        <span>Inversión</span>
        {tier.investment}
      </p>

      <a href="/#empieza-aqui" className="btn btn--outline">
        {tier.cta}
      </a>
    </article>
  );
}
