const CACHE_NAME = 'zenbreak-cache-v1';
const urlsToCache = [
  'index.html',
  'choix-duree.html',
  'choix-son.html',
  'style.css',
  'logo.png',
  'sounds/RAINConc_Pluie d ete sur terrasse (ID 1019)_LS.mp3',
  'sounds/AMBBird_Oiseaux du soir (ID 1859)_LS.mp3',
  'sounds/AMBUndr_Grotte 2 (ID 2136)_LS.mp3',
  'sounds/ANMLInsc_Cigales (ID 3002)_LS.mp3',
  'sounds/AMBBird_Campagne (ID 0097)_LS.mp3',
  'sounds/AMBBird_Reveil des oiseaux 3 (ID 0999)_LS.mp3',
  'sounds/AMBForst_Foret (ID 0100)_LS.mp3',
  'sounds/AMBForst_Foret et ruisseau 1 (ID 2713)_LS.mp3',
  'sounds/AMBRurl_Campagne la nuit 4 (ID 1880)_LS.mp3',
  'sounds/AMBSea_Mer vagues moyennes et mouettes (ID 0267)_LS.mp3',
  'sounds/FEETHmn_Pas dans les feuilles (ID 0137)_LS.mp3',
  'sounds/STORM_Pluie et orage 2 (ID 0740)_LS.mp3',
  'sounds/sounds/THUN_Tonnerre 4 (ID 3115)_LS.mp3',
  'sounds/WATRWave_Mer vagues (ID 0266)_LS.mp3',
  'sounds/WINDDsgn_Vent (ID 0595)_LS.mp3',
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
