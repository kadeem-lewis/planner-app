import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SideBar } from "../components/App/SideBar";
import { NavBar } from "../components/App/NavBar";

export const AppLayout = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-10">
        <SideBar />
        <div className="col-span-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};
