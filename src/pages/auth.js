import React, { useState } from "react";
//import { FirebaseContext } from "../";
import StiledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import withUser from "../components/User";
import { Button } from "@material-ui/core";

const Auth = withUser(({ user }) => {
  const [loading, setLoading] = useState(true);
  //const firebase = useContext(FirebaseContext);

  const uiConfig = {
    //immediateFederatedRedirect: true,
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      uiShown: () => setLoading(false),
      signInSuccessWithAuthResult: () => true,
    },
    signInSuccessUrl: "/home",
  };

  return (
    <div id="firebaseui">
      {user ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => firebase.auth().signOut()}
        >
          Salir
        </Button>
      ) : (
        <StiledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
      {loading && <div id="firebaseui-auth-loading">Cargando...</div>}
    </div>
  );
});

export default Auth;
