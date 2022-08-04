import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  };

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
