import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./pages/auth";
import LandingPage from "./pages/landing";
import Home from "./pages/home";
import Bar from "./components/navbar";
import PrivateRoute from "./components/privateroute";
import Thirds from "./pages/thirds";
import ThirdEdit from "./pages/thirds/edit";

const App = () => {
  return (
    <BrowserRouter>
      <Bar />
      <Switch>
        {/* <Route path="/auth" render={ ({ location }) => <Auth location={location} /> } /> */}
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/thirds/edit" component={ThirdEdit}  />
        <PrivateRoute path="/thirds" component={Thirds} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
