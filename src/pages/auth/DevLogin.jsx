import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function DevLogin() {
  const { setAuth } = useAuth();   // we’ll add this setter
  const nav = useNavigate();

  const login = () => {
    setAuth(true);                // flip to logged-in
    nav('/storebook', { replace: true });
  };

  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1>Dev Login</h1>
      <button onClick={login}>Sign in (dev)</button>
    </div>
  );
}