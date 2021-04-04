import React from "react";
import firebase from "firebase/app";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ButtonGoTo from "./buttongoto";
import withUser from "./User";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Bar = withUser(({user}) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        { user 
          ? <ButtonGoTo color="inherit" toUrl="/" onClick={() => firebase.auth().signOut() }>Salir</ButtonGoTo>
          : <ButtonGoTo color="inherit" toUrl="/auth">Acceder</ButtonGoTo>
        }
      </Toolbar>
    </AppBar>
  );
});

export default Bar;
