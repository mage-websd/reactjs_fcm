import * as firebase from "firebase/app";
import "firebase/messaging";

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
const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey("QWQWQWQWQWQW34354SDFFD4545FGG-RT56sd-gfgh554GHHHG674DFGDGDGDGGGD");
export { messaging };

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