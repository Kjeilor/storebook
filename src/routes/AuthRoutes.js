import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import SignUpWizard from '../pages/auth/SignUpWizard';

const AuthRoutes = () => (
  <Routes>
    <Route path="signin" element={<SignIn />} />
    <Route path="signup" element={<SignUp />} />
    <Route path="wizard" element={<SignUpWizard />} />
    <Route index element={<SignIn />} />
  </Routes>
);

export default AuthRoutes;