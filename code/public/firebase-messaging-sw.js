importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js');


var firebaseConfig = {
    apiKey: "AIzaSyC6DSw4IoX-yMnEtEVrQpsAjuw2msGnpc8",
    authDomain: "doanh-nghiep-tthue.firebaseapp.com",
    databaseURL: "https://doanh-nghiep-tthue.firebaseio.com",
    projectId: "doanh-nghiep-tthue",
    storageBucket: "doanh-nghiep-tthue.appspot.com",
    messagingSenderId: "441126068786",
    appId: "1:441126068786:web:3c80e6e3fdd2a9b6ce122b",
    measurementId: "G-0LXJNP7RWS"
  };

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BMfQXs0mzekKf7PBsWWnj1EbmKAPX4jHQemyXzulR1Oi4_H_-SEEgHEbKACA_FE-rGRFctuWyi108lY4vXOvBBg");

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