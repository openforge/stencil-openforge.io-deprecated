importScripts('workbox-v3.2.0/workbox-sw.js');

self.workbox.skipWaiting();
self.workbox.clientsClaim();

// Insert custom code here

self.workbox.precaching.precacheAndRoute([]);
