import React from 'react';
import productImg from './assets/storebook-mock.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Storebook</h1>
        <p>
          Run your store, your way. Inventory, orders, marketing, and analytics—
          all in one simple platform built for independent businesses.
        </p>
        <button className="cta" onClick={() => window.location.href = '/auth/signup'}>
          Learn More
        </button>
      </div>
      <div className="hero-image">
        <img src={productImg} alt="Storebook dashboard preview" />
      </div>
    </section>
  );
}