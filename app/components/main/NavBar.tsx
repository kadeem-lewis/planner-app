import { useState } from "react";
import { Home, Bell, Menu, Calendar, CalendarDays, KanbanSquare } from "lucide-react";
import ActivityButton from "./ActivityButton";
import NotificationTab from "./NotificationTab";
import { Link, NavLink, useNavigate } from "@remix-run/react";
import { useAuth } from "~/contexts/AuthContext";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button, buttonVariants } from "../ui/button";
import { Sheet,SheetContent,SheetTrigger } from "../ui/sheet";

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
    <header className="bg-muted/40 border-b h-14 flex items-center gap-4 px-4 lg:px-6">
      <nav className="flex items-center justify-between w-full">
        <div className="gap-x-1">
        <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid font-medium gap-2 p-4">
            <NavLink to="/app/today" className="flex items-center gap-4 rounded-xl text-lg font-semibold text-muted-foreground hover:text-foreground"><Calendar/>Today</NavLink>
            <NavLink to="/app/calendar" className="flex items-center gap-4 rounded-xl text-lg font-semibold text-muted-foreground hover:text-foreground"><CalendarDays/>Calendar</NavLink>
            <NavLink to="/app/taskboard" className="flex items-center gap-4 rounded-xl text-lg font-semibold text-muted-foreground hover:text-foreground"><KanbanSquare/>Taskboard</NavLink>
          </nav>
        </SheetContent>
      </Sheet>
          <Link
            to="/app/today"
            className={buttonVariants({ variant: "ghost" })}
          >
            <Home />
          </Link>
        </div>
        <div className="gap-x-1 flex items-center">
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
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="#">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="#">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
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
