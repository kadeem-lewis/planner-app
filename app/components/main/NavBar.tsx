import { useState } from "react";
import { Home, Bell, Menu } from "lucide-react";
import ActivityButton from "./ActivityButton";
import NotificationTab from "./NotificationTab";
import { Link, useNavigate } from "@remix-run/react";
import { useAuth } from "~/contexts/AuthContext";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button, buttonVariants } from "../ui/button";

export default function NavBar() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogOut = async () => {
    setError("");
    if (logout) {
      try {
        await logout();
        navigate("/auth/login");
      } catch (err) {
        setError("failed to log out");
      }
    }
  };

  return (
    <header className="bg-muted/40 border-b">
      <nav className="navbar flex justify-between">
        <div id="nav-left" className="gap-x-1">
          <Button variant="ghost">
            <Menu />
          </Button>
          <Link
            to="/app/today"
            className={buttonVariants({ variant: "ghost" })}
          >
            <Home />
          </Link>
        </div>
        <div id="nav-right" className="gap-x-1">
          <ActivityButton />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                <Bell />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <NotificationTab />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback>
                  {currentUser?.email?.[0] ?? "NA"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="#">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="#">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="#" onClick={() => handleLogOut()}>
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
