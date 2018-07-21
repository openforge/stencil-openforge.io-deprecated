importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

self.workbox.skipWaiting();
self.workbox.clientsClaim();

// your custom service worker code

self.workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  })
);

self.workbox.routing.registerRoute(
  new RegExp('(http|https)://*'),
  workbox.strategies.cacheFirst({
    cacheName: 'file-cache',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  })
);

self.workbox.precaching.precacheAndRoute([]);
