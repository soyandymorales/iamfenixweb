import Image from "next/image";
import ScriptureCitation from "@/components/ui/ScriptureCitation";

export default function Card({
  numeral,
  illustration,
  title,
  subtitle,
  description,
  scripture,
  accent = "cedar",
}) {
  return (
    <article className="card" data-accent={accent} data-reveal>
      {numeral ? <span className="card__numeral">{numeral}</span> : null}

      {illustration?.src ? (
        <div className="card__figure">
          <Image
            src={illustration.src}
            alt={illustration.alt ?? ""}
            width={illustration.width ?? 700}
            height={illustration.height ?? 700}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="card__illustration"
          />
        </div>
      ) : null}

      <div className="card__body">
        {title ? <h3 className="card__title">{title}</h3> : null}
        {subtitle ? <p className="card__subtitle">{subtitle}</p> : null}
        {description ? (
          <p className="card__description">{description}</p>
        ) : null}
      </div>

      {scripture ? (
        <footer className="card__footer">
          <ScriptureCitation
            reference={scripture.reference}
            text={scripture.text}
          />
        </footer>
      ) : null}
    </article>
  );
}
