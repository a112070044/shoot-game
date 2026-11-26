// 離線快取：
// - 網頁本身（index.html）網路優先：有網路時永遠拿最新版，沒網路才用快取
// - 其他檔案（音效、模型、圖示、three.js）先用快取、同時在背景更新，下次開啟就是新版
// 改了 sw.js 才需要調高版本號
const CACHE = 'b2-v7';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-180.png', 'sfx/sfx.mp3', 'sfx/drip.mp3', 'sfx/drone.mp3'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin, cdn = url.hostname === 'cdn.jsdelivr.net';
  if (!sameOrigin && !cdn) return;                                   // 連線用的中繼站、PeerJS 等不經過快取
  if (req.mode === 'navigate') {                                     // 網頁本身：網路優先（含遙控器的 ?c= 網址）
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); return r; })
      .catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {                 // 其他：先回快取，同時在背景更新
    const hit = await c.match(req);
    const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
