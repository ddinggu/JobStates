self.addEventListener('activate', () => {
  console.log('Finally active. Ready to start serving content!');
});

self.addEventListener('push', (event) => {
  console.log('[Push] : ', event.data.text());

  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      // tag: data.title,
      data: data.params,
      requireInteraction: true,
      // badge: "./punch.png",
      icon: './punch.png',
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  const data = event.notification.data;
  event.notification.close();
  console.log(data);

  event.waitUntil(clients.openWindow(data.url === '/' ? '' : data.url));
});
