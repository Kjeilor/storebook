import React, { createContext, useContext } from 'react';

const AuthContext = createContext({
  currentUser: { id: 'dev-user', email: 'dev@storebook.test' },
  isAuthenticated: true,
  loading: false,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  logOut: () => Promise.resolve(),
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={AuthContext._currentValue}>
    {children}
  </AuthContext.Provider>
);