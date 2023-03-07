import { Route, Routes } from "react-router";

import { MyDay } from "./pages/MyDay";
import { TaskBoard } from "./pages/TaskBoard";
import { NotFound } from "./pages/NotFound";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

export const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<MyDay />} />
      <Route path="/" element={<TaskBoard />} />
    </Routes>
  );
};
