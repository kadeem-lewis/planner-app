import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const ActivityButton = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="btn btn-ghost m-1">
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button>Add Event</button>
        </li>
        <li>
          <button>Add Task</button>
        </li>
      </ul>
    </div>
  );
};
