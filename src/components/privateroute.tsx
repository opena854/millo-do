import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router";
import { useUser } from "./User";


const PrivateRoute = () => {
  const user = useUser();
  const navigate = useNavigate()
  const location = useLocation()

  if (user === null) navigate("/auth", {state: { from: location.pathname }})

  return user 
      ? <Outlet />
      : <div>Inicializando...</div>
};

export default PrivateRoute;
