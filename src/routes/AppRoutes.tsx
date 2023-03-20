import React from "react";
import { Routes, Route } from "react-router-dom";
import { Calendar } from "../pages/App/Calendar";
import { Today } from "../pages/App/Today";
import { TaskBoard } from "../pages/App/TaskBoard";
import { AppLayout } from "../layouts/AppLayout";
import { FirestoreProvider } from "../contexts/FirestoreContext";

export const AppRoutes = () => {
  return (
    <FirestoreProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="calendar" element={<Calendar />} />
          <Route path="today" element={<Today />} />
          <Route path="taskboard" element={<TaskBoard />} />
        </Route>
      </Routes>
    </FirestoreProvider>
  );
};
