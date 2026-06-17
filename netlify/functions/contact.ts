// Netlify Function (v2) — envía un correo de contacto/PQRS usando la API de SMTP de Brevo.
// Requiere la variable de entorno BREVO_API_KEY.
// Opcionalmente lee BREVO_SENDER_EMAIL para el correo remitente verificado en Brevo.

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

  let name = '';
  let email = '';
  let type = '';
  let message = '';

  try {
    const body = (await req.json()) as { name?: string; email?: string; type?: string; message?: string };
    name = (body.name ?? '').trim();
    email = (body.email ?? '').trim().toLowerCase();
    type = (body.type ?? '').trim();
    message = (body.message ?? '').trim();
  } catch {
    return json(400, { error: 'Invalid body' });
  }

  if (!name || !email || !type || !message) {
    return json(400, { error: 'Missing required fields' });
  }

  if (!EMAIL_RE.test(email)) {
    return json(400, { error: 'Invalid email format' });
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'no-reply@edav.com.co';
  const recipientEmail = 'encorely.dev@edav.com.co';

  const payload = {
    sender: {
      name: 'Encorely Landing PQRS',
      email: senderEmail,
    },
    to: [
      {
        email: recipientEmail,
        name: 'Soporte Encorely',
      },
    ],
    replyTo: {
      email: email,
      name: name,
    },
    subject: `[PQRS - ${type.toUpperCase()}] Nueva solicitud de ${name}`,
    htmlContent: `
      <html>
        <body style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #9350FF; border-bottom: 2px solid #F366FF; padding-bottom: 10px;">Nueva Solicitud de Contacto / PQRS</h2>
          <p>Se ha recibido una nueva solicitud desde el formulario de la Landing Page:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 120px; border-bottom: 1px solid #eee;">Nombre:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Tipo de PQRS:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; text-transform: capitalize;">${type}</td>
            </tr>
          </table>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #F366FF; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #555; margin-bottom: 8px;">Mensaje:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            Este correo fue enviado de forma automática desde el servidor de Encorely. Puedes responder directamente a este correo para escribirle a la persona.
          </p>
        </body>
      </html>
    `,
  };

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 201 || res.status === 200 || res.status === 202) {
      return json(200, { ok: true });
    }

    const errorDetails = await res.text();
    console.error('Brevo API SMTP error:', errorDetails);
    return json(502, { error: 'Error processing email with Brevo', details: errorDetails });
  } catch (err) {
    console.error('SMTP Function internal error:', err);
    return json(500, { error: 'Internal server error' });
  }
};
