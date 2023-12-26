import React from "react";
import { Routes, Route} from "react-router-dom";
import Teams from "../scenes/teams/Teams";

const TeamsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Teams />} />
      <Route index element={<Teams />} />
    </Routes>
  );
};

export default TeamsRoutes;