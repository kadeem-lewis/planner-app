import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faCalendarDays,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
export const SideBar = () => {
  return (
    <aside className="menu col-span-2">
      <ul>
        <li>
          <Link to="/app/today">
            <FontAwesomeIcon icon={faCalendarDay} />
            Today
          </Link>
          <Link to="/app/calendar">
            <FontAwesomeIcon icon={faCalendarDays} />
            Calendar
          </Link>
          <Link to="/app/taskboard">
            <FontAwesomeIcon icon={faTableColumns} />
            Taskboard
          </Link>
        </li>
      </ul>
    </aside>
  );
};
