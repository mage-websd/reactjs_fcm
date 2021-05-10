import React from 'react';
import { firebaseInit } from "./init";
import { FirestoreProvider } from 'react-firestore';
import Layout from "../../components/Layout";

const DBFS = () => {
    const db = firebaseInit.firestore();
    // constructor(props) {
    //     super(props);
    //     db = ;
    // }
  function handleClick(e) {
    e.preventDefault();
    db.collection("theme").doc('zzz_sample').get().then((doc) => {
        let id = doc.id;
        let data = doc.data();
        console.log('theme', id, data);
    });
  }
  function handleClickAdd() {
    db.collection("theme").doc("zzz_sample").set({
        'date_last': '2020-12-12',
        'title': 'xxxx',
        'week': 1,
    }).then((response) => {
        console.log("theme add done", response);
    });
  }

  function handleClickQuote() {
    db.collection("quote").limit(3).get().then((docs) => {
        docs.forEach(function(doc) {
          let id = doc.id;
          let data = doc.data();
          console.log('Quote', id, data);
        });
        
    });
  }
  function handleClickAddQuote () {
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
    db.collection("quote").doc("117dd3987b1b46c29456").update({
      'like_count': 5,
    }).then((response) => {
        console.log("Quote add done", response);
    });
  }

  function handleClickEmail() {
    db.collection("email_sub").doc('x1').get().then((doc) => {
        let id = doc.id;
        let data = doc.data();
        console.log('Sub', id, data);
    });
  }
  function handleClickAddEmail() {
    db.collection("email_sub").doc("x2").set({
        'email': 'x2',
    }).then((response) => {
        console.log("Sub add done", response);
    });
  }

   function fetchJsFromCDN(src, externals = []) {
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

    return (
      <Layout>
      <div>
      <div>
        <button className="js-push-button" onClick={handleClick}>
            File store get theme
          </button>

          <button className="js-push-button" onClick={handleClickAdd}>
            add theme
          </button>
       </div>
       <div>
       <button className="js-push-button" onClick={handleClickQuote}>
            Quote get
          </button>

          <button className="js-push-button" onClick={handleClickAddQuote}>
            Quote add
          </button>
       </div>

       <div>
       <button className="js-push-button" onClick={handleClickEmail}>
            Sub get
          </button>

          <button className="js-push-button" onClick={handleClickAddEmail}>
            Sub add
          </button>
       </div>

       </div>

       </Layout>
    );
}

export default DBFS;
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