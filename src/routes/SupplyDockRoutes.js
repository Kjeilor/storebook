import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SupplyDock from "../scenes/supplydock/SupplyDock"
import Suppliers from "../scenes/supplydock/pages/suppliers/Suppliers";
import Dock from "../scenes/supplydock/pages/dock/Dock";

const SupplyDockRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SupplyDock />}>
        <Route index element={<Navigate to="suppliers" />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="dock" element={<Dock />} />
      </Route>
    </Routes>
  );
};

export default SupplyDockRoutes;
