import React, { useState, useEffect, createContext } from 'react';
import { getCurrentUser, login, register, logout } from '../services/auth.service';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const authLogin = (email, pwd) => login(email, pwd).then(setUser);
  const authRegister = (email, pwd, name) => register(email, pwd, name).then(setUser);
  const authLogout = () => logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login: authLogin,
        register: authRegister,
        logout: authLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};