"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getHomeCopy } from "@/content/metadata/home";
import { useLocale } from "@/hooks/useLocale";
import { localizeHref } from "@/libs/locale";

const CLASS_NAMES = {
  final: {
    form: "cta-final__form",
    fields: "cta-final__fields",
    field: "cta-final__field",
    input: "cta-final__input",
    submit: "btn btn--solid cta-final__submit",
    note: "cta-final__note",
  },
  house: {
    form: "house-lead-form",
    fields: "house-lead-form__fields",
    field: "house-lead-form__field",
    input: "house-lead-form__input",
    submit: "btn btn--solid house-lead-form__submit",
    note: "house-lead-form__note",
  },
};

export default function DiariosLeadForm({
  variant = "final",
  copy: copyOverride,
  reveal = false,
}) {
  const locale = useLocale();
  const defaultCopy = getHomeCopy(locale).lead;
  const copy = { ...defaultCopy, ...copyOverride };
  const classes = CLASS_NAMES[variant] ?? CLASS_NAMES.final;
  const confirmationHref = localizeHref("/planosddf/bienvenido", locale);
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    router.prefetch(confirmationHref);
  }, [router, confirmationHref]);

  function markIdle() {
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) throw new Error("lead_failed");
      router.push(confirmationHref);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className={classes.form}
      data-reveal={reveal ? true : undefined}
      onSubmit={handleSubmit}
      aria-label={copy.formLabel}
    >
      <div className={classes.fields}>
        <div className={classes.field}>
          <label htmlFor={`${variant}-lead-name`} className="sr-only">
            {copy.nameLabel}
          </label>
          <input
            id={`${variant}-lead-name`}
            className={classes.input}
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

        <div className={classes.field}>
          <label htmlFor={`${variant}-lead-email`} className="sr-only">
            {copy.emailLabel}
          </label>
          <input
            id={`${variant}-lead-email`}
            className={classes.input}
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
        className={classes.submit}
        disabled={status === "loading"}
      >
        {status === "loading" ? copy.submitting : copy.submit}
      </button>

      <p className={classes.note} role="status">
        {status === "error" ? copy.error : ""}
      </p>
    </form>
  );
}
