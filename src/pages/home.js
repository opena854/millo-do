import { Typography } from "@material-ui/core";
import React from "react";
import EmpresaInfo from "../components/empresainfo";

const Home = () => (
  <React.Fragment>
    <Typography variant="h5" color="textPrimary">
      Home
    </Typography>
    <EmpresaInfo />
  </React.Fragment>
);

export default Home;
