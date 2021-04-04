import React, { useEffect } from "react";
import { Button } from "@material-ui/core";

import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


const App = () => {
  useEffect( () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCfHb4xd5K2BLjfnoR0ar7YRJABo8wPyFw",
        authDomain: "millo-do.firebaseapp.com",
        projectId: "millo-do",
        storageBucket: "millo-do.appspot.com",
        messagingSenderId: "600382027183",
        appId: "1:600382027183:web:476b4cea7548f3a799ab5a",
        measurementId: "G-QJDYVRK7VM",
      }, 'millo');    
    }
  }, [])
  return <Button variant="contained" color="primary" >Hola, Lala</Button>;
}

export default App;

