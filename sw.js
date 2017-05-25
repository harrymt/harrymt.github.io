
let version = '0.02';

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('harrymt').then(cache => {
      return cache.addAll([
        `/`,
        `/blog?timestamp=${timeStamp}`,
        `/index.html?timestamp=${timeStamp}`,
        `/about.html?timestamp=${timeStamp}`,
        `/css/style.css?timestamp=${timeStamp}`,
        `/js/main.min.js?timestamp=${timeStamp}`
      ])
      .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
