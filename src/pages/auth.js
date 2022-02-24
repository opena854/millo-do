import React, { useState } from "react";
import StiledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import withUser from "../components/User";
import { Navigate } from "react-router";
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
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
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
          <Navigate to="/home" />
        ) : (
          <StiledFirebaseAuth
            className={classes.signin}
            uiConfig={uiConfig}
            firebaseAuth={getAuth()}
          />
        ))}
      {loading && user === undefined && (
        <div id="firebaseui-auth-loading">Cargando...</div>
      )}
    </div>
  );
});

export default Auth;
