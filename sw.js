// Service worker for ORIS PWA
// Minimal implementation — just enough for Android installability.
// No caching strategy needed since all content is local files.
const CACHE_NAME = 'oris-v1';

// Only the app shell — 16px/32px icons are embedded in the HTML
// and don't need to be cached separately.
const SHELL = [
    './index.html',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/apple-touch-icon.png',
];

self.addEventListener('install', e =>
{
    // Cache the app shell so it works offline.
    // Promise.allSettled lets individual resources fail without
    // breaking the whole install — important for resilience.
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            Promise.allSettled(SHELL.map(url => cache.add(url)))
        )
    );
    self.skipWaiting();
});

self.addEventListener('activate', e =>
{
    // Remove any old caches from previous versions
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', e =>
{
    // Serve shell from cache, fall back to network
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request))
    );
});
