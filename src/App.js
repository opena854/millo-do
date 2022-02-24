import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import LandingPage from "./pages/landing";
import Home from "./pages/home";
import Bar from "./components/navbar";
import PrivateRoute from "./components/privateroute.tsx";
import Thirds from "./pages/thirds";
import ThirdEdit from "./pages/thirds/edit";

const App = () => {
  return (
    <BrowserRouter>
      <Bar />
      <Routes>
        {/* <Route path="/auth" render={ ({ location }) => <Auth location={location} /> } /> */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<PrivateRoute />} >
          <Route path="/home" element={<Home />} />
          <Route path="/thirds/edit" element={<ThirdEdit />}  />
          <Route path="/thirds" element={<Thirds />} />
        </Route>
        <Route path="/" component={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
