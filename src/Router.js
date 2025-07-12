import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import CatalogueRoutes from "./routes/CatalogueRoutes"
import DocumentRoutes from "./routes/DocumentRoutes";
import ExploreRoutes from "./routes/ExploreRoutes";
import GeneralRoutes from "./routes/GeneralRoutes";
import MarketingRoutes from "./routes/MarketingRoutes";
import StorebookRoutes from "./routes/StorebookRoutes";
import SupplyDockRoutes from "./routes/SupplyDockRoutes";
import TeamsRoutes from "./routes/TeamsRoutes";
import UpdateRoutes from "./routes/UpdateRoutes";
import LandingPage from "./pages/landingPage/LandingPage";

import { AuthContext } from './contexts/AuthContext';

const Router = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {/* Conditional route for the root path "/" */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            // If authenticated, redirect to the dashboard
            <Navigate to="Storebook/dashboard" replace />
          ) : (
            // If not authenticated, show the LandingPage
            <LandingPage />
          )
        }
      />

      {/* Your existing authentication routes */}
      <Route path="Auth/*" element={<AuthRoutes />} />

      {/* Your existing authenticated application routes */}
      <Route path="catalogue/*" element={<CatalogueRoutes />} />
      <Route path="Documents/*" element={<DocumentRoutes />} />
      <Route path="Explore/*" element={<ExploreRoutes />} />
      <Route path="General/*" element={<GeneralRoutes />} />
      <Route path="Marketing/*" element={<MarketingRoutes />} />
      <Route path="Storebook/*" element={<StorebookRoutes />} />
      <Route path="Supplydock/*" element={<SupplyDockRoutes />} />
      <Route path="Teams/*" element={<TeamsRoutes />} />
      <Route path="Updates/*" element={<UpdateRoutes />} />

      {/* Fallback for any unmatched routes - can redirect to landing or 404 */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default Router;