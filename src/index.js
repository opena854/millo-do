import React, { createContext } from "react";
import { render } from "react-dom";
import App from "./App";

import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCfHb4xd5K2BLjfnoR0ar7YRJABo8wPyFw",
    authDomain: "millo-do.firebaseapp.com",
    projectId: "millo-do",
    storageBucket: "millo-do.appspot.com",
    messagingSenderId: "600382027183",
    appId: "1:600382027183:web:476b4cea7548f3a799ab5a",
    measurementId: "G-QJDYVRK7VM",
  });
}

export const FirebaseContext = createContext(firebase);

render(
  <FirebaseContext.Provider value={firebase}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
