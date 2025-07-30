import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const nav = useNavigate();

  return (
    <div className="auth-page">
      <h1>Create account</h1>
      <button onClick={() => nav('/auth/wizard')}>Start wizard (demo)</button>
      <p>
        Already have an account?&nbsp;
        <span onClick={() => nav('/auth/signin')} style={{ cursor: 'pointer', color: 'blue' }}>
          Sign in
        </span>
      </p>
    </div>
  );
}