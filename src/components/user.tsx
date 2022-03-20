import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import { getAuth, User as FirebasUser } from "firebase/auth";
import { FirebaseApp } from 'firebase/app'
import { doc, DocumentReference, getDoc, getFirestore } from "firebase/firestore";

type AppUser = FirebasUser | undefined | null;
export interface Session {
  firebase: FirebaseApp,
  user?: AppUser,
  realm?: DocumentReference
}

type AppSession = Session | undefined

export const User = createContext<AppSession>(undefined);

export const UserProvider = ({ firebase, children } : { firebase: FirebaseApp, children: ReactElement }) => {
  const [session, setSession] = useState<AppSession>(undefined);

  useEffect ( () => {
    const unsubscribe = getAuth(firebase).onAuthStateChanged( (user: AppUser) => {
      setSession({ firebase, user })
      
      if (user) {
        const db = getFirestore(firebase)
        getDoc(doc(db, `usuarios/${user?.email}`))
          .then((val) => val.get("empresa"))
          .then((realmid) => {
            const realm = doc(db, `empresas/${realmid}`)
            setSession({ firebase, user, realm })
          });
      }
    })
    return unsubscribe;
  }, [firebase]);
  return <User.Provider value={session}>{children}</User.Provider>;
};

export const useUser = () => {
  return useContext(User)?.user;
};


export const useSession = () => {
  return useContext(User);
};

