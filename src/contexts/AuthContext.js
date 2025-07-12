import React, { useState, useEffect, createContext } from 'react';
// Commenting out Appwrite imports for now to resolve compilation errors
// import { Client, Account, Databases, Storage, ID } from 'appwrite';

// Commenting out Appwrite Client initialization for now
// const client = new Client();
// client
//     .setEndpoint('YOUR_APPWRITE_ENDPOINT') // Replace with your Appwrite Endpoint
//     .setProject('YOUR_APPWRITE_PROJECT_ID'); // Replace with your Appwrite Project ID

// Commenting out Appwrite service instances for now
// const account = new Account(client);
// const databases = new Databases(client);
// const storage = new Storage(client);

// Create AuthContext
export const AuthContext = createContext(null);

// AuthProvider component to manage authentication state and provide (mock) Appwrite services
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [showDashboardSplash, setShowDashboardSplash] = useState(false);

  useEffect(() => {
    // Simulate initial authentication check
    const checkUserAuthentication = async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      // For now, always set to false unless explicitly logged in later
      setIsAuthenticated(false);
      setIsAuthChecked(true);
    };

    checkUserAuthentication();
  }, []);

  // Function to handle login/signup success, which triggers dashboard splash
  const handleAuthSuccess = async () => {
    setIsAuthenticated(true);
    setShowDashboardSplash(true); // Show splash before dashboard loads
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate dashboard loading time
    setShowDashboardSplash(false); // Hide splash
  };

  // Provide mock Appwrite services for now
  const mockAppwriteAccount = {
    createEmailSession: async (email, password) => {
      console.log("Mock Appwrite Login:", { email, password });
      // Simulate success
      return Promise.resolve({ $id: 'mock_user_id' });
    },
    create: async (id, email, password) => {
      console.log("Mock Appwrite User Create:", { id, email, password });
      // Simulate success
      return Promise.resolve({ $id: 'mock_user_id' });
    },
    get: async () => {
        // Simulate no user authenticated by default
        return Promise.reject(new Error("No active session (mock)"));
    },
    // Add other mock methods as needed
  };

  const mockAppwriteDatabases = {
    createDocument: async (dbId, collectionId, docId, data) => {
      console.log("Mock Appwrite Create Document:", { dbId, collectionId, docId, data });
      return Promise.resolve({ $id: 'mock_doc_id' });
    },
    updateDocument: async (dbId, collectionId, docId, data) => {
      console.log("Mock Appwrite Update Document:", { dbId, collectionId, docId, data });
      return Promise.resolve({ $id: docId });
    },
    // Add other mock methods as needed
  };

  const mockAppwriteStorage = {
    createFile: async (bucketId, fileId, file) => {
      console.log("Mock Appwrite Create File:", { bucketId, fileId, file: file.name });
      return Promise.resolve({ $id: 'mock_file_id' });
    },
    // Add other mock methods as needed
  };

  const mockAppwriteID = {
    unique: () => `mock_id_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
  };

  const authContextValue = {
    isAuthenticated,
    setIsAuthenticated,
    handleAuthSuccess,
    appwriteAccount: mockAppwriteAccount,
    appwriteDatabases: mockAppwriteDatabases,
    appwriteStorage: mockAppwriteStorage,
    appwriteID: mockAppwriteID,
    isAuthChecked,
    showDashboardSplash,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};