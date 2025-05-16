const CACHE_NAME = 'zenbreak-cache-v1';
const urlsToCache = [
  '/ZenBreak/index.html',
  '/ZenBreak/choix-duree.html',
  '/ZenBreak/choix-son.html',
  '/ZenBreak/style.css',
  '/ZenBreak/logo.png',
  '/ZenBreak/manifest.json',
  '/ZenBreak/121805-724719819_tiny.mp4',
  '/ZenBreak/sounds/RAINConc_Pluie d ete sur terrasse (ID 1019)_LS.mp3',
  '/ZenBreak/sounds/AMBBird_Oiseaux du soir (ID 1859)_LS.mp3',
  '/ZenBreak/sounds/AMBUndr_Grotte 2 (ID 2136)_LS.mp3',
  '/ZenBreak/sounds/ANMLInsc_Cigales (ID 3002)_LS.mp3',
  '/ZenBreak/sounds/AMBBird_Campagne (ID 0097)_LS.mp3',
  '/ZenBreak/sounds/AMBBird_Reveil des oiseaux 3 (ID 0999)_LS.mp3',
  '/ZenBreak/sounds/AMBForst_Foret (ID 0100)_LS.mp3',
  '/ZenBreak/sounds/AMBForst_Foret et ruisseau 1 (ID 2713)_LS.mp3',
  '/ZenBreak/sounds/AMBRurl_Campagne la nuit 4 (ID 1880)_LS.mp3',
  '/ZenBreak/sounds/AMBSea_Mer vagues moyennes et mouettes (ID 0267)_LS.mp3',
  '/ZenBreak/sounds/FEETHmn_Pas dans les feuilles (ID 0137)_LS.mp3',
  '/ZenBreak/sounds/STORM_Pluie et orage 2 (ID 0740)_LS.mp3',
  '/ZenBreak/sounds/THUN_Tonnerre 4 (ID 3115)_LS.mp3',
  '/ZenBreak/sounds/WATRWave_Mer vagues (ID 0266)_LS.mp3',
  '/ZenBreak/sounds/WINDDsgn_Vent (ID 0595)_LS.mp3',
  '/ZenBreak/sounds/gong.mp3',
  '/ZenBreak/sounds/notification.mp3'
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
