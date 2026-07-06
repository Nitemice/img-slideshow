// Service worker for ORIS PWA
// Minimal implementation — just enough for Android installability.
// No caching strategy needed since all content is local files.
const CACHE_NAME = 'oris-v1';
const SHELL = ['./index.html', './manifest.json'];

self.addEventListener('install', e =>
{
    // Cache the app shell so it works offline
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL))
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