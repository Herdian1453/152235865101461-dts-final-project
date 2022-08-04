import React, { useEffect } from "react";
import useAuth from "../../context/auth/hook";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default RequireAuth;
