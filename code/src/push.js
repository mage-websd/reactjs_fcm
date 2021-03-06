import React from 'react';


class Push extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      "manifest": {
        "name": "Push notification",
        "gcm_sender_id": "845526573453",
      },
      "isDisabled": false,
    };

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
          .then(this.initialiseState());
    } else {
        console.warn('Service workers aren\'t supported in this browser.');
    }

  }

  initialiseState = () => {
    // Are Notifications supported in the service worker?
    if (!('showNotification\' in ServiceWorkerRegistration.prototype')) {
      console.warn('Notifications aren\'t supported.');

      return;
    }

    // Check the current Notification permission.
    // If its denied, it's a permanent block until the
    // user changes the permission
    if (Notification.permission === 'denied') {
      console.warn('The user has blocked notifications.');

      return;
    }

    // Check if push messaging is supported
    if (!('PushManager' in window)) {
      console.warn('Push messaging isn\'t supported.');

      return;
    }
    var that = this;
    // We need the service worker registration to check for a subscription
    navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
      // Do we already have a push message subscription?
      serviceWorkerRegistration.pushManager.getSubscription()
        .then(function(subscription) {
          // Enable any UI which subscribes / unsubscribes from
          // push messages.
          that.setState({isDisabled: false});

          if (!subscription) {
            // We aren't subscribed to push, so set UI
            // to allow the user to enable push
            return;
          }

          // Keep your server in sync with the latest subscriptionId
          that.sendSubscriptionToServer(subscription);

          // Set your UI to show they have subscribed for
          // push messages
          that.setState({isDisabled: true});
        })
        .catch(function(err) {
          console.warn('Error during getSubscription()', err);
        });
    });
  }

  subscribe = () => {
    var that = this;
    // Disable the button so it can't be changed while
    // we process the permission request
    that.setState({isDisabled: false});

    navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
      serviceWorkerRegistration.pushManager.subscribe()
        .then(function(subscription) {
          // The subscription was successful
          that.setState({isDisabled: true});
          that.setState({isDisabled: false});
          // TODO: Send the subscription.endpoint to your server
          // and save it to send a push message at a later date
          return that.sendSubscriptionToServer(subscription);
        })
        .catch(function(e) {
          if (Notification.permission === 'denied') {
            // The user denied the notification permission which
            // means we failed to subscribe and the user will need
            // to manually change the notification permission to
            // subscribe to push messages
            console.warn('Permission for Notifications was denied');
            that.setState({isDisabled: true});
          } else {
            // A problem occurred with the subscription; common reasons
            // include network errors, and lacking gcm_sender_id and/or
            // gcm_user_visible_only in the manifest.
            console.error('Unable to subscribe to push.', e);
            that.setState({isDisabled: false});
          }
        });
    });
  }

  sendSubscriptionToServer = (subscription) => {
      console(subscription)
  }

  handleClick = () => {
    console.log('The link was clicked.');
    if (this.state.isPushEnabled) {
        this.unsubscribe();
    } else {
        this.subscribe();
    }
  }


  render() {
    return (
      <div>
          <button className="js-push-button" onClick={this.handleClick} disabled={this.state.isDisabled}>
            Enable Push Messages
          </button>

      </div>
    );
  }
}

export default Push;
