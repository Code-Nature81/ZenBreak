const CACHE_NAME = 'zenbreak-cache-v1';
const urlsToCache = [
  'index.html',
  'choix-duree.html',
  'choix-son.html',
  'style.css',
  'logo.png',
  'sounds/RAINConc_Pluie d ete sur terrasse (ID 1019)_LS',
  'sounds/AMBBird_Oiseaux du soir (ID 1859)_LS.mp33',
  'sounds/AMBUndr_Grotte 2 (ID 2136)_LS.mp3',
  'sounds/ANMLInsc_Cigales (ID 3002)_LS.mp3',
  'sounds/gong.mp3',
  'sounds/notification.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
