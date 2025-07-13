import React, { useState, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { account } from '../../../lib/appwriteConfig';
import './styles/SignInInline.scss';

const SignInInline = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setUser(user);
      navigate('/Storebook/dashboard');
    } catch (err) {
      setError(err?.message || 'Sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="signin-inline" onSubmit={handleSubmit}>
      <h2>Sign in to your account</h2>
      {error && <p className="error">{error}</p>}
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Signing in…' : 'Sign in'}
      </button>
      <p>
        New to Store Book?{' '}
        <Link to="/Auth/signup/business">Create a business account</Link>
      </p>
    </form>
  );
};

export default SignInInline;