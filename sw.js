importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

self.workbox.skipWaiting();
self.workbox.clientsClaim();

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

// addEventListener('fetch', fetchEvent => {
//   console.log('fetching', fetchEvent.request);
//   fetchEvent.respondWith(caches.match(fetchEvent.request)
//     .then(async cachedResponse => {
//       if (cachedResponse) return cachedResponse;
//       const response = await fetch(fetchEvent.request);
//       caches.open('whatever').then(cache => cache.put(
//         fetchEvent.request, response
//       ));
//       return response.clone();
//     })
//   );
// });

self.addEventListener('message', (event) => {
  if (!event.data){
    console.log("no event data");
    return;
  }

  switch (event.data) {
    case 'skipWaiting':
    console.log("event data detected");
      self.skipWaiting();
      break;
    default:
      // NOOP
      break;
  }
});

self.workbox.precaching.precacheAndRoute([]);
