import { useEffect } from "react";
import { Box } from '@mui/material'
import StiledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { GoogleAuthProvider, getAuth, signOut } from 'firebase/auth'
import { useLocation, useNavigate } from "react-router-dom";

type LocationState = {
  from?: {
    pathname?: string
  }
}

export const SignIn = () => {
  const location = useLocation().state as LocationState || null;

  const from : any = location?.from?.pathname || "/" ;

  const uiConfig = {
    immediateFederatedRedirect: true,
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      uiShown: () => {},
      signInSuccessWithAuthResult: () => true,
    },
    signInSuccessUrl: from,
  };

  return (
    <div id="firebaseui">
      <Box sx={{ display: "none" }}>
        <StiledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()} />
      </Box>
    </div>
  );
};

export const SignOut = () => {
  const navigate = useNavigate();

  useEffect ( () => {
    signOut(getAuth()).then( () => navigate("/"))
  }, [navigate]);
  
  return <div>Signing out...</div>

};

