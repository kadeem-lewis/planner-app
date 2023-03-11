import { Route, Routes } from "react-router";

import { NotFound } from "./pages/NotFound";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { LandingPage } from "./pages/LandingPage";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/app/*" element={<AppRoutes />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
