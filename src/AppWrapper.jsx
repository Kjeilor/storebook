import React, { useContext } from 'react';
import Router from './Router';
import Layout from './components/views/layout/Layout';
import Splash from './components/splash/Splash';
import { AuthContext } from './contexts/AuthContext';

function AppWrapper() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Splash text="Store Book" />;          // 1. auth-check splash
  return user ? <Layout /> : <Router />;                    // 2. dashboard or landing
}

export default AppWrapper;
