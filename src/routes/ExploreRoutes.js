import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "../scenes/explore/Explore";

const ExploreRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Explore />}>
          <Route path="explore" element={<Explore />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ExploreRoutes;
