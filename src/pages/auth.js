import React, { useState } from "react";
//import { FirebaseContext } from "../";
import StiledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import withUser from "../components/User";
import { ButtonGoTo } from "../App";

const Auth = withUser(({ user }) => {
  const [loading, setLoading] = useState(true);
  //const firebase = useContext(FirebaseContext);
	console.log(user?.displayName || 'not yet', user);
  
  const uiConfig = {
    immediateFederatedRedirect: true,
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      uiShown: () => setLoading(false),
      signInSuccessWithAuthResult: () => true,
    },
    signInSuccessUrl: "/home",
  };

  return (
    <div id="firebaseui">
      { user !== undefined && (user ? (
        <ButtonGoTo
          variant="contained"
          color="primary"
					toUrl="/"
          onClick={() => {
						firebase.auth().signOut()
					}}
        >
          Salir
        </ButtonGoTo>
      ) : (
        <StiledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      ))}
      {loading && user === undefined && <div id="firebaseui-auth-loading">Cargando...</div>}
    </div>
  );
});

export default Auth;
