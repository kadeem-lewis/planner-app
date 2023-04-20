"use client";
import React, { useState } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import ActivityButton from "./ActivityButton";
import NotificationTab from "./NotificationTab";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogOut = async () => {
    setError("");
    if (logout) {
      try {
        await logout();
        router.push("/auth/login");
      } catch (err) {
        setError("failed to log out");
      }
    }
  };

  return (
    <header>
      <nav className="navbar flex justify-between bg-base-300">
        <div id="nav-left" className="gap-x-1">
          <button className="btn btn-square btn-ghost">
            <FaBars />
          </button>
          <Link href="today" className="btn btn-ghost">
            <AiFillHome />
          </Link>
        </div>
        <div id="nav-right" className="gap-x-1">
          <ActivityButton />
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <FaBell />
            </label>
            <NotificationTab />
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar placeholder"
            >
              <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                <span className="text-xl">
                  {currentUser?.email?.[0] ?? "NA"}
                </span>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => handleLogOut()}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
