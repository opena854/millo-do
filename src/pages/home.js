import { Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import EmpresaInfo from "../components/empresainfo";
import { People } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
  <React.Fragment>
    <Typography variant="h5" color="textPrimary">
      Home
    </Typography>
    <EmpresaInfo />
    <List className={classes.root}>
      <ListItem button component={Link} to="/thirds">
      <ListItemAvatar>
          <Avatar>
            <People />
          </Avatar>
        </ListItemAvatar>
          <ListItemText primary="Terceros" secondary="Clientes y Proveedores" />
      </ListItem>
    </List>
  </React.Fragment>
  )
};

export default Home;
