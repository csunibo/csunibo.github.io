var APP_PREFIX = 'CSunibo_';
var VERSION = 'version_02';
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
  '/csunibo.github.io/',
  '/index.html',
  '/programmazione/',
  '/architettura-degli-elaboratori/',
  '/logica-per-informatica/',
  '/algebra-e-geometria/',
  '/algoritmi-e-strutture-di-dati/',
  '/analisi-matematica/',
  '/calcolo-numerico/',
  '/ottimizzazione-combinatoria/',
  '/calcolo-delle-probabilita-e-statistica/',
  '/tecnologie-web/',
  '/linguaggi-di-programmazione/',
  '/reti-di-calcolatori/',
  '/sistemi-operativi/',
  '/basi-di-dati/',
  '/informatica-teorica/',
  '/ingegneria-del-software/',
  '/introduzione-apprendimento-automatico/',
  '/fondamenti-di-cibersecurity/',
  '/progetto-di-sistemi-virtuali/',
  '/fisica/',
  '/laboratorio-di-applicazioni-mobili/',
  '/storia-informatica-e-dei-dispositivi-di-calcolo/',
  '/strategie-aziendali/',
]

self.addEventListener('fetch', function(e) {
  console.log('fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(request) {
      if (request) {
        console.log('responding with cache : ' + e.request.url);
        return request
      } else {
        console.log('file is not cached, fetching : ' + e.request.url);
        return fetch(e.request)
      }
    })
  )
})

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      var cacheWhitelist = keyList.filter(function(key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map(function(key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i]);
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
