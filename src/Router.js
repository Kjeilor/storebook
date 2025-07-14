import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import CatalogueRoutes from "./routes/CatalogueRoutes";
import DocumentRoutes from "./routes/DocumentRoutes";
import ExploreRoutes from "./routes/ExploreRoutes";
import GeneralRoutes from "./routes/GeneralRoutes";
import MarketingRoutes from "./routes/MarketingRoutes";
import StorebookRoutes from "./routes/StorebookRoutes";
import SupplyDockRoutes from "./routes/SupplyDockRoutes";
import TeamsRoutes from "./routes/TeamsRoutes";
import UpdateRoutes from "./routes/UpdateRoutes";
import LandingPage from "./pages/landingPage/LandingPage";
import ErrorBoundary from "./components/app/ErrorBoundary";
import NotFound from "./pages/404/404.jsx";

import { AuthContext } from "./contexts/AuthContext";

const Router = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <ErrorBoundary>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/Storebook/dashboard" replace /> : <LandingPage />}
        />
        <Route path="Auth/*" element={<AuthRoutes />} />

        <Route path="catalogue/*" element={<CatalogueRoutes />} />
        <Route path="Documents/*" element={<DocumentRoutes />} />
        <Route path="Explore/*" element={<ExploreRoutes />} />
        <Route path="General/*" element={<GeneralRoutes />} />
        <Route path="Marketing/*" element={<MarketingRoutes />} />
        <Route path="Storebook/*" element={<StorebookRoutes />} />
        <Route path="Supplydock/*" element={<SupplyDockRoutes />} />
        <Route path="Teams/*" element={<TeamsRoutes />} />
        <Route path="Updates/*" element={<UpdateRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default Router;
