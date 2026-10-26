"use client";

import { useState } from "react";

import { useLocale } from "@/hooks/useLocale";

export default function DiariosCheckout({ copy }) {
  const locale = useLocale();
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale }),
      });
      const payload = await response.json();
      if (!response.ok || !payload?.url) throw new Error("checkout_unavailable");
      window.location.assign(payload.url);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="btn btn--solid" disabled={status === "loading"}>
        {status === "loading" ? copy.entering : copy.enter}
      </button>
      <p className="cta-final__note" role="status">
        {status === "error" ? copy.checkoutError : ""}
      </p>
    </form>
  );
}
