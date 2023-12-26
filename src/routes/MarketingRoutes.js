import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Marketing from "../scenes/marketing/Marketing"
import Campaigns from "../scenes/marketing/pages/campaigns/Campaigns";
import Programs from "../scenes/marketing/pages/programs/Programs";
import Assets from "../scenes/marketing/pages/assets/Assets";

const MarketingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Marketing />}>
        <Route index element={<Navigate to="campaigns" />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="programs" element={<Programs />} />
        <Route path="assets" element={<Assets />} />
      </Route>
    </Routes>
  );
};

export default MarketingRoutes;
