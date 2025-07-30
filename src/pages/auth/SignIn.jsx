import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function SignIn() {
  const { signIn } = useAuth();
  const nav = useNavigate();

  const handleDemo = () => {
    signIn();            // stub
    nav('/storebook', { replace: true });
  };

  return (
    <div className="auth-page">
      <h1>Sign In</h1>
      <button onClick={handleDemo}>Demo sign-in</button>
      <p>
        No account?&nbsp;
        <span onClick={() => nav('/auth/signup')} style={{ cursor: 'pointer', color: 'blue' }}>
          Sign up
        </span>
      </p>
    </div>
  );
}