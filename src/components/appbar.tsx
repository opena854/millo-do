import { AppBar as MuiAppBar, Box, Button, Container, Toolbar, Tooltip, Typography } from "@mui/material"
import { useNavigate, NavLink } from "react-router-dom"
import { menu } from '../config'
import { useUser } from "./user";

/* 
                  <NavLink to={path} key={displayName}>
                    <Typography
                      variant="button"
                      color={"white"}
                      display="block"
                    >
                      {displayName}
                    </Typography>
                  </NavLink>
*/


const AppBar = () => {
    const goto = useNavigate();
    const user = useUser();
    
    return (
      <MuiAppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component={"div"} sx={{ mr: 2 }}>
              MILLO
            </Typography>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {menu
                .filter(({ displayName }) => !!displayName)
                .map(({ displayName, path, options }) => (
                  <Button
                    key={displayName}
                    onClick={() => goto(path, options)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {displayName}
                  </Button>
                ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                {
                    user 
                    ? <Tooltip title={user.displayName || ""}><Button sx={{ my: 2, color: "white", display: "block" }} onClick={() => goto("signout")} >Salir</Button></Tooltip>
                    : <Button disabled={ user === undefined } sx={{ my: 2, color: "white", display: "block" }} onClick={() => goto("signin")}>Acceder</Button>

                }
                
                
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    );
            }
export default AppBar
