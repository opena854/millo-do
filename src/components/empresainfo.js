import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import withUser from "./User";

const EmpresaInfo = withUser(({ user }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    db.doc(`usuarios/${user.uid}`)
      .get()
      .then((usuario) => {
        if (usuario.exists) {
          db.doc(usuario.get("empresa").path)
            .get()
            .then((empresa) => {
              if (empresa.exists) {
                setInfo(
                  JSON.stringify({
                    id: empresa.id,
                    rnc: empresa.get("rnc"),
                    nombre: empresa.get("nombre"),
                  })
                );
              }
            });
        }
      });
  }, [user, user.uid]);

  return <Typography variant="body1">{info}</Typography>;
});

export default EmpresaInfo;
