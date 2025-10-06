const CACHE_NAME = "sitzplan-cache-v1";
const urlsToCache = [
  "./",
  "./final.html",
  "./plan.png",
  "./manifest.json"
];

// Installations-Event: Cache aufbauen
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch-Event: Daten aus Cache laden, wenn offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
