import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDTajPoyCXTgFzycdI2uqGbtYXpVzgjCEM",
  authDomain: "sec01-80d54.firebaseapp.com",
  projectId: "sec01-80d54",
  storageBucket: "sec01-80d54.appspot.com",
  messagingSenderId: "9262055690",
  appId: "1:9262055690:web:d9af425c8ae6fb64d23af3",
  measurementId: "G-W0XVZX4J2R"
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
  "BKrvWM-6voBzsKyMUz8oaOhiKmlRcG9R8jrtohUFspCnJKX82WM3CDjFDDhIx1_MqHAfk0j1wOQpL4pIID9o9Mo"
);

export { messaging };
