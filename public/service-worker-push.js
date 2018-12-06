const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  prefetch: `prefetch-cache-v${CACHE_VERSION}`,
};
// const DATA_URL = 'https://www.jobstate.xyz';

self.addEventListener('install', (event) => {
  const urlsToPrefetch = ['/', 'manifest.json', 'favicon.ico'];

  event.waitUntil(
    caches
      .open(CURRENT_CACHES.prefetch)
      .then(cache => cache.addAll(urlsToPrefetch))
      .catch(err => console.error(err)),
  );
  event.waitUntil(skipWaiting());
  console.log('[Service Worker] SW installed', event);
});

self.addEventListener('activate', (event) => {
  // delete unused cache stores
  const expectedCacheNames = Object.keys(CURRENT_CACHES).map(
    key => CURRENT_CACHES[key],
  );

  const openCache = async () => {
    const cacheNames = await caches.keys();

    try {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (expectedCacheNames.indexOf(cacheName) === -1) {
            console.log('[Service Worker] Deleted data cache!! ', cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    } catch (err) {
      throw err;
    }
  };

  event.waitUntil(openCache());
  console.log(
    '[Service Worker] Finally active. Ready to start serving content!',
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  if (event.request.url.indexOf('jobstate') > -1) {
    event.respondWith(
      caches.open(CURRENT_CACHES.prefetch).then(cache => fetch(event.request).then((response) => {
          cache.put(event.request.url, response.clone());
          console.log('[Service Worker] cached data!');
          return response;
        }),),
    );
  } else {
    event.respondWith(
      // try to get response from a cache.
      caches.match(event.request).then((response) => {
        if (response) {
          console.log('[Service Worker] Matched response', response);
        } else {
          console.log('[Service Worker] Fetched response', event.request);
        }

        return response || fetch(event.request);
      }),
    );
  }
});

self.addEventListener('push', (event) => {
  console.log('[Service Worker] [Push] : ', event.data.text());
  event.stopImmediatePropagation();

  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      tag: data.tag,
      data: data.params,
      requireInteraction: true,
      badge: './image/punch.png',
      vibrate: [200, 100, 200],
      icon: './image/punch.png',
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  const data = event.notification.data;
  event.notification.close();

  function isNotNull(client) {
    return client !== null;
  }

  const link = data.url || 'https://www.jobstate.xyz/';
  const matchClient = async () => {
    try {
      const clientList = await self.clients.matchAll({ type: 'window' });
      let currentClient = null;
      clientList.some((client) => {
        if (client.url === link && client.focus) {
          currentClient = client;
          return true;
        }
        return false;
      });
      if (isNotNull(currentClient)) {
        return currentClient.focus();
      }
      return self.clients.openWindow(link);
    } catch (err) {
      return console.error(err);
    }
  };

  event.waitUntil(matchClient());
});

self.addEventListener('notificationclose', (event) => {
  console.log('[Service Worker] notification close!!!');
});
