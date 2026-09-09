const ALLOWED = new Set(['www.youniverse1.com', 'www.galaxityai.com', 'enterprise-horizon.vercel.app']);
const normalize = value => String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
export function searchEntries(entries, query) {
  const q = normalize(query).slice(0, 200);
  if (!q) return [];
  const terms = [...new Set(q.split(/\s+/))];
  return entries.flatMap(entry => {
    let url;
    try { url = new URL(entry.url); } catch { return []; }
    if (url.protocol !== 'https:' || !ALLOWED.has(url.hostname)) return [];
    const title = normalize(entry.title), body = normalize(entry.text), all = title + ' ' + body;
    if (!terms.every(term => all.includes(term))) return [];
    const score = (title === q ? 100 : 0) + (title.includes(q) ? 30 : 0) + terms.reduce((n, term) => n + (title.includes(term) ? 10 : 1), 0);
    return [{ ...entry, score }];
  }).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

if (typeof customElements !== 'undefined' && !customElements.get('network-search')) {
  customElements.define('network-search', class extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>
        :host{display:block;grid-column:1/-1;width:100%;min-width:0;flex-basis:100%;color:#edf6ff;font:14px/1.5 Arial,sans-serif;box-sizing:border-box}
        *{box-sizing:border-box}form{display:flex;gap:8px;align-items:center;max-width:700px;margin:8px auto 12px}label{color:#c8dbe8;white-space:nowrap;font-size:13px}input{min-width:0;flex:1;border:1px solid #47718e;border-radius:5px;background:#071522;color:white;padding:10px 12px;font:inherit}input::placeholder{color:#b1c0cd}button{background:#125586;color:white;border:1px solid #4389b6;border-radius:5px;padding:10px 16px;font:inherit;cursor:pointer}button:hover{background:#1970ad}input:focus-visible,button:focus-visible,a:focus-visible{outline:2px solid #8adfff;outline-offset:3px}
        dialog{position:fixed;margin:auto;width:min(760px,calc(100vw - 24px));max-height:80svh;overflow:auto;background:#07111c;color:#edf6ff;border:1px solid #5283a2;border-radius:12px;padding:24px;box-shadow:0 20px 80px #0009}dialog::backdrop{background:#000b}.heading{display:flex;justify-content:space-between;gap:12px;align-items:start}h2{font-size:23px;line-height:1.3;margin:0}p{margin:10px 0;color:#bfd0de}ul{list-style:none;padding:0;margin:0}li{border-top:1px solid #304355;padding:16px 0}a{font-size:18px;color:#91d9ff;text-decoration:underline;text-underline-offset:3px}small{display:block;color:#b5c7d6;margin-top:6px}.close{padding:6px 12px;white-space:nowrap}.scope{font-size:12px}.empty{padding:24px 0}
        @media(max-width:600px){form{flex-wrap:wrap;margin:8px 0 12px}label{width:100%}input{font-size:16px}button{padding:10px 12px}dialog{padding:18px}}
      </style><form role="search"><label for="query">Search our sites</label><input id="query" type="search" maxlength="200" placeholder="Search all three sites…" required autocomplete="off"><button type="submit">Search</button></form><dialog aria-labelledby="results-title"><div class="heading"><h2 id="results-title">Search results</h2><button class="close" type="button">Close</button></div><p class="scope">Youniverse1 · Galaxity AI · Enterprise Horizon</p><p class="status" role="status" aria-live="polite"></p><ul></ul></dialog>`;
      const input = root.querySelector('input'), dialog = root.querySelector('dialog'), status = root.querySelector('.status'), list = root.querySelector('ul');
      const close = () => { dialog.close(); input.focus(); };
      root.querySelector('.close').addEventListener('click', close);
      dialog.addEventListener('close', () => input.focus());
      root.querySelector('form').addEventListener('submit', async event => {
        event.preventDefault();
        const query = input.value.trim();
        if (!query) return;
        list.replaceChildren();
        status.textContent = 'Searching our site content…';
        root.querySelector('h2').textContent = `Results for “${query}”`;
        if (!dialog.open) dialog.showModal();
        try {
          if (!this.entries) {
            const response = await fetch('/network-search-index.json', { credentials: 'omit' });
            if (!response.ok) throw new Error('Index unavailable');
            this.entries = await response.json();
          }
          const matches = searchEntries(this.entries, query);
          status.textContent = matches.length ? `${matches.length} results${matches.length > 50 ? ' — showing the first 50; refine your search for more specific results.' : ''}` : 'No matching content on our three sites. Try a different term such as QKD, blockchain, careers or integrations.';
          for (const entry of matches.slice(0, 50)) {
            const li = document.createElement('li'), link = document.createElement('a'), site = document.createElement('small'), excerpt = document.createElement('p');
            link.href = entry.url; link.textContent = entry.title;
            site.textContent = entry.site;
            const text = entry.text || '', term = query.trim().split(/\s+/)[0].toLowerCase(), at = text.toLowerCase().indexOf(term), start = Math.max(0, at - 65);
            excerpt.textContent = (start ? '…' : '') + text.slice(start, start + 240) + (text.length > start + 240 ? '…' : '');
            li.append(link, site, excerpt); list.append(li);
          }
        } catch {
          this.entries = null;
          status.textContent = 'Site search is temporarily unavailable. Please close this panel and try again.';
        }
      });
    }
  });
}
