import React, { useContext, useState } from "react";
import { FirebaseContext } from "../";
import StiledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Auth = () => {
  const [loading, setLoading] = useState(true);
  const firebase = useContext(FirebaseContext);

  const uiConfig = {
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        console.log(authResult, redirectUrl);
        return true;
      },
      uiShown: () => setLoading(false),
    },
    signInSuccessUrl: "/home",
  };

  return (
    <div id="firebaseui">
      <StiledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      ></StiledFirebaseAuth>
      {loading && <div id="firebaseui-auth-loading">Cargando...</div>}
    </div>
  );
};

export default Auth;
