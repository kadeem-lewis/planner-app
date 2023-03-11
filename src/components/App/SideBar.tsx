import { Link } from "react-router-dom";
export const SideBar = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/app/today">Today</Link>
          <Link to="/app/calendar">Calendar</Link>
          <Link to="/app/taskboard">Taskboard</Link>
        </li>
      </ul>
    </aside>
  );
};
