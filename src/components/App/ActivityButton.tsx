import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ActivityModal } from "./ActivityModal";

export const ActivityButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activityType, setActivityType] = useState("");
  const createActivity = (activity: string) => {
    setActivityType(activity);
    setIsOpen(true);
  };
  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end">
        <button className="btn btn-ghost m-1">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <button onClick={() => createActivity("event")}>Add Event</button>
          </li>
          <li>
            <button onClick={() => createActivity("task")}>Add Task</button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ActivityModal
          setIsOpen={setIsOpen}
          activityType={activityType}
          setActivityType={setActivityType}
        />
      )}
    </>
  );
};
