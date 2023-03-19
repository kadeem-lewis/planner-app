import React, { useState } from "react";

import { NavBar } from "../components/Home/NavBar";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
