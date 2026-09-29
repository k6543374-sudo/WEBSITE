// Prerenders every route after `vite build` so crawlers see real HTML
// instead of an empty <div id="root"></div>.
// Runs automatically as part of `npm run build` (see package.json).
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

const DIST = fileURLToPath(new URL('../dist', import.meta.url));

const ROUTES = [
  '/',
  '/about',
  '/products',
  '/products/zee-ai',
  '/technology',
  '/projects',
  '/creator',
  '/documentation',
  '/contact',
  '/privacy',
  '/terms',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
};

// Tiny static server that serves dist/ exactly like Vercel does:
// real files first, clean /route -> /route/index.html, SPA fallback to /index.html.
const server = createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = join(DIST, path);
    if (path.endsWith('/')) file = join(file, 'index.html');
    else if (existsSync(join(file, 'index.html'))) file = join(file, 'index.html');
    else if (!existsSync(file)) file = join(DIST, 'index.html');
    const data = await readFile(file);
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('not found');
  }
});

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const port = server.address().port;
console.log(`prerender: serving dist/ on http://127.0.0.1:${port}`);

const browser = await puppeteer.launch({
  headless: 'shell',
  args: chromium.args,
  executablePath: await chromium.executablePath(),
});

try {
  const page = await browser.newPage();
  for (const route of ROUTES) {
    await page.goto(`http://127.0.0.1:${port}${route}`, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    // Wait until React has rendered real content, then give the SEO
    // component's useEffect (title, meta, canonical) a moment to run.
    await page.waitForSelector('#root *', { timeout: 30000 });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let html = await page.content();
    if (!html.toLowerCase().startsWith('<!doctype')) html = `<!doctype html>\n${html}`;

    const out = route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html');
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, html);
    const title = await page.title();
    console.log(`prerender: ${route} -> ${out} (title: ${title})`);
  }
} finally {
  await browser.close();
  server.close();
}
console.log('prerender: done');
