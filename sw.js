const CACHE_NAME = 'examli-pwa-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700;800&display=swap'
];

// Install Service Worker and cache core static assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate management & clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network First, Falling Back to Cache Strategy for updates
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(response => {
      // Dynamic caching for new blog posts when user visits them
      if (e.request.method === 'GET' && response.status === 200) {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, responseClone);
        });
      }
      return response;
    }).catch(() => caches.match(e.request))
  );
});
