import { FaCalendarDay, FaCalendarAlt } from "react-icons/fa";
import { BsKanbanFill } from "react-icons/bs";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="menu col-span-2 bg-base-200">
      <ul>
        <li>
          <Link href="/main/today">
            <FaCalendarDay />
            Today
          </Link>
          <Link href="/main/calendar">
            <FaCalendarAlt />
            Calendar
          </Link>
          <Link href="/main/taskboard">
            <BsKanbanFill />
            Taskboard
          </Link>
        </li>
      </ul>
    </aside>
  );
}
