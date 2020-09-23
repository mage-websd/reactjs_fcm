import React from 'react';
import * as firebase from "firebase/app";
import "firebase/messaging";
import * as firebaseui from 'firebaseui'

import { messaging } from "../firebase/init";

export default class LoginFacebook extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  handleClick = () => {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // var provider = new firebase.auth.FacebookAuthProvider();
    console.log('click');
    console.log(ui);
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
        }
      ]
    });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log("login...", user)
        // ...
      } else {
        // User is signed out.
        // ...
        console.log("logout...", user)
      }
    });
  }

  handleClick2 = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('login: ', token, user)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  }
  render() {
    return (
      <div>
          <div id="firebaseui-auth-container">
          </div>
          <button className="js-push-button" onClick={this.handleClick2}>
            Login by Facebook
          </button>
      </div>
    );
  }
}
