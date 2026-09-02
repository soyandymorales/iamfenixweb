import Image from "next/image";
import { socialProof } from "@/content/metadata/metrics";

export default function SocialProofLogos() {
  const { title, logos } = socialProof;

  return (
    <section className="proof section--viewport" aria-label="Trayectoria">
      <div className="container">
        <p className="proof__title" data-reveal>
          {title}
        </p>
        <ul className="proof__logos">
          {logos.map((logo) => (
            <li key={logo.name} className="proof__logo" data-reveal>
              <a
                href={logo.href}
                className="proof__logo-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width ?? 160}
                  height={logo.height ?? 40}
                  className={
                    logo.modifier
                      ? `proof__logo-img proof__logo-img--${logo.modifier}`
                      : "proof__logo-img"
                  }
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
