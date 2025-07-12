import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default AuthRoutes;
