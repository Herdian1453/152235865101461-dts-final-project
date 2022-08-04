import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../context/auth/hook";

const RequireAnonym = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace={true} />;
  } else {
    return children;
  }
};

export default RequireAnonym;
