"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getDomains } from "@/content/domains/domains";
import { getHomeCopy } from "@/content/metadata/home";
import { useLocale } from "@/hooks/useLocale";
import { grantDiariosAccess } from "@/libs/diarios-access";
import { localizeHref } from "@/libs/locale";

export default function CTADiariosFenix({ onUnlocked }) {
  const locale = useLocale();
  const copy = getHomeCopy(locale).lead;
  const domains = getDomains(locale);
  const diariosHref = localizeHref("/diarios", locale);
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const staysHere = typeof onUnlocked === "function";

  useEffect(() => {
    if (!staysHere) router.prefetch(diariosHref);
  }, [router, diariosHref, staysHere]);

  function markIdle() {
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error("lead_failed");
      grantDiariosAccess();
      if (staysHere) {
        onUnlocked();
        return;
      }
      router.push(diariosHref);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="empieza-aqui"
      className={`section section--parchment section--viewport cta-final${staysHere ? " cta-final--solo" : ""}`}
      aria-labelledby="cta-title"
    >
      <div className="container cta-final__inner">
        <span className="eyebrow" data-reveal>
          {copy.eyebrow}
        </span>
        <h2 id="cta-title" className="cta-final__headline" data-reveal>
          {copy.title}
        </h2>
        <div className="cta-final__architectures">
          <p className="cta-final__meta-kicker" data-reveal>
            {copy.architecturesKicker}
          </p>
          <ul className="cta-final__meta" aria-label={copy.architecturesLabel}>
            {domains.map((domain) => (
              <li key={domain.id} data-domain={domain.id} data-reveal>
                <span className="cta-final__meta-numeral">{domain.numeral}</span>
                <span className="cta-final__meta-name">{domain.shortName}</span>
              </li>
            ))}
          </ul>
          <p className="cta-final__meta-offer" data-reveal>
            {copy.offer}
          </p>
        </div>
        <form
          className="cta-final__form"
          data-reveal
          onSubmit={handleSubmit}
          aria-label={copy.formLabel}
        >
          <div className="cta-final__fields">
            <div className="cta-final__field">
              <label htmlFor="cta-name" className="sr-only">
                {copy.nameLabel}
              </label>
              <input
                id="cta-name"
                className="cta-final__input"
                type="text"
                name="name"
                placeholder={copy.namePlaceholder}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  markIdle();
                }}
                required
                autoComplete="name"
                maxLength={80}
              />
            </div>
            <div className="cta-final__field">
              <label htmlFor="cta-email" className="sr-only">
                {copy.emailLabel}
              </label>
              <input
                id="cta-email"
                className="cta-final__input"
                type="email"
                name="email"
                placeholder={copy.emailPlaceholder}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  markIdle();
                }}
                required
                autoComplete="email"
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn--solid cta-final__submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? copy.submitting : copy.submit}
          </button>
          <p className="cta-final__note" role="status">
            {status === "error" ? copy.error : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
