// Zee Spark waitlist signup. Free, private storage: forwards each signup to the
// site owner's inbox via Web3Forms (free tier, no database). Activate by setting
// WEB3FORMS_ACCESS_KEY in Vercel env vars; until then the endpoint answers 503
// and the site shows an email fallback instead.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (req.method === 'GET') return res.status(200).json({ configured: Boolean(key) });
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  const origin = req.headers.origin;
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  if (origin && new URL(origin).host !== host)
    return res.status(403).json({ error: 'Please use the waitlist form on the Viron website.' });
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid request.' });
  }
  // Honeypot: bots fill the hidden "company" field; pretend success and store nothing.
  if (body?.company) return res.status(200).json({ ok: true });
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254)
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  if (!key) return res.status(503).json({ error: 'The waitlist is not connected yet.' });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: key,
        subject: 'Zee Spark waitlist signup',
        from_name: 'Viron website waitlist',
        email,
        replyto: email,
        message: `New Zee Spark waitlist signup: ${email}`,
      }),
      signal: controller.signal,
    });
    const data = await response.json().catch(() => null);
    if (!response.ok || data?.success === false)
      return res.status(502).json({ error: 'Could not save your signup. Please try again later.' });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Could not save your signup. Please try again later.' });
  } finally {
    clearTimeout(timeout);
  }
}
