import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./pages/auth";
import LandingPage from "./pages/landing";
import Home from "./pages/home";
import Bar from "./components/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Bar />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
