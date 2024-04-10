import { NavLink } from "@remix-run/react";
import { Icon } from "../Icon";

export default function SideBar() {
  return (
    <aside className="col-span-2 hidden flex-col border-r bg-muted/40 px-4 py-2 md:flex">
      <nav className="font-medium">
        <NavLink
          to="/app/today"
          className="mt-5 flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary "
        >
          <Icon name="lucide-calendar" className="size-5" />
          <span className="font-medium">Today</span>
        </NavLink>
        <NavLink
          to="/app/calendar"
          className="mt-5 flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Icon name="lucide-calendar-days" className="size-5" />
          <span className="font-medium">Calendar</span>
        </NavLink>
        <NavLink
          to="/app/boards"
          className="mt-5 flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Icon name="lucide-square-kanban" className="size-5" />
          <span className="font-medium">Boards</span>
        </NavLink>
        <NavLink
          to="/app/habit-tracker"
          className="mt-5 flex items-center gap-2 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Icon name="lucide-list-checks" className="size-5" />
          <span className="font-medium">Habit Tracker</span>
        </NavLink>
      </nav>
    </aside>
  );
}
