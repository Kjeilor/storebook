import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles/LandingPage.scss';

export default function LandingPage() {
  return (
    <div className="landing">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}