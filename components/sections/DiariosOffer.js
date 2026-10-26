import { getDiariosOffer } from "@/content/diarios/offer";

export default function DiariosOffer({ locale, linkError = false }) {
  const copy = getDiariosOffer(locale);
  const price =
    copy.priceCurrency === "USD"
      ? `$${copy.priceAmount}`
      : new Intl.NumberFormat(locale === "en" ? "en-US" : "es-MX", {
          style: "currency",
          currency: copy.priceCurrency,
          maximumFractionDigits: 0,
        }).format(copy.priceAmount);
  const contents = [
    { name: copy.bodyName, span: copy.bodySpan },
    { name: copy.happeaceName, span: copy.happeaceSpan },
    { name: copy.moneyName, span: copy.moneySpan },
  ];

  return (
    <section className="section section--parchment diarios-offer" aria-labelledby="diarios-offer-title">
      <div className="container diarios-offer__sheet">
        <header className="diarios-offer__mast">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1 id="diarios-offer-title">{copy.title}</h1>
          <p>{copy.opening}</p>
        </header>
        <ol className="diarios-offer__contents" aria-label={copy.architecturesLabel}>
          {contents.map((item) => (
            <li key={item.name}>
              <span className="diarios-offer__name">{item.name}</span>
              <span className="diarios-offer__span">{item.span}</span>
            </li>
          ))}
        </ol>
        {linkError ? <p className="diarios-offer__note">{copy.linkError}</p> : null}
        <p className="diarios-offer__price">
          <span className="eyebrow">{copy.investmentLabel}</span>
          {price}
        </p>
      </div>
    </section>
  );
}
