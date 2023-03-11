import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SideBar } from "../components/App/SideBar";
import { NavBar } from "../components/App/NavBar";

export const AppLayout = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Outlet />
    </>
  );
};
