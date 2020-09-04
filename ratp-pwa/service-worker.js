'use strict';

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.loadModule('workbox-strategies');

const DATA_CACHE_NAME = 'fetch';
const CACHE_NAME = 'cachev1';

const {registerRoute} = workbox.routing;
const {CacheFirst} = workbox.strategies;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {precacheAndRoute} = workbox.precaching;


self.addEventListener('fetch', (evt) => {
  if (evt.request.url.includes('/schedules/')) {
    console.log('[Service Worker] Fetch (data)', evt.request.url);
    evt.respondWith(
        caches.open(DATA_CACHE_NAME).then((cache) => {
          return fetch(evt.request)
              .then((response) => {
                // If the response was good, clone it and store it in the cache.
                if (response.status === 200) {
                  cache.put(evt.request.url, response.clone());
                }
                return response;
              }).catch((err) => {
                // Network request failed, try to get it from the cache.
                return cache.match(evt.request);
              });
        }));
    return;
  }
});

const {strategies} = workbox;

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/schedules/')) {
    // Using the previously-initialized strategies will work as expected.
    const cacheFirst = new strategies.CacheFirst();
    event.respondWith(cacheFirst.handle({request: event.request}));
  }
});

precacheAndRoute([
  {url: '/index.html', revision: '383676' },
  {url: '/styles/inline.css', revision: null},
  {url: '/app.js', revision: null},
  {url: '/images/ic_add_white_24px.svg', revision: null},
  {url: '/images/ic_refresh_white_24px.svg', revision: null},
]);
