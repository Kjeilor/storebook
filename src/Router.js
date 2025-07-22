import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import CatalogueRoutes from "./routes/CatalogueRoutes";
import DocumentRoutes from "./routes/DocumentRoutes";
import ExploreRoutes from "./routes/ExploreRoutes";
import GeneralRoutes from "./routes/GeneralRoutes";
import MarketingRoutes from "./routes/MarketingRoutes";
import SupplyDockRoutes from "./routes/SupplyDockRoutes";
import TeamsRoutes from "./routes/TeamsRoutes";
import UpdateRoutes from "./routes/UpdateRoutes";
import LandingPage from "./pages/landingPage/LandingPage";
import ErrorBoundary from "./components/app/ErrorBoundary";
import NotFound from "./pages/404/404.jsx";
import { AuthContext } from "./contexts/AuthContext";
import Layout from "./components/layout/Layout";
import Splash from "./components/splash/Splash";

// Storebook pages
import Dashboard from "./scenes/storebook/pages/dashboard/Dashboard";
import Customers from "./scenes/storebook/pages/customers/Customers";
import Orders from "./scenes/storebook/pages/orders/Orders";

const Router = () => {
  const { isAuthenticated, loading, user } = useContext(AuthContext);

  useEffect(() => {
    console.log("🔁 Auth check:", { loading, isAuthenticated, user });
  }, [loading, isAuthenticated, user]);

  if (loading) return <Splash />;

  return (
    <ErrorBoundary>
      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/storebook" replace />
            ) : (
              <LandingPage />
            )
          }
        />

        {/* Auth Routes */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* Protected Layout with nested routes */}
        {isAuthenticated && (
          <Route path="/" element={<Layout />}>
            <Route path="storebook">
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="customers" element={<Customers />} />
              <Route path="orders" element={<Orders />} />
            </Route>

            <Route path="catalogue/*" element={<CatalogueRoutes />} />
            <Route path="documents/*" element={<DocumentRoutes />} />
            <Route path="explore/*" element={<ExploreRoutes />} />
            <Route path="general/*" element={<GeneralRoutes />} />
            <Route path="marketing/*" element={<MarketingRoutes />} />
            <Route path="supplydock/*" element={<SupplyDockRoutes />} />
            <Route path="teams/*" element={<TeamsRoutes />} />
            <Route path="updates/*" element={<UpdateRoutes />} />
          </Route>
        )}

        {/* Catch-all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default Router;
