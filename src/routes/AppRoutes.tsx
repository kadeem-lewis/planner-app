import React from "react";
import { Routes, Route } from "react-router-dom";
import { Calendar } from "../pages/App/Calendar";
import { Today } from "../pages/App/Today";
import { TaskBoard } from "../pages/App/TaskBoard";
import { AppLayout } from "../layouts/AppLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="calendar" element={<Calendar />} />
        <Route path="today" element={<Today />} />
        <Route path="taskboard" element={<TaskBoard />} />
      </Route>
    </Routes>
  );
};
