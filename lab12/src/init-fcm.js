import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyBlZRP-63Tb2Fb1EtSyirpqU54QlmlE_84",
  authDomain: "jung-006.firebaseapp.com",
  projectId: "jung-006",
  storageBucket: "jung-006.appspot.com",
  messagingSenderId: "213507517856",
  appId: "1:213507517856:web:c52b3b80b833a044f988c5"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BCRz_vWGF3cESj6ZgPE0vj9v3QRpXy8rXz2y85B2rkSLf1Yux_hRIUiKrEenOHt1SYoCL4R46DKAmIRu7QNyIqY"
);

export { messaging };
