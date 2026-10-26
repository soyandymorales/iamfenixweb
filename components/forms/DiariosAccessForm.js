"use client";

import { useState } from "react";

import { useLocale } from "@/hooks/useLocale";

export default function DiariosAccessForm({ copy }) {
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });
      if (!response.ok) throw new Error("access_failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="cta-final__form" onSubmit={handleSubmit} aria-label={copy.returningTitle}>
      <p className="cta-final__meta-kicker">{copy.returningTitle}</p>
      <p className="cta-final__note">{copy.returningNote}</p>
      <div className="cta-final__fields">
        <div className="cta-final__field">
          <label htmlFor="diarios-access-email" className="sr-only">
            {copy.returningTitle}
          </label>
          <input
            id="diarios-access-email"
            className="cta-final__input"
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            required
            autoComplete="email"
            maxLength={254}
          />
        </div>
      </div>
      <button type="submit" className="btn btn--solid cta-final__submit" disabled={status === "loading"}>
        {status === "loading" ? copy.returningSending : copy.returningSubmit}
      </button>
      <p className="cta-final__note" role="status">
        {status === "done" ? copy.returningDone : ""}
        {status === "error" ? copy.returningError : ""}
      </p>
    </form>
  );
}
