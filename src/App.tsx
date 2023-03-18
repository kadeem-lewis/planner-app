import { Route, Routes } from "react-router";

import { NotFound } from "./pages/NotFound";
import { SignUp } from "./pages/Auth/SignUp";
import { LogIn } from "./pages/Auth/LogIn";
import { LandingPage } from "./pages/Home/LandingPage";
import { AppRoutes } from "./routes/AppRoutes";
import { HomeLayout } from "./layouts/HomeLayout";
import { AuthRoutes } from "./routes/AuthRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/home" element={<LandingPage />} />
        </Route>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route
          path="/app/*"
          element={
            <PrivateRoute>
              <AppRoutes />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};
