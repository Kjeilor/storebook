import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = () => {
    setLoading(true);
    // stub
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 500);
    return Promise.resolve();
  };

  const logOut = () => {
    setIsAuthenticated(false);
    return Promise.resolve();
  };

  const value = {
    currentUser: isAuthenticated
      ? { id: "dev-user", email: "dev@storebook.test" }
      : null,
    isAuthenticated,
    loading,
    signIn,
    logOut,
    setAuth: setIsAuthenticated, // for DevLogin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
