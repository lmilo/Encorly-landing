// Netlify Function (v2) — inscribe un correo en la waitlist vía Brevo.
// La API key vive en la variable de entorno BREVO_API_KEY (configurada en Netlify),
// nunca se expone en el frontend.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return json(500, { error: 'Server not configured' });
  }

  let email = '';
  try {
    const body = (await req.json()) as { email?: string };
    email = (body.email ?? '').trim().toLowerCase();
  } catch {
    return json(400, { error: 'Invalid body' });
  }

  if (!EMAIL_RE.test(email)) {
    return json(400, { error: 'Invalid email' });
  }

  const listId = process.env.BREVO_LIST_ID;
  const payload: Record<string, unknown> = { email, updateEnabled: true };
  if (listId) payload.listIds = [Number(listId)];

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  // Contacto ya existente → lo tratamos como éxito (idempotente).
  if (res.status === 201 || res.status === 204) {
    return json(200, { ok: true });
  }

  const data = (await res.json().catch(() => ({}))) as { code?: string };
  if (res.status === 400 && data.code === 'duplicate_parameter') {
    return json(200, { ok: true, duplicate: true });
  }

  return json(502, { error: 'Provider error' });
};
