import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { ForgotPassword } from "../pages/Auth/ForgotPassword";
import { LogIn } from "../pages/Auth/LogIn";
import { SignUp } from "../pages/Auth/SignUp";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<LogIn />}></Route>
        <Route path="password" element={<ForgotPassword />}></Route>
      </Route>
    </Routes>
  );
};
