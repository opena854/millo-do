import React from "react";
import { render } from "react-dom";
import firebaseConfig from "./firebase.config.json"

import { initializeApp } from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import { UserProvider } from "./components/user";
import App from "./App";

const firebase = initializeApp(firebaseConfig);
render(
  <UserProvider firebase={firebase}>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
