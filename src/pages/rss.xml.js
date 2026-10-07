import { getCollection } from 'astro:content';
import { SITE } from '../config';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET(context) {
  const site = (context.site ?? new URL('http://localhost:4321')).href.replace(/\/$/, '');
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const items = posts
    .map(
      (p) => `<item><title>${esc(p.data.title)}</title><link>${site}/posts/${p.id}/</link><guid>${site}/posts/${p.id}/</guid><pubDate>${p.data.date.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`
    )
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(SITE.title)}</title><link>${site}/</link><description>${esc(SITE.description)}</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
