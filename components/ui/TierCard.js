export default function TierCard({ tier, labels }) {
  const privateTier = tier.applicationOnly;
  const darkTier = tier.id === "blueprint" || privateTier;
  const [brandName, ...tierName] = tier.tier.split(" ");

  return (
    <article
      className={`tier-card${darkTier ? " tier-card--private" : ""}`}
      data-reveal
    >
      <header className="tier-card__header">
        <div className="tier-card__folio">
          <span>{tier.numeral}</span>
          {privateTier ? <span>{labels.applicationOnly}</span> : null}
        </div>
        <h3 className="tier-card__name">
          <span className="tier-card__brand">{brandName}</span>
          {tierName.length ? ` ${tierName.join(" ")}` : ""}
        </h3>
        <p className="tier-card__cadence">{tier.cadence}</p>
      </header>

      <p className="tier-card__promise">{tier.promise}</p>

      <details className="tier-card__details">
        <summary>{labels.includes}</summary>
        <ul className="tier-card__features">
          {tier.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {tier.boundary ? (
          <p className="tier-card__boundary">{tier.boundary}</p>
        ) : null}
      </details>

      <p className="tier-card__investment">
        <span>{labels.investment}</span>
        {tier.investment}
      </p>

      <a
        href={tier.href}
        className={`btn ${darkTier ? "btn--solid" : "btn--outline"}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {tier.cta}
      </a>
    </article>
  );
}
