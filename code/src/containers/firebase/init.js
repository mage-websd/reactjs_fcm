import * as firebase from "firebase/app";
import "firebase/messaging";

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
const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey("BMfQXs0mzekKf7PBsWWnj1EbmKAPX4jHQemyXzulR1Oi4_H_-SEEgHEbKACA_FE-rGRFctuWyi108lY4vXOvBBg");
// messaging.usePublicVapidKey("QWQWQWQWQWQW34354SDFFD4545FGG-RT56sd-gfgh554GHHHG674DFGDGDGDGGGD");
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