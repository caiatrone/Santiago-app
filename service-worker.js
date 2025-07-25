self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("santiago-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./manifest.json",
        "./app.js",
        "./icon-192.png",
        "./icon-512.png",
        "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
        "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
        "https://cdn.jsdelivr.net/npm/chart.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});