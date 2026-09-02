"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { domains } from "@/content/domains/domains";

/* La captura de leads vive aquí desde que el hero cambió a botón CTA:
   el botón "Diarios del Fénix" del hero ancla a esta sección. */
export default function CTADiariosFenix() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    router.prefetch("/diarios");
  }, [router]);

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
      router.push("/diarios");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="empieza-aqui"
      className="section section--parchment section--viewport cta-final"
      aria-labelledby="cta-title"
    >
      <div className="container cta-final__inner">
        <span className="eyebrow" data-reveal>
          Diarios del Fénix
        </span>
        <h2 id="cta-title" className="cta-final__headline" data-reveal>
          Arquitecta tu vida como un artesano crea una obra maestra.
        </h2>
        <div className="cta-final__architectures">
          <p className="cta-final__meta-kicker" data-reveal>
            Eleva en 21 días tus 3 Arquitecturas
          </p>
          <ul className="cta-final__meta" aria-label="3 Arquitecturas">
            {domains.map((domain) => (
              <li key={domain.id} data-domain={domain.id} data-reveal>
                <span className="cta-final__meta-numeral">{domain.numeral}</span>
                <span className="cta-final__meta-name">{domain.shortName}</span>
              </li>
            ))}
          </ul>
          <p className="cta-final__meta-offer" data-reveal>
            Acceso gratuito a los planos
          </p>
        </div>
        <form
          className="cta-final__form"
          data-reveal
          onSubmit={handleSubmit}
          aria-label="Acceso a Diarios del Fénix"
        >
          <div className="cta-final__fields">
            <div className="cta-final__field">
              <label htmlFor="cta-name" className="sr-only">
                Tu nombre
              </label>
              <input
                id="cta-name"
                className="cta-final__input"
                type="text"
                name="name"
                placeholder="Tu nombre"
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
                Tu correo
              </label>
              <input
                id="cta-email"
                className="cta-final__input"
                type="email"
                name="email"
                placeholder="Tu correo"
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
            {status === "loading"
              ? "Enviando…"
              : "Iniciar Diarios del Fénix"}
          </button>
          <p className="cta-final__note" role="status">
            {status === "error"
              ? "Algo interrumpió el envío. Intenta de nuevo con calma."
              : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
