import { Calendar, CalendarDays, SquareKanban } from "lucide-react";
import {  NavLink } from "@remix-run/react";

export default function SideBar() {
  return (
    <aside className="hidden md:flex col-span-2 py-2 px-4 flex-col bg-muted/40 border-r">
      <nav className="font-medium">
          <NavLink to="/app/today" className="flex items-center px-4 py-2 gap-2 text-muted-foreground hover:text-primary mt-5 rounded-lg transition-all ">
            <Calendar className="size-5"/>
            <span className="font-medium">
              Today
              </span>
          </NavLink>
          <NavLink to="/app/calendar" className="flex items-center px-4 py-2 gap-2 text-muted-foreground hover:text-primary mt-5 rounded-lg transition-all">
            <CalendarDays className="size-5"/>
            <span className="font-medium">
              Calendar
            </span>
          </NavLink>
          <NavLink to="/app/taskboard" className="flex items-center px-4 py-2 gap-2 text-muted-foreground hover:text-primary mt-5 rounded-lg transition-all">
            <SquareKanban className="size-5"/>
            <span className="font-medium">
              Taskboard
            </span>
          </NavLink>
      </nav>
    </aside>
  );
}
