const OWNER_EMAIL = 'chadwickallison@galaxityai.com';
const ORIGINS = new Set(['https://www.youniverse1.com', 'https://youniverse1.com', 'https://www.galaxityai.com', 'https://galaxityai.com', 'https://enterprise-horizon.vercel.app']);
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]!));
const clean = (value: unknown, max = 2000) => typeof value === 'string' ? value.trim().slice(0, max) : '';
// Best-effort per-instance protection; the fixed recipient is never supplied by visitors.
const attempts = new Map<string, {count: number; until: number}>();
export default async function handler(req: any, res: any) {
 const origin = req.headers?.origin;
 res.setHeader('Vary', 'Origin');
 res.setHeader('Cache-Control', 'no-store');
 if (origin && !ORIGINS.has(origin)) return res.status(403).json({error:'This origin is not allowed.'});
 if (origin) res.setHeader('Access-Control-Allow-Origin', origin);
 res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
 res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
 if (req.method === 'OPTIONS') return res.status(204).end();
 if (req.method !== 'POST') {res.setHeader('Allow', 'POST, OPTIONS');return res.status(405).json({error:'Method not allowed.'});}
 if (!String(req.headers?.['content-type'] || '').includes('application/json')) return res.status(415).json({error:'Please submit the contact form as JSON.'});
 const data = req.body;
 if (!data || typeof data !== 'object' || Array.isArray(data)) return res.status(400).json({error:'Invalid form data.'});
 if (data.website) return res.status(400).json({error:'Please leave the hidden field empty.'});
 const type = clean(data.type, 40);
 const name = clean(data.name, 200);
 const email = clean(data.email, 320).toLowerCase();
 const company = clean(data.company, 200);
 const message = clean(data.message, 4000);
 const brand = ['Youniverse1', 'Galaxity AI', 'Enterprise Horizon'].includes(data.brand) ? data.brand : 'Enterprise Horizon';
 const title = clean(data.title, 120).replace(/[\r\n]/g, ' ') || (type === 'signup' ? 'Account signup' : 'Request a Demo');
 const position = clean(data.position, 200);
 const context = clean(data.context, 200);
 const source = clean(data.source, 500);
 if (!['demo', 'signup', 'contact', 'career'].includes(type)) return res.status(400).json({error:'Invalid request type.'});
 if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({error:'A name and valid email address are required.'});
 if (['contact','career'].includes(type) && !message) return res.status(400).json({error:'Please include your message.'});
 if (['demo','contact'].includes(type) && !company) return res.status(400).json({error:'Please include your company name.'});
 const attachments: {filename: string; content: string}[] = [];
 if (data.attachment) {
  const {filename, content} = data.attachment;
  if (typeof filename !== 'string' || !/\.(pdf|doc|docx)$/i.test(filename) || typeof content !== 'string' || content.length > 2796204 || !/^[A-Za-z0-9+/]*={0,2}$/.test(content)) return res.status(400).json({error:'Choose a PDF, DOC or DOCX resume no larger than 2 MB.'});
  const bytes = Buffer.from(content,'base64');
  const signature = bytes.subarray(0,8).toString('hex');
  const valid = /\.pdf$/i.test(filename) ? bytes.subarray(0,5).toString() === '%PDF-' : /\.docx$/i.test(filename) ? signature.startsWith('504b0304') : signature === 'd0cf11e0a1b11ae1';
  if (!valid || bytes.length > 2*1024*1024) return res.status(400).json({error:'The resume file does not match its file type or exceeds 2 MB.'});
  attachments.push({filename: filename.replace(/[^a-zA-Z0-9 ._()-]/g,'_').slice(-160), content});
 }
 if (type === 'career' && (!position || !attachments.length)) return res.status(400).json({error:'Please include the position and attach your resume.'});
 const apiKey = process.env.RESEND_API_KEY;
 if (!apiKey) return res.status(503).json({error:'Direct sending is temporarily unavailable. Your message has not been sent. Use an email option below to send it from your own account.'});
 const now=Date.now();
 for (const [key, entry] of attempts) if (entry.until < now) attempts.delete(key);
 const ip = String(req.headers?.['x-forwarded-for'] || 'unknown').split(',')[0].trim();
 const limit = attempts.get(ip) || {count:0, until:now+600000};
 if (limit.count >= 10) {res.setHeader('Retry-After', '600');return res.status(429).json({error:'Too many requests. Please wait a few minutes before trying again.'});}
 limit.count++; attempts.set(ip,limit);
 const subject = `${brand} — ${title}${position ? ' — '+position : ''}`;
 const rows = [['Name',name],['Email',email],['Company',company],['Position',position],['Topic',context],['Message',message],['Source',source]].filter(([,v]) => v);
 const html = `<html><body style="margin:0;background:#02070d;color:#f5f8fc;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#02070d;padding:28px 12px"><tr><td align="center"><table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#071a2e;border:1px solid #31586e;border-radius:20px"><tr><td style="padding:32px"><p style="color:#60c7e8;font-size:14px">${escapeHtml(brand)}</p><h1 style="color:#fff;font-size:30px;margin:0 0 24px">${escapeHtml(title)}</h1>${rows.map(([k,v])=>`<p style="color:#c0ccd8;margin:18px 0 6px;font-size:14px">${k}</p><div style="background:#142335;border:1px solid #526273;border-radius:8px;padding:14px;color:#fff;font-size:16px;line-height:1.6;overflow-wrap:anywhere">${escapeHtml(v).replace(/\n/g,'<br>')}</div>`).join('')}<p style="margin:28px 0"><a href="mailto:${escapeHtml(email)}" style="display:inline-block;background:#157db8;color:#fff;text-decoration:none;padding:14px 24px;border-radius:8px;font-weight:bold">Reply to ${escapeHtml(name)}</a></p><p style="color:#a9b8c9;font-size:12px;line-height:1.6">Youniverse1 · Galaxity AI · Enterprise Horizon<br>Information submitted to respond to this request and manage the business relationship.</p></td></tr></table></td></tr></table></body></html>`;
 const requestId = /^[a-f0-9-]{36}$/i.test(data.requestId || '') ? data.requestId : undefined;
 try {
  const response = await fetch('https://api.resend.com/emails', {
   method:'POST', headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json', ...(requestId ? {'Idempotency-Key':`contact-${requestId}`} : {})},
   body:JSON.stringify({from:process.env.LEAD_FROM_EMAIL || 'Enterprise Horizon <onboarding@resend.dev>',to:[OWNER_EMAIL],reply_to:email,subject,html,text:subject+'\n\n'+rows.map(([k,v])=>`${k}: ${v}`).join('\n\n'),...(attachments.length ? {attachments} : {})}),
   signal:AbortSignal.timeout(15000)
  });
  const result = await response.json().catch(()=>({}));
  if (!response.ok || !result.id) {console.error('Contact provider rejected request',response.status);return res.status(502).json({error:'The email service could not accept your message. Your information is still here; try again or use an email option below.'});}
  return res.status(200).json({ok:true,id:result.id});
 } catch {return res.status(502).json({error:'Delivery could not be confirmed. Your information is still here; try again or use an email option below.'});}
}
