import { Typography } from "@material-ui/core";
import React from "react";
import { useDocument } from "../services/firestore";

const EmpresaInfo = () => (
  <Typography variant="body1">
    {JSON.stringify(
      //useCollection({ path: ["empresas", "doblek", "terceros"]}).result || "loading..."
      useDocument({ path: ["empresas", "doblek"] }).result || "loading..."
    )}
  </Typography>
);

export default EmpresaInfo;
