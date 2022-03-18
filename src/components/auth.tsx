import { useState } from "react";
import StiledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { useUser } from "./user";

const Auth = () => {
  const user = useUser();
  const [loading, setLoading] = useState(true);
  
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
          <h5>Hola { user.displayName }</h5>
        ) : (
          <StiledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={getAuth()}
          />
        ))}
      {loading && user === undefined && (
        <div id="firebaseui-auth-loading">Cargando...</div>
      )}
    </div>
  );
};

export default Auth;
