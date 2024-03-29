import { useState } from "react";
import {
  Home,
  Bell,
  Menu as MenuIcon,
  Calendar,
  CalendarDays,
  KanbanSquare,
} from "lucide-react";
import ActivityButton from "./ActivityButton";
import NotificationTab from "./NotificationTab";
import { Link, NavLink, useNavigate } from "@remix-run/react";
import { useAuth } from "~/contexts/AuthContext";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuItem,
  MenuSeparator,
  MenuHeader,
  MenuSection,
} from "~/components/ui/menu";
import { Button, buttonVariants } from "../button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

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
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:px-6">
      <nav className="flex w-full items-center justify-between">
        <div className="gap-x-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 p-4 font-medium">
                <NavLink
                  to="/app/today"
                  className="flex items-center gap-4 rounded-xl text-lg font-semibold text-muted-foreground hover:text-foreground"
                >
                  <Calendar />
                  Today
                </NavLink>
                <NavLink
                  to="/app/calendar"
                  className="flex items-center gap-4 rounded-xl text-lg font-semibold text-muted-foreground hover:text-foreground"
                >
                  <CalendarDays />
                  Calendar
                </NavLink>
                <NavLink
                  to="/app/taskboard"
                  className="flex items-center gap-4 rounded-xl text-lg font-semibold text-muted-foreground hover:text-foreground"
                >
                  <KanbanSquare />
                  Taskboard
                </NavLink>
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
        <div className="flex items-center gap-x-1">
          <ActivityButton />
          <MenuTrigger>
            <Button variant="ghost">
              <Bell />
            </Button>
            <MenuPopover>
              <Menu>
                <MenuItem>
                  <NotificationTab />
                </MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
          <MenuTrigger>
            <Button>
              <Avatar>
                <AvatarFallback>
                  {currentUser?.email?.[0] ?? "NA"}
                </AvatarFallback>
              </Avatar>
            </Button>
            <MenuPopover>
              <Menu>
                <MenuSection>
                  <MenuHeader separator>My Account</MenuHeader>
                </MenuSection>
                <MenuSeparator />
                <MenuSection>
                  <MenuItem>
                    <Link to="#">Profile</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="#">Settings</Link>
                  </MenuItem>
                </MenuSection>
                <MenuSeparator />
                <MenuSection>
                  {/* <MenuItem onSelect={() => handleLogOut()}>Logout</MenuItem> */}
                  <MenuItem>Logout</MenuItem>
                </MenuSection>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </div>
      </nav>
    </header>
  );
}
