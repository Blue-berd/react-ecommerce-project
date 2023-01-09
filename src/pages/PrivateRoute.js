/** @format */

import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later

const PrivateRoute = ({ Checkout }) => {
  const { user } = useAuth0();
// console.log("rest",rest)
// console.log("children",Children)

  if (!user) {
    return <Navigate to="/" />;
  }
  return <Checkout/>
};
export default PrivateRoute;
