importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js');

self.workbox.skipWaiting();
self.workbox.clientsClaim();

// Insert custom code here

self.workbox.precaching.precacheAndRoute([]);