import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const { token } = useSelector((state) => state.auth);


  return token  ? element : (
    <Navigate to="/login-register" replace />
  );
};

export default PrivateRoute;