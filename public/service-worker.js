const CACHE_NAME = 'vercel-assets-cache';
const ASSETS_TO_CACHE = [
  '/_vercel/insights/script.js',
  '/_vercel/speed-insights/script.js',
];

// Install event: Cache the specified assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch event: Serve from cache or fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
