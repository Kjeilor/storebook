import React from 'react';

export default function Footer() {
  const today = new Date();
  return (
    <footer className="landing-footer">
      <a href="mailto:hello@ateker.co">Contact Us</a>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
      <span>&copy; {today.getFullYear()} - Storebook | Ateker</span>
    </footer>
  );
}