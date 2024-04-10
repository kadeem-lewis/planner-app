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
import { Icon } from "../Icon";

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
              <Icon name="lucide-menu" className="size-6" />
            </Button>
            <DialogOverlay>
              <DialogContent side="left" className="flex flex-col">
                <nav className="grid gap-2 p-4 font-medium">
                  <NavLink
                    to="/app/today"
                    className="flex items-center gap-4 rounded-xl text-lg font-semibold text-muted-foreground hover:text-foreground"
                  >
                    <Icon name="lucide-calendar" className="size-6" />
                    Today
                  </NavLink>
                  <NavLink
                    to="/app/calendar"
                    className="flex items-center gap-4 rounded-xl text-lg font-semibold text-muted-foreground hover:text-foreground"
                  >
                    <Icon name="lucide-calendar-days" className="size-6" />
                    Calendar
                  </NavLink>
                  <NavLink
                    to="/app/boards"
                    className="flex items-center gap-4 rounded-xl text-lg font-semibold text-muted-foreground hover:text-foreground"
                  >
                    <Icon name="lucide-square-kanban" className="size-6" />
                    Boards
                  </NavLink>
                </nav>
              </DialogContent>
            </DialogOverlay>
          </DialogTrigger>
          <Link
            to="/app/today"
            className={buttonVariants({ variant: "ghost" })}
          >
            <Icon name="lucide-home" className="size-6" />
          </Link>
        </div>
        <div className="flex items-center gap-x-1">
          <ActivityButton />
          <MenuTrigger>
            <Button variant="ghost">
              <Icon name="lucide-bell" className="size-6" />
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
