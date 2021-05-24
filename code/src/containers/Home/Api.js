import React from 'react';
import axios from 'axios'

export default class Api extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  handleClick = () => {
    console.log('POST');
    let url = "https://dev-keycloak.yamlive.vn/auth/realms/yamlive-realm/protocol/openid-connect/token";

    const params = new URLSearchParams();
    params.append('username', 'quocphuong401@gmail.com');
    params.append('password', '12345678');
    params.append('grant_type', 'password');
    params.append('client_id', 'yamlive');
    params.append('client_secret', '6f1b9cf6-89ab-448c-8ac0-4b577465bb8f');

    let body = {
      username: 'quocphuong401@gmail.com',
      password: '12345678',
      grant_type: 'password',
      client_id: 'yamlive',
      client_secret: '6f1b9cf6-89ab-448c-8ac0-4b577465bb8f',
    }
    let headers = {
      // "Accept": "application/json, text/plain, /",
      "Content-Type": "application/x-www-form-urlencoded",
      // "Referer": "http://localhost:4200",
      // "sec-ch-ua": 'Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90',
      // "sec-ch-ua-mobile": "?0",
      // "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
    }
    axios
            .post(url, params, { headers: headers })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })

  }

  handleClickapi = () => {
    console.log('POST');
    let url = "https://dev-keycloak.yamlive.vn/api/user/sign-up-by-email";
    const params = new URLSearchParams();
    params.append('email', 'soda1@gmail.com');
    params.append('password', '12345678999');
    params.append('confirmPassword', '12345678');


    let body = {
      "email": "soda2@gmail.com",
      "password": "12345678999",
      "confirmPassword": "12345678"
    }

    let headers = {
      "Content-Type": "application/json",
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

  render() {
    return (
      <div>
        <button className="js-push-button" onClick={this.handleClick}>
            api call POST
          </button>

          <button className="js-push-button" onClick={this.handleClickapi}>
            API post backend
          </button>
       </div>
    );
  }
}
