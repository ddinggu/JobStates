self.addEventListener('activate', () => {
  console.log('Activate!!!!!');
});

self.addEventListener('push', (event) => {
  console.log('[Push] : ', event.data.json());
  event.stopImmediatePropagation();

  const data = event.data.json();

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      tag: data.tag,
      data: data.params,
      // requireInteraction: true,
      icon: './punch.png',
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  const data = event.notification.data;
  // console.log('get Data : ', data);
  console.log('action!! : ', event.action);

  event.notification.close();
  event.waitUntil(clients.openWindow(data.url === '/' ? '' : data.url));
});

self.addEventListener('notificationclose', (event) => {
  console.log('notification close!!!');
  // log send to server
});
