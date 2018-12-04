import { getVapiedKey, postSubscription, deleteSubscription } from 'api/api';

export const urlB64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

export const subscribePush = async () => {
  if (Notification.permission === 'denied') {
    alert('알림을 허용해주세요!');
    Notification.requestPermission();
    return;
  }
  console.log('Subscribe Start!');

  let convertedVapidKey;

  const registration = await navigator.serviceWorker.ready;
  if (!registration.pushManager) {
    alert('Push Unsupported');
    return;
  }

  const subscription = await registration.pushManager.getSubscription();
  if (subscription) {
    console.log('[Registed Subscription] : ', subscription);

    const tokenResponse = await postSubscription(subscription);
    try {
      console.log('[Registed] : ', tokenResponse);
      return;
    } catch (err) {
      console.error('[Post error] : ', err);
      return;
    }
  }

  const VPkey = await getVapiedKey();
  try {
    console.log('[Get key] : ', VPkey);
    convertedVapidKey = await urlB64ToUint8Array(VPkey.data.key);
    console.log('[Set incoding] : ', convertedVapidKey);
  } catch (err) {
    console.error('[Get Key Error!] : ', err);
  }

  const subscriptionToken = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: convertedVapidKey,
  });
  console.log('[New Subscription] : ', subscriptionToken);

  const tokenResponse = await postSubscription(subscriptionToken);
  try {
    console.log('[Registed] : ', tokenResponse);
  } catch (err) {
    console.error('[Post error] : ', err);
  }
};

export const unsubscribePush = async () => {
  const registration = await navigator.serviceWorker.ready;
  console.log('[registration] : ', registration);

  const subscription = await registration.pushManager.getSubscription();
  console.log('[subscription] : ', subscription);

  if (!subscription) return;
  subscription
    .unsubscribe()
    .then(() => deleteSubscription().then(() => console.log('delete subscription!!')),)
    .catch(err => console.error(err));
};
