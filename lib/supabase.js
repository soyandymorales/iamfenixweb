import { createClient } from "@supabase/supabase-js";

let client;

function requiredEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is not configured.`);
  }
  return value;
}

export function getSupabase() {
  if (!client) {
    client = createClient(
      requiredEnv("SUPABASE_URL"),
      requiredEnv("SUPABASE_PUBLISHABLE_KEY")
    );
  }
  return client;
}
