import React from 'react';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import AppWrapper from './AppWrapper'; // Import the new AppWrapper component

// This App.js now serves as the absolute root of your React application.
// Its primary responsibility is to provide the AuthContext to all its children
// and then render the main application logic contained within AppWrapper.
function App() {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
}

export default App;

