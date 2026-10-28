"use client";

import { useEffect, useRef, useState } from "react";

import { getLegalNavigation } from "@/content/legal/navigation";
import { useLocale } from "@/hooks/useLocale";

function loadScript(src) {
  if (typeof window === "undefined") return Promise.reject(new Error("sdk"));
  if (src.includes("/web-sdk/") && window.paypal?.createInstance) return Promise.resolve();

  const existing = document.querySelector(`script[src="${src}"]`);
  if (existing) {
    return new Promise((resolve, reject) => {
      if (src.includes("/web-sdk/") && window.paypal?.createInstance) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("sdk")), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("sdk"));
    document.head.appendChild(script);
  });
}

function canUse(methods, name) {
  try {
    return Boolean(methods?.isEligible?.(name));
  } catch {
    return false;
  }
}

async function createOrder(locale, contact) {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ locale, ...contact }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload?.id) throw new Error("checkout_unavailable");
  return { orderId: payload.id };
}

function readContact(form) {
  const data = new FormData(form);
  return {
    email: String(data.get("email") || ""),
    givenName: String(data.get("givenName") || ""),
    familyName: String(data.get("familyName") || ""),
  };
}

async function captureAndRedirect(orderId, locale, contact) {
  const response = await fetch("/api/checkout/capture", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderId, locale, ...contact }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || typeof payload.redirect !== "string" || !payload.redirect.startsWith("/")) {
    throw new Error(payload?.error === "capture_rejected" ? "declined" : "capture_failed");
  }
  window.location.assign(payload.redirect);
}

export default function DiariosCheckout({ copy, price, scriptSrc, clientId }) {
  const locale = useLocale();
  const legal = getLegalNavigation(locale);
  const terms = legal.find((item) => item.id === "terms");
  const privacy = legal.find((item) => item.id === "privacy");
  const formRef = useRef(null);
  const paypalRef = useRef(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;
    const host = paypalRef.current;

    function fail(code) {
      if (!cancelled) setMessage(code === "declined" ? "declined" : "error");
    }

    async function mount() {
      await loadScript(scriptSrc);
      if (cancelled || !window.paypal?.createInstance) throw new Error("sdk");

      const tokenResponse = await fetch("/api/checkout/client-token");
      const tokenPayload = await tokenResponse.json().catch(() => ({}));
      const sdkLocale = locale === "en" ? "en-US" : "es-MX";
      const base = { components: ["paypal-payments"], pageType: "checkout", locale: sdkLocale };

      let sdk = null;
      if (tokenResponse.ok && tokenPayload.accessToken) {
        try {
          sdk = await window.paypal.createInstance({ ...base, clientToken: tokenPayload.accessToken });
        } catch {
          sdk = null;
        }
      }
      if (!sdk && clientId) {
        sdk = await window.paypal.createInstance({
          clientId,
          components: ["paypal-payments"],
          pageType: "checkout",
          locale: sdkLocale,
        });
      }
      if (!sdk || cancelled) throw new Error("sdk");

      const methods = await sdk.findEligibleMethods({ currencyCode: "USD" });
      if (cancelled) return;

      if (canUse(methods, "paypal") && host && sdk.createPayPalOneTimePaymentSession) {
        const session = sdk.createPayPalOneTimePaymentSession({
          async onApprove(data) {
            await captureAndRedirect(data.orderId, locale, readContact(formRef.current));
          },
          onCancel() {},
          onError() {
            fail();
          },
        });
        const button = document.createElement("paypal-button");
        button.type = "pay";
        button.className = "paypal-blue";
        host.replaceChildren(button);
        button.addEventListener("click", async () => {
          if (!formRef.current?.reportValidity()) return;
          try {
            await session.start({ presentationMode: "auto" }, createOrder(locale, readContact(formRef.current)));
          } catch (error) {
            fail(error?.message);
          }
        });
      } else {
        fail();
      }
    }

    mount().catch(() => fail());

    return () => {
      cancelled = true;
      host?.replaceChildren();
    };
  }, [clientId, locale, scriptSrc]);

  return (
    <form
      ref={formRef}
      className="diarios-pay"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="diarios-pay__summary">
        <div>
          <p className="diarios-pay__product">{copy.eyebrow}</p>
          <p className="diarios-pay__due">{copy.dueToday}</p>
          <p className="diarios-pay__once">{copy.once}</p>
        </div>
        <p className="diarios-pay__amount">
          {price}
          <span>USD</span>
        </p>
      </div>

      <fieldset className="diarios-pay__contact">
        <legend>{copy.contactLabel}</legend>
        <label className="diarios-pay__field">
          <span>{copy.emailLabel}</span>
          <input name="email" type="email" autoComplete="email" placeholder={copy.emailPlaceholder} required />
        </label>
        <div className="diarios-pay__split">
          <label className="diarios-pay__field">
            <span>{copy.firstNameLabel}</span>
            <input name="givenName" autoComplete="given-name" placeholder={copy.firstNamePlaceholder} required />
          </label>
          <label className="diarios-pay__field">
            <span>{copy.lastNameLabel}</span>
            <input name="familyName" autoComplete="family-name" placeholder={copy.lastNamePlaceholder} required />
          </label>
        </div>
      </fieldset>

      <div className="diarios-pay__close">
        <div className="diarios-pay__total">
          <div>
            <p>{copy.totalDue}</p>
            <p>{copy.accessNote}</p>
          </div>
          <p className="diarios-pay__amount">
            {price}
            <span>USD</span>
          </p>
        </div>

        <p className="diarios-pay__agree">
          {copy.agreeLead}
          <a href={terms.href}>{terms.label}</a>
          {copy.agreeJoin}
          <a href={privacy.href}>{privacy.label}</a>.
        </p>

        <div ref={paypalRef} className="diarios-pay__paypal" />

        <p className="diarios-pay__assurance">
          <ShieldIcon />
          {copy.guarantee}
        </p>
      </div>

      {message === "declined" || message === "error" ? (
        <p className="diarios-offer__note" role="status">
          {message === "declined" ? copy.declined : copy.checkoutError}
        </p>
      ) : null}
    </form>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.2 5.5 5.6v6.1c0 4.2 2.7 7.2 6.5 8.9 3.8-1.7 6.5-4.7 6.5-8.9V5.6L12 3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8.8 12.1 11 14.3 15.4 9.8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
