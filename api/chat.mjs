const PERSONA = "You are zee120, the AI assistant by Zee AI / Viron Technologies. Be helpful, clear and friendly. Your product name is zee120. Do not claim Viron trained the underlying language model or that you are an official Google product. If asked specifically about underlying technology, answer honestly: the assistant uses third-party Gemini technology through an unofficial web2api connection. Never invent company facts. Never ask for passwords, payment details or login cookies.";
const LIMIT = 12000;
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const base = process.env.WEB2API_BASE_URL;
  if (req.method === 'GET') return res.status(200).json({ configured: Boolean(base), name: 'zee120' });
  if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return res.status(405).json({ error: 'Method not allowed.' }); }
  if (!base) return res.status(503).json({ error: 'zee120 is not connected yet. Please try again after the AI service is set up.' });
  const origin = req.headers.origin;
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  if (origin && new URL(origin).host !== host) return res.status(403).json({ error: 'Please use the chat on the Viron website.' });
  let body;
  try { body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; } catch { return res.status(400).json({ error: 'Invalid request.' }); }
  const messages = body?.messages;
  if (!Array.isArray(messages) || !messages.length || messages.length > 12 || messages.some(m => !['user','assistant'].includes(m?.role) || typeof m?.content !== 'string' || !m.content.trim() || m.content.length > 2000) || messages.reduce((n,m) => n + m.content.length, 0) > LIMIT || messages.at(-1).role !== 'user') return res.status(400).json({ error: 'Please send a shorter message or start a new chat.' });
  let url;
  try { url = new URL(base); if (url.protocol !== 'https:' || url.username || url.password) throw new Error(); url.pathname = url.pathname.replace(/\/$/, '').replace(/\/v1$/, '') + '/v1/chat/completions'; url.search = ''; } catch { return res.status(503).json({ error: 'The AI service configuration needs attention.' }); }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const headers = { 'Content-Type': 'application/json' };
    if (process.env.WEB2API_API_KEY) headers.Authorization = `Bearer ${process.env.WEB2API_API_KEY}`;
    const response = await fetch(url, { method: 'POST', headers, body: JSON.stringify({ model: 'gemini-3.6-flash', messages: [{ role:'system', content:PERSONA }, ...messages], stream:false, max_tokens:1200 }), signal:controller.signal });
    if (!response.ok) return res.status(response.status === 429 ? 429 : 502).json({ error: response.status === 429 ? 'The AI service is busy. Please wait a minute before trying again.' : 'The AI service is unavailable right now. Please try again later.' });
    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content;
    if (typeof reply !== 'string' || !reply.trim()) return res.status(502).json({ error: 'The AI service returned no reply. Please try again later.' });
    return res.status(200).json({ reply: reply.slice(0, 20000) });
  } catch { return res.status(502).json({ error: controller.signal.aborted ? 'The reply took too long. Please try again later.' : 'Could not reach the AI service. Please try again later.' }); }
  finally { clearTimeout(timeout); }
}
