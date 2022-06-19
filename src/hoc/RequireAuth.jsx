import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
 

  return children;
  
};

export default RequireAuth;