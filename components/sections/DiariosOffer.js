import DiariosAccessForm from "@/components/forms/DiariosAccessForm";
import { getDiariosOffer } from "@/content/diarios/offer";
import { localizedPath } from "@/libs/locale";

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
  const checkoutHref = localizedPath("/diarios/checkout", locale);

  return (
    <section className="section section--parchment diarios-offer" aria-labelledby="diarios-offer-title">
      <div className="container diarios-offer__sheet">
        <header className="diarios-offer__mast">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1 id="diarios-offer-title">{copy.title}</h1>
          <p>{copy.opening}</p>
        </header>
        <div>
          <h2 className="diarios-offer__includes">{copy.includesTitle}</h2>
          <ol className="diarios-offer__contents" aria-label={copy.architecturesLabel}>
            {contents.map((item) => (
              <li key={item.name}>
                <span className="diarios-offer__name">{item.name}</span>
                <span className="diarios-offer__span">{item.span}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="diarios-offer__close">
          {linkError ? <p className="diarios-offer__note">{copy.linkError}</p> : null}
          <p className="diarios-offer__price">
            <span className="eyebrow">{copy.investmentLabel}</span>
            {price}
          </p>
          <div className="diarios-offer__pair">
            <a className="btn btn--solid diarios-offer__cta" href={checkoutHref}>
              {copy.enter}
            </a>
            <DiariosAccessForm copy={copy} className="diarios-offer__access" initiallyOpen={linkError} />
          </div>
        </div>
      </div>
    </section>
  );
}
