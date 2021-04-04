import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./pages/auth";
import LandingPage from "./pages/landing";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
