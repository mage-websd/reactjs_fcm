import React from 'react';
import { messaging } from "../firebase/init";
import axios from 'axios'

export default class Btn extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  handleClick = () => {
    console.log('click');
    let url = "https://dev-keycloak.yamlive.vn/auth/realms/yamlive-realm/protocol/openid-connect/token";
    let body = {
      grant_type: 'password',
      client_id: 'springboot-microservice',
      client_secret: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx',
      username: 'employee1',
      password: 'mypassword',
    }
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    axios
            .post(url, body, { headers: headers })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })

  }

  handleClick2 = () => {
    console.log('click2');
    let url = "https://dev-keycloak.yamlive.vn/auth/realms/yamlive-realm/protocol/openid-connect/token";
    let body = {

    }
    let headers = {

    }
    axios
            .get(url, { headers: headers })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })

  }

  async componentDidMount() {
    var that = this;
      messaging.requestPermission()
        .then(async function() {
                messaging.getToken().then((currentToken) => {
                    that.sendTokenToServer(currentToken);
                }).catch((err) => {
                  console.log('An error occurred while retrieving token. ', err);
                  console.log('Error retrieving Instance ID token. ', err);
                  that.setTokenSentToServer(false);
                });;
        })
        .catch(function(err) {
          console.log("Unable to get permission to notify.", err);
        });
      navigator.serviceWorker.addEventListener("message", (message) => {
        
      });

      messaging.onMessage((payload) => that.receivedMessage(payload));
    }

  sendTokenToServer = (token) => {
    console.log(1111, token);
  }

  setTokenSentToServer = (token) => {
    console.log(2222, 'ERROR', token);
    return false;
  }

  receivedMessage = (payload) => {
    console.log('data: ', payload.data);
    console.log('noti: ', payload.notification);
  }
  render() {
    return (
      <div>
        <button className="js-push-button" onClick={this.handleClick}>
            api call POST
          </button>

          <button className="js-push-button" onClick={this.handleClick2}>
            API get
          </button>
       </div>
    );
  }
}
