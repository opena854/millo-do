import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const User = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect ( () => getAuth().onAuthStateChanged( user => setUser(user)), []);
  
  return <User.Provider value={user}>{children}</User.Provider>;
};

export const useUser = () => {
  return useContext(User);
};

export const withUser = (Component) => (props) => (
  <Component {...props} user={useUser()} />
);

export default withUser;
