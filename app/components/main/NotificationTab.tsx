import React from "react";

export default function NotificationTab() {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      {/* Dynamically add Notifications here */}
      <li className="disabled">
        <a>No New Notifications</a>
      </li>
    </ul>
  );
}