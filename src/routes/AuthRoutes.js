import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../scenes/auth/Login";
import Signup from "../scenes/auth/Signup";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default AuthRoutes;
