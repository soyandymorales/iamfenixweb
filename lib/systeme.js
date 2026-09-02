const SYSTEME_API_BASE_URL = "https://api.systeme.io";

function getApiKey() {
  const apiKey = process.env.SYSTEME_API_KEY;
  if (!apiKey) {
    throw new Error("SYSTEME_API_KEY is not configured.");
  }
  return apiKey;
}

function redactSecrets(value) {
  const apiKey = process.env.SYSTEME_API_KEY;
  if (!apiKey || typeof value !== "string") {
    return value;
  }
  return value.split(apiKey).join("[redacted]");
}

function unexpectedStatusError(action, status, bodyText) {
  const snippet = redactSecrets(bodyText || "").trim().slice(0, 500);
  const suffix = snippet ? `: ${snippet}` : ".";
  return new Error(`Systeme.io ${action} failed with HTTP ${status}${suffix}`);
}

async function readResponseBody(response) {
  const text = await response.text();
  if (!text) {
    return { text: "", json: null };
  }

  try {
    return { text, json: JSON.parse(text) };
  } catch {
    return { text, json: null };
  }
}

async function systemeRequest(path, { method = "GET", headers, body, expectedStatus } = {}) {
  const apiKey = getApiKey();
  const expectedStatuses = Array.isArray(expectedStatus)
    ? expectedStatus
    : [expectedStatus];

  const response = await fetch(`${SYSTEME_API_BASE_URL}${path}`, {
    method,
    cache: "no-store",
    headers: {
      "X-API-Key": apiKey,
      ...headers,
    },
    body,
  });

  const { text, json } = await readResponseBody(response);

  if (!expectedStatuses.includes(response.status)) {
    throw unexpectedStatusError(
      `${method} ${path}`,
      response.status,
      text
    );
  }

  return { status: response.status, json };
}

function collectionItems(payload, resourceName) {
  if (!payload || !Array.isArray(payload.items)) {
    throw new Error(
      `Systeme.io returned an unexpected ${resourceName} collection payload.`
    );
  }
  return payload.items;
}

export async function findContactByEmail(email) {
  const { json } = await systemeRequest(
    `/api/contacts?email=${encodeURIComponent(email)}`,
    { expectedStatus: 200 }
  );
  const items = collectionItems(json, "contact");
  return items[0] ?? null;
}

export async function createContact({ email, firstName }) {
  const { json } = await systemeRequest("/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      fields: [{ slug: "first_name", value: firstName }],
    }),
    expectedStatus: [200, 201],
  });

  if (!json || json.id == null) {
    throw new Error("Systeme.io created a contact without an id.");
  }

  return json;
}

export async function updateContact(contactId, { firstName }) {
  const { json } = await systemeRequest(`/api/contacts/${contactId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/merge-patch+json" },
    body: JSON.stringify({
      fields: [{ slug: "first_name", value: firstName }],
    }),
    expectedStatus: 200,
  });

  return json;
}

export async function findTagByName(name) {
  const { json } = await systemeRequest(
    `/api/tags?query=${encodeURIComponent(name)}`,
    { expectedStatus: 200 }
  );
  const items = collectionItems(json, "tag");
  return items.find((tag) => tag?.name === name) ?? null;
}

export async function assignTag(contactId, tagId) {
  await systemeRequest(`/api/contacts/${contactId}/tags`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tagId }),
    expectedStatus: 204,
  });
}

export async function ensureContactWithTag({ email, firstName, tagName }) {
  const existingContact = await findContactByEmail(email);
  const contact = existingContact
    ? await updateContact(existingContact.id, { firstName })
    : await createContact({ email, firstName });

  const tag = await findTagByName(tagName);
  if (!tag) {
    throw new Error(`Systeme.io tag "${tagName}" does not exist.`);
  }

  await assignTag(contact.id, tag.id);
  return { contact, tag };
}
