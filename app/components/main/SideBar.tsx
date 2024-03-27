import { Calendar, CalendarDays, SquareKanban } from "lucide-react";
import { Link } from "@remix-run/react";

export default function SideBar() {
  return (
    <aside className="menu col-span-2 bg-muted/40 border-r">
      <ul>
        <li>
          <Link to="/app/today">
            <Calendar />
            Today
          </Link>
          <Link to="/app/calendar">
            <CalendarDays />
            Calendar
          </Link>
          <Link to="/app/taskboard">
            <SquareKanban />
            Taskboard
          </Link>
        </li>
      </ul>
    </aside>
  );
}
