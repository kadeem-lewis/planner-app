import { FaCalendarDay, FaCalendarAlt } from "react-icons/fa";
import { BsKanbanFill } from "react-icons/bs";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="menu col-span-2 bg-base-200">
      <ul>
        <li>
          <Link href="/app/today">
            <FaCalendarDay />
            Today
          </Link>
          <Link href="/app/calendar">
            <FaCalendarAlt />
            Calendar
          </Link>
          <Link href="/app/taskboard">
            <BsKanbanFill />
            Taskboard
          </Link>
        </li>
      </ul>
    </aside>
  );
}
