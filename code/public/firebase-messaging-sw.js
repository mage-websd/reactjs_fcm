importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js');


var firebaseConfig = {
    apiKey: "QAQWQWQ_212111212SSDF2323233DFSSG",
    authDomain: "soda-project-sa123.firebaseapp.com",
    databaseURL: "https://soda-project-sa123.firebaseio.com",
    projectId: "soda-project-sa123",
    storageBucket: "soda-project-sa123.appspot.com",
    messagingSenderId: "1212121212121212",
    appId: "1:1212121212121212:web:qwq121212441dsd122",
    measurementId: "G-QWQWQWWQW"
  };

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const messaging = firebase.messaging();

messaging.usePublicVapidKey("QWQWQWQWQWQW34354SDFFD4545FGG-RT56sd-gfgh554GHHHG674DFGDGDGDGGGD");

messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function(event) {
  console.log('soda notificationclick')
});