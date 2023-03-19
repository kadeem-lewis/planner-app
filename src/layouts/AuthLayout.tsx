import React from "react";
import { Link, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <Link to="/home">Logo</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
