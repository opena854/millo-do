import React from "react";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Auth from "./pages/auth";
import LandingPage from "./pages/landing";
import Home from "./pages/home";
import withUser from "./components/User";
import { Button, Typography } from "@material-ui/core";

export const ButtonGoTo = withRouter(({ history, children, toUrl, variant, onClick = ()=>{}, color,...props }) => (
  <Button variant={variant} color={color} 
    onClick={() => {
      onClick(); 
      history.push(toUrl);
    }}>
    {children}
  </Button>
));

const App = withUser(({ user }) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/home" component={Home} />
          <Route path="/" component={LandingPage} />
        </Switch>
          <Typography variant="body2">{user?.displayName || 'none'}</Typography>
          <ButtonGoTo variant="contained" color="primary" toUrl="/auth">
            Entrar
          </ButtonGoTo>
      </BrowserRouter>
    </React.Fragment>
  );
});

export default App;
