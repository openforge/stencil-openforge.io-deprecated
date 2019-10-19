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

self.workbox.precaching.precacheAndRoute([
  {
    "url": "index-org.html",
    "revision": "58ee7eb623b640fe38cbb0c7b815e4ce"
  },
  {
    "url": "index.html",
    "revision": "5235998c60992dac78f7fdc47102f262"
  },
  {
    "url": "assets/fonts/Muli.css",
    "revision": "2335eade96624f3e9c05067e376e67e1"
  },
  {
    "url": "assets/fonts/Roboto.css",
    "revision": "9a56c950293dfcbe67be7b54d5cabe6c"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-02ad23a6.js"
  },
  {
    "url": "build/p-0wwsh4gz.entry.js"
  },
  {
    "url": "build/p-2b9ee574.js"
  },
  {
    "url": "build/p-2ycawxh1.entry.js"
  },
  {
    "url": "build/p-5mhb0mvs.entry.js"
  },
  {
    "url": "build/p-6zv46rzq.entry.js"
  },
  {
    "url": "build/p-70i09rii.entry.js"
  },
  {
    "url": "build/p-7fu1tgkq.entry.js"
  },
  {
    "url": "build/p-7qmwnikw.entry.js"
  },
  {
    "url": "build/p-888ebcbb.js"
  },
  {
    "url": "build/p-9gcs6poz.entry.js"
  },
  {
    "url": "build/p-9k9wnunf.entry.js"
  },
  {
    "url": "build/p-acx5d4fq.entry.js"
  },
  {
    "url": "build/p-bkzx4wut.entry.js"
  },
  {
    "url": "build/p-cbaf9c4f.js"
  },
  {
    "url": "build/p-cda6b726.js"
  },
  {
    "url": "build/p-codciu9e.entry.js"
  },
  {
    "url": "build/p-d0882b30.js"
  },
  {
    "url": "build/p-d8631f0b.js"
  },
  {
    "url": "build/p-ecizmpcf.entry.js"
  },
  {
    "url": "build/p-ed8f0358.js"
  },
  {
    "url": "build/p-fh0hi0wi.entry.js"
  },
  {
    "url": "build/p-fm0wrk8g.entry.js"
  },
  {
    "url": "build/p-gslpxr6u.entry.js"
  },
  {
    "url": "build/p-ipfrwi5b.entry.js"
  },
  {
    "url": "build/p-irjvpg4d.entry.js"
  },
  {
    "url": "build/p-kal3tmmv.entry.js"
  },
  {
    "url": "build/p-kt2ebooa.entry.js"
  },
  {
    "url": "build/p-lprmylec.entry.js"
  },
  {
    "url": "build/p-m10jqtuo.entry.js"
  },
  {
    "url": "build/p-nhs0fvbh.entry.js"
  },
  {
    "url": "build/p-o9q3viyq.entry.js"
  },
  {
    "url": "build/p-oecwihxq.entry.js"
  },
  {
    "url": "build/p-pvuxnkqf.entry.js"
  },
  {
    "url": "build/p-rj09qjrf.js"
  },
  {
    "url": "build/p-snfdjg64.entry.js"
  },
  {
    "url": "build/p-svknnyks.entry.js"
  },
  {
    "url": "build/p-tmgxqnh7.entry.js"
  },
  {
    "url": "build/p-tnfuorvw.entry.js"
  },
  {
    "url": "build/p-vwnloxro.entry.js"
  },
  {
    "url": "build/p-y382ewoz.entry.js"
  },
  {
    "url": "build/p-zbjm43mm.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "685923462e7f826e66c72d5e88e6ac05"
  }
]);
