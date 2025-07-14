import React from 'react';
import './styles/LandingPage.scss';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Store Book</h1>
      <p>Your business management platform.</p>
      <button onClick={() => window.location.href = '/Auth/login'}>Sign In</button>
      <button onClick={() => window.location.href = '/Auth/signup/business'}>Sign Up</button>
    </div>
  );
}

export default LandingPage;