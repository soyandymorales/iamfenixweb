import DiariosCheckout from "@/components/forms/DiariosCheckout";
import { getDiariosOffer } from "@/content/diarios/offer";

export default function DiariosCart({
  locale,
  checkoutReady = false,
  scriptSrc = "",
  clientId = "",
  sandbox = true,
}) {
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
    <section className="section section--charcoal diarios-cart" aria-labelledby="diarios-cart-title">
      <div className="container diarios-cart__grid">
        <h1 id="diarios-cart-title" className="diarios-cart__title">
          {copy.checkoutTitle}
        </h1>
        <div className="diarios-cart__summary">
          <article className="diarios-cart__plan">
            <span className="diarios-cart__mark" aria-hidden="true" />
            <div>
              <h2>{copy.eyebrow}</h2>
              <p>{copy.opening}</p>
            </div>
            <p className="diarios-cart__plan-price">
              <strong>{price}</strong>
              <span>{copy.onceShort}</span>
            </p>
          </article>
          <article className="diarios-cart__includes">
            <h2>{copy.includesTitle}</h2>
            <ul aria-label={copy.architecturesLabel}>
              {contents.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.span}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="diarios-cart__panel">
          {checkoutReady ? (
            <DiariosCheckout
              copy={copy}
              price={price}
              scriptSrc={scriptSrc}
              clientId={clientId}
              sandbox={sandbox}
            />
          ) : (
            <p className="diarios-offer__note">{copy.quiet}</p>
          )}
        </div>
      </div>
    </section>
  );
}
