import { FaCalendarDay, FaCalendarAlt } from "react-icons/fa";
import { BsKanbanFill } from "react-icons/bs";
import { Link } from "@remix-run/react";

export default function SideBar() {
  return (
    <aside className="menu col-span-2 bg-base-200">
      <ul>
        <li>
          <Link to="/app/today">
            <FaCalendarDay />
            Today
          </Link>
          <Link to="/app/calendar">
            <FaCalendarAlt />
            Calendar
          </Link>
          <Link to="/app/taskboard">
            <BsKanbanFill />
            Taskboard
          </Link>
        </li>
      </ul>
    </aside>
  );
}
