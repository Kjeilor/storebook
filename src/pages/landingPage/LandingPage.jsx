import React, { useState, useEffect, useRef, useMemo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'; // Path to AuthContext

// FIX: Corrected import path for the SCSS file and removed 'styles' alias
import './styles/LandingPage.scss'; // Corrected path for SCSS

// Define the company's primary color for easy access
const COMPANY_COLOR = '#29ab87'; // Store Book's brand color

function LandingPage() {
  const navigate = useNavigate();
  // FIX: Added useContext for AuthContext
  const { isAuthenticated, handleAuthSuccess } = useContext(AuthContext);
  const [overlays, setOverlays] = useState([]);
  const videoRef = useRef(null);

  const transactionMessages = useMemo(() => [
    "Item Sold: 'Vintage Leather Bag'",
    "New Customer Registered!",
    "Delivery ETA: 15 mins for 'Coffee Order'",
    "Positive Review: 'Great service!'",
    "Inventory Update: 'New stock of handmade soaps'",
    "Marketing Campaign: 'Local Ad' performing well!",
    "Repeat Customer: 'Sarah M.' just ordered again!",
    "Local Search: 'Boutique near me' led to your store!",
    "Service Booked: 'Haircut & Style' for tomorrow",
    "Product Viewed: 'Organic Honey' 50+ times today",
  ], []);

  useEffect(() => {
    const addOverlay = () => {
      const randomIndex = Math.floor(Math.random() * transactionMessages.length);
      const newMessage = transactionMessages[randomIndex];
      const newOverlay = {
        id: Date.now(),
        message: newMessage,
        timestamp: new Date(),
      };

      setOverlays(prevOverlays => {
        const updatedOverlays = [...prevOverlays, newOverlay];
        return updatedOverlays.slice(Math.max(updatedOverlays.length - 5, 0));
      });
    };

    const intervalId = setInterval(addOverlay, 3000);
    return () => clearInterval(intervalId);
  }, [transactionMessages]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // FIX: Updated handlers for conditional buttons
  const handleOpenStorebook = () => {
    handleAuthSuccess(); // Trigger splash and dashboard load
    navigate('/Storebook/dashboard'); // Navigate to the dashboard
  };

  const handleSignIn = () => {
    navigate('/Auth/login'); // Navigate to the sign-in form page
  };

  const handleSignUp = () => {
    navigate('/Auth/signup/1'); // Navigate to the first step of the sign-up flow
  };

  return (
    // FIX: Applied SCSS class directly
    <div className="landing-page-container">
      {/* Left Section: Video Background with Overlays */}
      <div className="video-section">
        <video
          ref={videoRef}
          className="video-background" // FIX: Applied SCSS class directly
          src="https://assets.mixkit.co/videos/preview/mixkit-people-walking-in-a-busy-street-4330-large.mp4"
          autoPlay
          loop
          muted
          playsInline
          alt="Business activity background"
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlays Container */}
        <div className="overlays-container">
          {overlays.map((overlay) => (
            <div
              key={overlay.id}
              className="overlay-item" // FIX: Applied SCSS class directly
              style={{ '--company-color': COMPANY_COLOR }}
            >
              <p>
                <span>{new Date(overlay.timestamp).toLocaleTimeString()}</span>
                {overlay.message}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Content, CTA, and Links */}
      <div className="content-section">
        <div className="max-width-wrapper">
          {/* Logo/Brand Name */}
          <h1 className="logo-title">
            Store Book
          </h1>

          {/* Core Message */}
          <h2 className="core-message">
            A Robust Platform for Business Management.
          </h2>

          {/* Adapted Meta-style Copy */}
          <p className="description-text">
            Connect with your customers and achieve better business results with Store Book. Our intuitive tools help you:
          </p>
          <ul className="feature-list">
            <li>Streamline catalog and inventory management.</li>
            <li>Boost local visibility and attract new customers.</li>
            <li>Gain insights into what's working best for your business.</li>
            <li>Manage all your essential business operations in one place.</li>
          </ul>

          {/* Conditional Buttons based on Authentication Status */}
          {isAuthenticated ? (
            <button
              onClick={handleOpenStorebook}
              className="cta-button" // FIX: Applied SCSS class directly
              style={{ backgroundColor: COMPANY_COLOR }}
            >
              Open Storebook
            </button>
          ) : (
            <div className="auth-buttons-container"> {/* FIX: New container for two buttons */}
              <button
                onClick={handleSignIn}
                className="sign-in-button" // FIX: New SCSS class for Sign In
                style={{ backgroundColor: COMPANY_COLOR }}
              >
                Sign In
              </button>
              <button
                onClick={handleSignUp}
                className="sign-up-button" // FIX: New SCSS class for Sign Up
                style={{ backgroundColor: COMPANY_COLOR, marginLeft: '1rem' }} // Add some spacing
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer Links */}
      <footer className="footer">
        <a href="/contact">Contact Us</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <span>&copy; {new Date().getFullYear()} Store Book.</span>
      </footer>
    </div>
  );
}

export default LandingPage;