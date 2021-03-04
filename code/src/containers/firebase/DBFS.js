import React from 'react';
import { firebaseInit } from "./init";

import { FirestoreProvider } from 'react-firestore';

export default class DBFS extends React.Component {

    constructor(props) {
        super(props);
        this.db = firebaseInit.firestore();
    }
  handleClick = () => {
    this.db.collection("theme").doc('zzz_sample').get().then((doc) => {
        let id = doc.id;
        let data = doc.data();
        console.log('theme', id, data);
    });
  }
  handleClickAdd = () => {
    this.db.collection("theme").doc("zzz_sample").set({
        'date_last': '2020-12-12',
        'title': 'xxxx',
        'week': 1,
    }).then((response) => {
        console.log("theme add done", response);
    });
  }

  handleClickQuote = () => {
    this.db.collection("quote").doc('117dd3987b1b46c29456').get().then((doc) => {
        let id = doc.id;
        let data = doc.data();
        console.log('Quote', id, data);
    });
  }
  handleClickAddQuote = () => {
    let data = {
        'author_name': 'x1',
        'author_kid': 1,
        'author_job': 'x1',
        'author_text': 'nothing is forever x',
        'url': 'https://www.google.com/',
        'like_count': 1,
        'order': 2,
        'theme': null,
        'week': 1,
        'date': '2001-01-01',
        'date_last': '2000-05-05'
    };
    this.db.collection("quote").doc("117dd3987b1b46c29456").update({
      'like_count': 5,
    }).then((response) => {
        console.log("Quote add done", response);
    });
  }

  handleClickEmail = () => {
    this.db.collection("email_sub").doc('x1').get().then((doc) => {
        let id = doc.id;
        let data = doc.data();
        console.log('Sub', id, data);
    });
  }
  handleClickAddEmail = () => {
    this.db.collection("email_sub").doc("x2").set({
        'email': 'x2',
    }).then((response) => {
        console.log("Sub add done", response);
    });
  }

  render() {
    return (
      <div>
      <div>
        <button className="js-push-button" onClick={this.handleClick}>
            File store get theme
          </button>

          <button className="js-push-button" onClick={this.handleClickAdd}>
            add theme
          </button>
       </div>
       <div>
       <button className="js-push-button" onClick={this.handleClickQuote}>
            Quote get
          </button>

          <button className="js-push-button" onClick={this.handleClickAddQuote}>
            Quote add
          </button>
       </div>

       <div>
       <button className="js-push-button" onClick={this.handleClickEmail}>
            Sub get
          </button>

          <button className="js-push-button" onClick={this.handleClickAddEmail}>
            Sub add
          </button>
       </div>

       </div>
    );
  }

  fetchJsFromCDN = (src, externals = []) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.setAttribute('src', src)
        script.addEventListener('load', () => {
          resolve(externals.map(key => {
            const ext = window[key]
            typeof ext === 'undefined' && console.warn(`No external named '${key}' in window`)
            return ext
          }))
        })
        script.addEventListener('error', reject)
        document.body.appendChild(script)
      })
    }
}

/**
rule firebase

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /email_sub/{email_sub} {
      allow create: if true;
    }
    match /quote/{quote} {
      allow update: if (request.resource.data.diff(resource.data).affectedKeys()
        .hasOnly(['like_count']));
    }
    match /{document=**} {
      allow read: if true;
      allow write: if false;
      
      
    }
  }
}


*/