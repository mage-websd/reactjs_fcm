import firebase from '@firebase/app';
import '@firebase/firestore';
import "@firebase/messaging";

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
const firebaseInit = firebase.initializeApp(firebaseConfig);
const messaging = firebaseInit.messaging();
messaging.usePublicVapidKey("   AAAA1qzxEuc:APA91bFiqKFOEeAktSjpNsuqGU_pysZqTPeKpUp0icqYEqhyF-hgJygBr5I08Jo8rLkmE6dV0W8EHJNFotdpVQHZ7Sy4jh8ueAiY09iJ-qV57_JJL5OEbq1jlhXfxvRboFYxKmOJwYf2");

export { firebaseInit, firebaseConfig, messaging };

/**
url: https://fcm.googleapis.com/fcm/send
header:
{
	Content-Type: application/json
	Authorization: key=AAAApgm1QX0:APA91bE7uE6ZIGxdaO1NsnODdOxg8CylpwKOLDeU8ky7bRXaI5KuOlyO7QON-OR8FzjL-mdLTxfd2ONDj8n-OEGV86vqP2Vcpcq1_3sOCUO3p_dL-TtDJYMOhmnTdSdWHlMOyJiAxZQY
}
body:
{
    "to": "fmoa6nLF7R-QVK2fITJMC6:APA91bEJQIYoJY4GRSl0uVWq8DqnL-ARPRcKDEJ5elErp1yPfXaE4gK-lnSahroYM-QYIwN-61UcvhJFB2EfK9pZ1OtCNnFU3u2Rx8LxvdoNqB_O3wMFFBROK9RnXn88IRQ64QU6jGns",
    "collapse_key": "type_a",
    "notification": {
        "body": "Body of Your Notification",
        "title": "Title of Your Notification"
    },
    "data": {
        "body": "Body of Your Notification in Data",
        "title": "Title of Your Notification in Title",
        "key_1": "Value for key_1",
        "key_2": "Value for key_2"
    }
}

*/