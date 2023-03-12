import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faHome } from "@fortawesome/free-solid-svg-icons";
import { ActivityButton } from "./ActivityButton";
import { NotificationTab } from "./NotificationTab";

export const NavBar = () => {
  return (
    <nav className="navbar flex justify-between">
      <div id="nav-left" className="gap-x-1">
        <button className="btn btn-square btn-ghost">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="today" className="btn btn-ghost">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
      <div id="nav-right" className="gap-x-1">
        <ActivityButton />
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <FontAwesomeIcon icon={faBell} />
          </label>
          <NotificationTab />
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar placeholder"
          >
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
              <span className="text-xl">KL</span>
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
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
