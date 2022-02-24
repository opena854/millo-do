import React from "react";
import { getAuth, signOut } from "firebase/auth";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ButtonGoTo from "./buttongoto";
import withUser from "./User";
import { useState } from "react";

const pages = ["Home", "Terceros"]

export const Bar = withUser(({ user }) => {
  const [refMenu, setRefMenu] = useState (null)
  //const [refSettings, setRefSettings] = useState (null)

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={ e => setRefMenu(e.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={refMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(refMenu)}
              onClose={() => setRefMenu(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => setRefMenu(null)}>
                  <Typography >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Box>
        
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={ () => setRefMenu(null)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        {user
          ? <ButtonGoTo color="inherit" toUrl="/" onClick={() => signOut(getAuth())}>Salir</ButtonGoTo>
          : <ButtonGoTo color="inherit" toUrl="/auth">Acceder</ButtonGoTo>
        }
      </Toolbar>
    </AppBar>
  );
});

export default Bar;
