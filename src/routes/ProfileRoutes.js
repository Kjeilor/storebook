import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfilePage from "../scenes/profiles/Pages/UserProfilePage.jsx";
import BusinessProfilePage from "../scenes/profiles/Pages/BusinessProfilePage.jsx";

const ProfileRoutes = () => (
  <Routes>
    <Route path="user" element={<UserProfilePage />} />
    <Route path="business" element={<BusinessProfilePage />} />
  </Routes>
);

export default ProfileRoutes;