import React from "react";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./contexts/AuthContext";

function AppWrapper() {
  console.log("AppWrapper rendering…");
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default AppWrapper;
