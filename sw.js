var APP_PREFIX = "CSunibo_";
var VERSION = "version_01";
var CACHE_NAME = APP_PREFIX + VERSION;
var URLS = [
  "/csunibo.github.io/",
  "/csunibo.github.io/index.html",
  "/csunibo.github.io/programmazione/",
  "/csunibo.github.io/architettura-degli-elaborati/",
  "/csunibo.github.io/logica-per-informatica/",
  "/csunibo.github.io/algebra-e-geometria/",
  "/csunibo.github.io/algoritmi-e-strutture-di-dati/",
  "/csunibo.github.io/analisi-matematica/",
  "/csunibo.github.io/calcolo-numerico/",
  "/csunibo.github.io/ottimizzazione-combinatoria/",
  "/csunibo.github.io/calcolo-delle-probabilita-e-statistica/",
  "/csunibo.github.io/tecnologie-web/",
  "/csunibo.github.io/linguaggi-di-programmazione/",
  "/csunibo.github.io/reti-di-calcolatori/",
  "/csunibo.github.io/sistemi-operativi/",
  "/csunibo.github.io/basi-di-dati/",
  "/csunibo.github.io/informatica-teorica/",
  "/csunibo.github.io/ingegneria-del-software/",
  "/csunibo.github.io/introduzione-apprendimento-automatico/",
  "/csunibo.github.io/fondamenti-di-cibersecurity/",
  "/csunibo.github.io/progetto-di-sistemi-virtuali/",
  "/csunibo.github.io/fisica/",
  "/csunibo.github.io/laboratorio-di-applicazioni-mobili/",
  "/csunibo.github.io/storia-informatica-e-dei-dispositivi-di-calcolo/",
  "/csunibo.github.io/strategie-aziendali/",
];

self.addEventListener("fetch", function (e) {
  console.log("fetch request : " + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        console.log("responding with cache : " + e.request.url);
        return request;
      } else {
        console.log("file is not cached, fetching : " + e.request.url);
        return fetch(e.request);
      }
    })
  );
});

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("installing cache : " + CACHE_NAME);
      return cache.addAll(URLS);
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheWhitelist.indexOf(key) === -1) {
            console.log("deleting cache : " + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});
