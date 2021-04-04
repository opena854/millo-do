import React, { useState } from "react";
import StiledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import withUser from "../components/User";
import { Redirect } from "react-router";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  signin: {
    display: "none",
  },
}));

const Auth = withUser(({ user }) => {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

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
      {user !== undefined &&
        (user ? (
          <Redirect to="/home" />
        ) : (
          <StiledFirebaseAuth
            className={classes.signin}
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        ))}
      {loading && user === undefined && (
        <div id="firebaseui-auth-loading">Cargando...</div>
      )}
    </div>
  );
});

export default Auth;
