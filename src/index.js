import React from "react";
import { render } from "react-dom";
import App from "./App";

import { initializeApp, getApps } from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { UserProvider } from "./components/User";

if (!getApps().length) {
  initializeApp({
    apiKey: "AIzaSyCfHb4xd5K2BLjfnoR0ar7YRJABo8wPyFw",
    authDomain: "millo-do.firebaseapp.com",
    projectId: "millo-do",
    storageBucket: "millo-do.appspot.com",
    messagingSenderId: "600382027183",
    appId: "1:600382027183:web:476b4cea7548f3a799ab5a",
    measurementId: "G-QJDYVRK7VM",
  });
}
render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
