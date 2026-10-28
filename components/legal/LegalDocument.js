import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LayoutClient from "@/components/layout/LayoutClient";
import { paymentProcessors } from "@/content/legal/operator";
import { getLegalDocument } from "@/content/legal";
import { getLegalNavigation } from "@/content/legal/navigation";
import { localizeHref } from "@/libs/locale";

function Parts({ parts, locale }) {
  const list = Array.isArray(parts) ? parts : [parts];
  return list.map((part, index) => {
    if (typeof part === "string") return <span key={index}>{part}</span>;
    if (part?.email) {
      return (
        <a key={index} href={`mailto:${part.email}`}>
          {part.email}
        </a>
      );
    }
    if (part?.href) {
      const external = part.href.startsWith("http");
      const href = external ? part.href : localizeHref(part.href, locale);
      return (
        <a
          key={index}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {part.label}
        </a>
      );
    }
    if (part?.strong) return <strong key={index}>{part.strong}</strong>;
    return null;
  });
}

function Block({ block, locale }) {
  if (block.type === "processors") {
    return (
      <ul className="legal__list">
        {paymentProcessors.map((processor) => (
          <li key={processor.name}>
            <a href={processor.href} target="_blank" rel="noopener noreferrer">
              {processor.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "ul") {
    return (
      <ul className="legal__list">
        {block.items.map((item) => (
          <li key={typeof item === "string" ? item : item.join?.("") || item[0]}>
            {typeof item === "string" ? item : <Parts parts={item} locale={locale} />}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "note") {
    return (
      <p className="legal__note">
        <Parts parts={block.parts || block.text} locale={locale} />
      </p>
    );
  }

  return (
    <p>
      {block.text ? block.text : <Parts parts={block.parts} locale={locale} />}
    </p>
  );
}

export default function LegalDocument({ id, locale }) {
  const doc = getLegalDocument(id, locale);
  const operator = doc.operator;
  const related = getLegalNavigation(locale).filter((item) => item.id !== id);

  return (
    <LayoutClient>
      <Header />
      <main className="legal">
        <article className="container legal__sheet">
          <header className="legal__mast">
            <span className="eyebrow">{doc.eyebrow}</span>
            <h1>{doc.title}</h1>
            <p className="legal__updated">
              <time dateTime={operator.effectiveIso}>{operator.effective}</time>
            </p>
            <p className="legal__lead">{doc.lead}</p>
          </header>

          <section className="legal__identity" aria-labelledby="legal-identity">
            <h2 id="legal-identity">{doc.identityTitle}</h2>
            <dl>
              <div>
                <dt>{operator.nameLabel}</dt>
                <dd>{operator.name}</dd>
              </div>
              <div>
                <dt>{operator.brandLabel}</dt>
                <dd>{operator.brandLine}</dd>
              </div>
              <div>
                <dt>{operator.siteLabel}</dt>
                <dd>
                  <a href={operator.site}>{operator.siteHost}</a>
                </dd>
              </div>
              <div>
                <dt>{operator.emailLabel}</dt>
                <dd>
                  <a href={`mailto:${operator.email}`}>{operator.email}</a>
                </dd>
              </div>
            </dl>
          </section>

          <nav className="legal__toc" aria-label={doc.contentsLabel}>
            <ol>
              {doc.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </nav>

          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="legal__section">
              <h2>{section.heading}</h2>
              {section.blocks.map((block, index) => (
                <Block key={`${section.id}-${index}`} block={block} locale={locale} />
              ))}
            </section>
          ))}

          <nav className="legal__related" aria-label={doc.relatedLabel}>
            {related.map((item) => (
              <a key={item.id} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </article>
      </main>
      <Footer />
    </LayoutClient>
  );
}
