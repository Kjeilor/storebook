import React from "react";
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

const Router = () => {
  return (
    <Routes>
      <Route path="Auth/*" element={<AuthRoutes />} />
      <Route path="Catalogue/*" element={<CatalogueRoutes />} />
      <Route path="Documents/*" element={<DocumentRoutes />} />
      <Route path="Explore/*" element={<ExploreRoutes />} />
      <Route path="General/*" element={<GeneralRoutes />} />
      <Route path="Marketing/*" element={<MarketingRoutes />} />
      <Route path="Storebook/*" element={<StorebookRoutes />} />
      <Route path="Supplydock/*" element={<SupplyDockRoutes />} />
      <Route path="Teams/*" element={<TeamsRoutes />} />
      <Route path="Updates/*" element={<UpdateRoutes />} />
      <Route path="/" element={<Navigate to="Storebook/dashboard" />} />
    </Routes>
  );
};

export default Router;
