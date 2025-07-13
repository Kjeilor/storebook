import React from 'react';
import SignInInline from './components/SignInInline';
import './styles/LandingPage.scss';

const LandingPage = () => (
  <div className="landing">
    <section className="hero">
      <h1>Store Book</h1>
      <p>
        A robust platform for business management—catalog, inventory, customers,
        and growth insights all in one place.
      </p>
    </section>

    <section className="signin-wrapper">
      <SignInInline />
    </section>

    <footer className="footer">
      <a href="/contact">Contact Us</a>
      <a href="/terms">Terms</a>
      <a href="/privacy">Privacy</a>
      <span>&copy; {new Date().getFullYear()} Ateker | Storebook.</span>
    </footer>
  </div>
);

export default LandingPage;