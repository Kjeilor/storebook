import React from 'react';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import AppWrapper from './AppWrapper'; // Import the new AppWrapper component

function App() {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
}

export default App;

