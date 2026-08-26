const OWNER_EMAIL = 'chadwickallison@Galaxityai.com';

const clean = (value: unknown, max = 2000) => String(value ?? '').trim().slice(0, max);
const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'Email delivery is not configured yet. Please contact Galaxity AI directly while this is being completed.'
    });
  }

  const type = clean(req.body?.type, 40);
  const name = clean(req.body?.name, 200);
  const email = clean(req.body?.email, 320).toLowerCase();
  const company = clean(req.body?.company, 200);
  const message = clean(req.body?.message, 4000);

  if (!['demo', 'signup'].includes(type)) {
    return res.status(400).json({ error: 'Invalid request type.' });
  }
  if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'A valid name and email address are required.' });
  }

  const subject = type === 'demo'
    ? `Enterprise Horizon demo request — ${name}`
    : `Enterprise Horizon account signup — ${name}`;

  const from = process.env.LEAD_FROM_EMAIL || 'Enterprise Horizon <onboarding@resend.dev>';
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.55;color:#0b1728">
      <h2>${escapeHtml(subject)}</h2>
      <p><strong>Type:</strong> ${escapeHtml(type)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
      ${message ? `<p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>` : ''}
      <hr style="border:none;border-top:1px solid #d7dee7;margin:24px 0">
      <p style="font-size:12px;color:#5b6675">Enterprise Horizon privacy statement: We do not sell personal data to anyone.</p>
    </div>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [OWNER_EMAIL],
        reply_to: email,
        subject,
        html,
      }),
    });

    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error('Lead email delivery failed', response.status, body);
      return res.status(502).json({ error: 'Your information could not be delivered. Please try again.' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Lead email service error', error);
    return res.status(500).json({ error: 'Your information could not be delivered. Please try again.' });
  }
}
