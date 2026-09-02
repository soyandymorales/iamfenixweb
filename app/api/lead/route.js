import { supabaseServer } from "@/lib/supabase-server";
import { ensureContactWithTag } from "@/lib/systeme";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!name || name.length > 80) {
    return Response.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const { error } = await supabaseServer.from("leads").upsert(
      {
        email: normalizedEmail,
        first_name: name,
        source: "diarios-del-fenix",
        status: "new",
        updated_at: new Date().toISOString(),
      },
      { onConflict: "email" }
    );

    if (error) {
      console.error(error);
      return Response.json({ ok: false, error: "database_error" }, { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false, error: "database_error" }, { status: 500 });
  }

  let contact;
  try {
    ({ contact } = await ensureContactWithTag({
      email: normalizedEmail,
      firstName: name,
      tagName: "diarios-del-fénix",
    }));
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false, error: "systeme_error" }, { status: 502 });
  }

  try {
    const { error } = await supabaseServer
      .from("leads")
      .update({ systeme_contact_id: contact.id })
      .eq("email", normalizedEmail);

    if (error) {
      console.error(error);
      return Response.json({ ok: false, error: "database_error" }, { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false, error: "database_error" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
