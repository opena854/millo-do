import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/app";

export const User = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      console.log('AuthStateChanged', user)
      setUser(user);
    });
  }, []);

  return <User.Provider value={user}>{children}</User.Provider>;
};

export const useUser = () => {
  return useContext(User);
};

export const withUser = (Component) => (props) => (
  <Component {...props} user={useUser()} />
);

export default withUser;
