import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router"; // Your main Router component
import Splash from "./components/splash/Splash";
import Layout from "./components/views/layout/Layout";
import { AuthContext } from './contexts/AuthContext'; // Import AuthContext

// This AppWrapper.jsx now contains the core application logic that was previously in App.js.
// It consumes the AuthContext provided by its parent (the new App.js)
// and handles the conditional rendering of Splash, Layout, or the main Router.
function AppWrapper() {
  // Consume AuthContext to get global states
  const { isAuthChecked, isAuthenticated, showDashboardSplash } = useContext(AuthContext);

  // If the initial authentication check is not yet complete, show a minimal loading indicator
  if (!isAuthChecked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-xl text-gray-700">Loading Store Book...</div>
      </div>
    );
  }

  // If authenticated and dashboard splash is active, render the Splash component
  if (isAuthenticated && showDashboardSplash) {
    return <Splash />;
  }

  // Render the main application content based on authentication status
  return (
    <div className="App">
      {isAuthenticated ? <Layout /> : (
        // If not authenticated, render the main Router which will show LandingPage at '/'
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      )}
    </div>
  );
}

export default AppWrapper;
