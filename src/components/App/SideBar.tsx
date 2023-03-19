import { NavLink } from "react-router-dom";
import { FaCalendarDay, FaCalendarAlt } from "react-icons/fa";
import { BsKanbanFill } from "react-icons/bs";

export const SideBar = () => {
  return (
    <aside className="menu col-span-2 bg-base-200">
      <ul>
        <li>
          <NavLink to="/app/today">
            <FaCalendarDay />
            Today
          </NavLink>
          <NavLink to="/app/calendar">
            <FaCalendarAlt />
            Calendar
          </NavLink>
          <NavLink to="/app/taskboard">
            <BsKanbanFill />
            Taskboard
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
