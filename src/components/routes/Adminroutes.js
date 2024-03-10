// AdminRoute.js
import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ element, ...rest }) => {
  const {userInfo}  = useSelector((state) => state.auth);

  return userInfo && userInfo.isAdmin ? (
     <Route {...rest} element={element} />
   
    
  ) : (
    
    <Navigate to="/login-register" replace />
    
  );
};

export default AdminRoute;
