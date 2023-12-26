import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Updates from "../scenes/updates/Updates";
import Inbox from "../scenes/updates/Pages/inbox/Inbox";
import Track from "../scenes/updates/Pages/track/Track";

const UpdateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Updates />}>
        <Route index element={<Navigate to="inbox" />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="track" element={<Track />} />
      </Route>
    </Routes>
  );
};

export default UpdateRoutes;

