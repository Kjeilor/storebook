import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import AuthRoutes from './routes/AuthRoutes.js';
import CatalogueRoutes from './routes/CatalogueRoutes.js';
import DocumentRoutes from './routes/DocumentRoutes.js';
import ExploreRoutes from './routes/ExploreRoutes.js';
import GeneralRoutes from './routes/GeneralRoutes.js';
import MarketingRoutes from './routes/MarketingRoutes.js';
import StorebookRoutes from './routes/StorebookRoutes.js';
import SupplyDockRoutes from './routes/SupplyDockRoutes.js';
import TeamsRoutes from './routes/TeamsRoutes.js';
import UpdateRoutes from './routes/UpdateRoutes.js';
import ErrorBoundary from './components/app/ErrorBoundary.jsx';
import NotFound from './pages/404/404.jsx';

const AppRoutes = () => (
  <ErrorBoundary>
    <Routes>
      {/* public bounce */}
      <Route path="/" element={<Navigate to="/storebook" replace />} />

      {/* auth stub */}
      <Route path="auth/*" element={<AuthRoutes />} />

      {/* everything wrapped in Layout */}
      <Route element={<Layout />}>
        <Route path="storebook/*" element={<StorebookRoutes />} />
        <Route path="catalogue/*" element={<CatalogueRoutes />} />
        <Route path="documents/*" element={<DocumentRoutes />} />
        <Route path="explore/*" element={<ExploreRoutes />} />
        <Route path="general/*" element={<GeneralRoutes />} />
        <Route path="marketing/*" element={<MarketingRoutes />} />
        <Route path="supplydock/*" element={<SupplyDockRoutes />} />
        <Route path="teams/*" element={<TeamsRoutes />} />
        <Route path="updates/*" element={<UpdateRoutes />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </ErrorBoundary>
);

export default AppRoutes;