import React from 'react';
import { messaging } from "../firebase/init";

export default class Btn extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  handleClick = () => {
    console.log('click');

    fetch("http://10.10.10.94:8000/api/news/detail?id=1")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )

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
            api call
          </button>
       </div>
    );
  }
}
