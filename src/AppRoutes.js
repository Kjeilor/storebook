import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage/LandingPage.jsx';
import Layout from "./components/layout/Layout.jsx";
import AuthRoutes from "./routes/AuthRoutes.js";
import CatalogueRoutes from "./routes/CatalogueRoutes.js";
import DocumentRoutes from "./routes/DocumentRoutes.js";
import ExploreRoutes from "./routes/ExploreRoutes.js";
import GeneralRoutes from "./routes/GeneralRoutes.js";
import MarketingRoutes from "./routes/MarketingRoutes.js";
import StorebookRoutes from "./routes/StorebookRoutes.js";
import SupplyDockRoutes from "./routes/SupplyDockRoutes.js";
import TeamsRoutes from "./routes/TeamsRoutes.js";
import ProfileRoutes from "./routes/ProfileRoutes.js";
import UpdateRoutes from "./routes/UpdateRoutes.js";
import ErrorBoundary from "./components/app/ErrorBoundary.jsx";
import NotFound from "./pages/404/404.jsx";
import { useAuth } from "./contexts/AuthContext.js";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
 

  return (
    <ErrorBoundary>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route path="auth/*" element={<AuthRoutes />} />

        <Route element={<Layout />}>
          <Route path="storebook/*" element={<StorebookRoutes />} />
          <Route path="catalogue/*" element={<CatalogueRoutes />} />
          <Route path="documents/*" element={<DocumentRoutes />} />
          <Route path="explore/*" element={<ExploreRoutes />} />
          <Route path="general/*" element={<GeneralRoutes />} />
          <Route path="marketing/*" element={<MarketingRoutes />} />
          <Route path="profile/*" element={<ProfileRoutes />} />
          <Route path="supplydock/*" element={<SupplyDockRoutes />} />
          <Route path="teams/*" element={<TeamsRoutes />} />
          <Route path="updates/*" element={<UpdateRoutes />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
