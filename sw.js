importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js');

// your custom service worker code
self.workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
);

self.workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources',
    }),
);

workbox.routing.registerRoute(
  new RegExp('/api/'),
  workbox.strategies.staleWhileRevalidate({
    plugins: [
      new workbox.broadcastUpdate.Plugin('api-updates')
    ]
  })
);

self.addEventListener('message', (event) => {
  if (!event.data){
    return;
  }

  switch (event.data) {
    case 'skipWaiting':
      self.skipWaiting();
      break;
    default:
      // NOOP
      break;
  }
});

self.addEventListener('install', (event) => {
  self.skipWaiting();
})

self.workbox.precaching.precacheAndRoute([]);
