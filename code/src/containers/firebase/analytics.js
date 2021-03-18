import React from 'react';
import { firebaseInit, analytics } from "./init";
import "@firebase/auth";

import { FirestoreProvider } from 'react-firestore';

export default class Analytics extends React.Component {

    constructor(props) {
        super(props);
        this.analytics = analytics;
    }
    handleClickLeft = () => {
    try {
      let r = analytics.logEvent('click');
      console.log('r:', r);
    } catch (e) {
      console.log('eeee', e);
    }
    
  }

  handleClickLeft = () => {
    let i = 0;
    let inCustom = setInterval(function(){
      console.log('swipper' + i);
      analytics.logEvent('swipper', {left: i * 7});
      i++;
      if (i >= 10) {
        clearInterval(inCustom);
      }
    }, 2000);
  }
  handleClickRight = () => {
    let i = 0;
    let inCustom = setInterval(function(){
      console.log('swipper_right' + i);
      analytics.logEvent('swipper_right', {right: i * 17});
      i++;
      if (i >= 10) {
        clearInterval(inCustom);
      }
    }, 2000);
  }

  handleClickLike = () => {
    try {
      let i = 0;
        let inCustom = setInterval(function(){
          console.log('custom_' + i);
            analytics.logEvent('custom_' + i, {i: i * 27});
            i++;
            if (i >= 10) {
              clearInterval(inCustom);
            }
         }, 2000);
    } catch (e) {
      console.log('eeee', e);
    }
  }


  render() {
    return (
      <div>
        <div>
          <button className="js-push-button" onClick={this.handleClick}>
            event click
          </button>

          <button className="js-push-button" onClick={this.handleClickLeft}>
            event swipper left
          </button>

          <button className="js-push-button" onClick={this.handleClickRight}>
            event swipper right
          </button>
          <button className="js-push-button" onClick={this.handleClickLike}>
            like
          </button>
        </div>
       </div>
    );
  }
}
