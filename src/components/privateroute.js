import React from "react";
import { Redirect, Route } from "react-router";
import withUser from "./User";

const PrivateRoute = withUser(({ component: Component, user: authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === undefined ? (
          <div>Inicializando...</div>
        ) : authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/auth", state: { from: props.location } }}
          />
        )
      }
    />
  );
});

export default PrivateRoute;
