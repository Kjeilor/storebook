import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import SignUpBusiness from "../pages/auth/SignUpBusiness"; 

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup/business/*" element={<SignUpBusiness />} />
    </Routes>
  );
};

export default AuthRoutes;