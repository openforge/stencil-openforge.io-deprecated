importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

self.workbox.skipWaiting();
self.workbox.clientsClaim();

self.workbox.precaching.precacheAndRoute([]);
