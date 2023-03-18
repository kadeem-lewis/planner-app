import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faCalendarDays,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
export const SideBar = () => {
  return (
    <aside className="menu col-span-2 bg-base-200">
      <ul>
        <li>
          <NavLink to="/app/today">
            <FontAwesomeIcon icon={faCalendarDay} />
            Today
          </NavLink>
          <NavLink to="/app/calendar">
            <FontAwesomeIcon icon={faCalendarDays} />
            Calendar
          </NavLink>
          <NavLink to="/app/taskboard">
            <FontAwesomeIcon icon={faTableColumns} />
            Taskboard
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
