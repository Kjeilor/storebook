import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import './styles/Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input placeholder="Email" type="email" required onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" required onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Login;