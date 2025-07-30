import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function UserProfilePage() {
  const { logOut } = useAuth();
  const nav = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User Profile</h2>
      <p>Avatar & name can be displayed here later.</p>
      <button onClick={() => logOut().then(() => nav('/'))}>Sign out</button>
    </div>
  );
}