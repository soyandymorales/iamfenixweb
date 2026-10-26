import { createHash, randomBytes } from "crypto";

import { DIARIOS_PRODUCT_CODE } from "@/content/diarios/offer";
import { getSupabaseServer } from "@/lib/supabase-server";

const PROVIDER = "lemonsqueezy";

export function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

export function hashAccessToken(token) {
  return createHash("sha256").update(token).digest("hex");
}

export function createAccessToken() {
  return randomBytes(32).toString("base64url");
}

function db() {
  return getSupabaseServer();
}

export async function findBuyerByEmail(email) {
  const normalized = normalizeEmail(email);
  if (!normalized) return null;
  const { data, error } = await db()
    .from("buyers")
    .select("id, email, full_name")
    .eq("email", normalized)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function latestPaidOrderId(buyerId) {
  const { data, error } = await db()
    .from("buyer_orders")
    .select("provider_order_id")
    .eq("buyer_id", buyerId)
    .eq("product_code", DIARIOS_PRODUCT_CODE)
    .eq("status", "paid")
    .is("revoked_at", null)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return data?.provider_order_id || null;
}

export async function buyerHasAccess(buyerId) {
  const { data, error } = await db()
    .from("buyer_orders")
    .select("id")
    .eq("buyer_id", buyerId)
    .eq("product_code", DIARIOS_PRODUCT_CODE)
    .eq("status", "paid")
    .is("revoked_at", null)
    .limit(1);
  if (error) throw error;
  return Array.isArray(data) && data.length > 0;
}

export async function findBuyerByToken(token) {
  if (!token) return null;
  const { data, error } = await db()
    .from("buyers")
    .select("id, email")
    .eq("access_token_hash", hashAccessToken(token))
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;
  if (!(await buyerHasAccess(data.id))) return null;
  return data;
}

async function upsertBuyer({ email, fullName }) {
  const normalized = normalizeEmail(email);
  const existing = await findBuyerByEmail(normalized);
  if (existing) {
    if (fullName && fullName !== existing.full_name) {
      await db()
        .from("buyers")
        .update({ full_name: fullName, updated_at: new Date().toISOString() })
        .eq("id", existing.id);
    }
    return existing;
  }

  const { data, error } = await db()
    .from("buyers")
    .insert({ email: normalized, full_name: fullName || null })
    .select("id, email, full_name")
    .single();

  if (error?.code === "23505") return findBuyerByEmail(normalized);
  if (error) throw error;
  return data;
}

export async function recordPaidOrder({
  email,
  fullName,
  providerOrderId,
  variantId,
  amountMinor,
  currency,
}) {
  const buyer = await upsertBuyer({ email, fullName });
  const now = new Date().toISOString();
  const { data, error } = await db()
    .from("buyer_orders")
    .insert({
      buyer_id: buyer.id,
      provider: PROVIDER,
      provider_order_id: String(providerOrderId),
      variant_id: String(variantId),
      product_code: DIARIOS_PRODUCT_CODE,
      amount_minor: amountMinor,
      currency,
      status: "paid",
      email_status: "pending",
      updated_at: now,
    })
    .select("id, email_status")
    .maybeSingle();

  if (error?.code === "23505") {
    const { data: existing, error: readError } = await db()
      .from("buyer_orders")
      .select("id, email_status")
      .eq("provider", PROVIDER)
      .eq("provider_order_id", String(providerOrderId))
      .maybeSingle();
    if (readError) throw readError;
    return { buyer, order: existing, created: false };
  }
  if (error) throw error;
  return { buyer, order: data, created: true };
}

export async function revokeOrder(providerOrderId) {
  const now = new Date().toISOString();
  const { error } = await db()
    .from("buyer_orders")
    .update({ status: "refunded", revoked_at: now, updated_at: now })
    .eq("provider", PROVIDER)
    .eq("provider_order_id", String(providerOrderId));
  if (error) throw error;
}

export async function releaseWebhookEvent(eventId) {
  const { error } = await db()
    .from("buyer_webhook_events")
    .delete()
    .eq("provider", PROVIDER)
    .eq("event_id", eventId);
  if (error) throw error;
}

export async function claimWebhookEvent(eventId, eventType) {
  const { error } = await db().from("buyer_webhook_events").insert({
    provider: PROVIDER,
    event_id: eventId,
    event_type: eventType,
    processed_at: new Date().toISOString(),
  });
  if (error?.code === "23505") return false;
  if (error) throw error;
  return true;
}

export async function saveAccessToken(buyerId, token) {
  const { error } = await db()
    .from("buyers")
    .update({
      access_token_hash: hashAccessToken(token),
      updated_at: new Date().toISOString(),
    })
    .eq("id", buyerId);
  if (error) throw error;
}

export async function markOrderEmail(providerOrderId, { status, errorMessage }) {
  const now = new Date().toISOString();
  const { data: current, error: readError } = await db()
    .from("buyer_orders")
    .select("email_attempts")
    .eq("provider", PROVIDER)
    .eq("provider_order_id", String(providerOrderId))
    .maybeSingle();
  if (readError) throw readError;

  const { error } = await db()
    .from("buyer_orders")
    .update({
      email_status: status,
      email_attempts: (current?.email_attempts || 0) + 1,
      email_last_error: errorMessage || null,
      email_sent_at: status === "sent" ? now : null,
      updated_at: now,
    })
    .eq("provider", PROVIDER)
    .eq("provider_order_id", String(providerOrderId));
  if (error) throw error;
}
