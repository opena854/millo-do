import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import { getAuth, User as FirebasUser } from "firebase/auth";
import { FirebaseApp } from 'firebase/app'

type AppUser = FirebasUser | undefined | null;

export const User = createContext<AppUser>(undefined);

export const UserProvider = ({ firebase, children } : { firebase: FirebaseApp, children: ReactElement }) => {
  const [user, setUser] = useState<AppUser>(undefined);

  useEffect ( () => getAuth(firebase).onAuthStateChanged( (val: AppUser) => setUser(val)), [firebase]);
  
  return <User.Provider value={user}>{children}</User.Provider>;
};

export const useUser = () => {
  return useContext(User);
};

