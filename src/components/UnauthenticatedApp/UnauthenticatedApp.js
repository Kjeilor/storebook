import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../landingPage/LandingPage'; // Your Landing Page component
import AuthRoutes from '../../components/landingPage/LandingPage.jsx'; // Your provided AuthRoutes

function UnauthenticatedApp() {
  return (
    <Routes>
      {/* Route for the main landing page at the root (e.g., yoursite.com/) */}
      <Route path="/" element={<LandingPage />} />

      {/* Delegate '/Auth/*' paths to your AuthRoutes component */}
      <Route path="Auth/*" element={<AuthRoutes />} />

      {/* Redirect any other unmatched paths to the landing page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default UnauthenticatedApp;

