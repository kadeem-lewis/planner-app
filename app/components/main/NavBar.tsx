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
import { Link, NavLink } from "@remix-run/react";
import { Menu, MenuTrigger, MenuPopover, MenuItem } from "~/components/ui/menu";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  DialogTrigger,
  DialogOverlay,
  DialogContent,
} from "~/components/ui/dialog";
import { UserButton } from "@clerk/remix";

export default function NavBar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:px-6">
      <nav className="flex w-full items-center justify-between">
        <div className="gap-x-1">
          <DialogTrigger>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <MenuIcon />
            </Button>
            <DialogOverlay>
              <DialogContent side="left" className="flex flex-col">
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
              </DialogContent>
            </DialogOverlay>
          </DialogTrigger>
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
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  );
}
