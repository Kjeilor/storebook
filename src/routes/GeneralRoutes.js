import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import General from "../scenes/general/General";
import Settings from "../scenes/general/pages/settings/Settings";
import Billing from "../scenes/general/pages/billing/Billing";
import Support from "../scenes/general/pages/support/Support";

const GeneralRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<General />}>
        <Route index element={<Navigate to="settings" />} />
        <Route path="settings" element={<Settings />} />
        <Route path="billing" element={<Billing />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default GeneralRoutes;
