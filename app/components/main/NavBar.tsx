import { useState } from "react";
import { Home, Bell, Menu } from "lucide-react";
import ActivityButton from "./ActivityButton";
import NotificationTab from "./NotificationTab";
import { Link, useNavigate } from "@remix-run/react";
import { useAuth } from "../../contexts/AuthContext";

export default function NavBar() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogOut = async () => {
    setError("");
    if (logout) {
      try {
        await logout();
        navigate("/login");
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
            <Menu />
          </button>
          <Link to="/app/today" className="btn btn-ghost">
            <Home />
          </Link>
        </div>
        <div id="nav-right" className="gap-x-1">
          <ActivityButton />
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <Bell />
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
                <Link to="#">Profile</Link>
              </li>
              <li>
                <Link to="#">Settings</Link>
              </li>
              <li>
                <Link to="#" onClick={() => handleLogOut()}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
