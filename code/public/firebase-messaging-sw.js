importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js');


const firebaseConfig = {
    apiKey: "AIzaSyAmV_2PPi91wWgqHTbz3jUllb51YtptaEw",
    authDomain: "soda-project-ec980.firebaseapp.com",
    databaseURL: "https://soda-project-ec980.firebaseio.com",
    projectId: "soda-project-ec980",
    storageBucket: "soda-project-ec980.appspot.com",
    messagingSenderId: "922024481511",
    appId: "1:922024481511:web:fcee24e11b400cefe90842",
    measurementId: "G-0QBRRR1P9E"
  };



firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const messaging = firebase.messaging();
messaging.usePublicVapidKey("   AAAA1qzxEuc:APA91bFiqKFOEeAktSjpNsuqGU_pysZqTPeKpUp0icqYEqhyF-hgJygBr5I08Jo8rLkmE6dV0W8EHJNFotdpVQHZ7Sy4jh8ueAiY09iJ-qV57_JJL5OEbq1jlhXfxvRboFYxKmOJwYf2");

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