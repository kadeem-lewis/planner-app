import React, { useState, Dispatch } from "react";
import Dialog from "../Dialog";
import CreateEvent from "./CreateEvent";
import CreateTask from "./CreateTask";
interface Props {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  setActivityType: Dispatch<React.SetStateAction<string>>;
  activityType: string;
}
export default function ActivityModal({
  setIsOpen,
  setActivityType,
  activityType,
}: Props) {
  return (
    <Dialog setIsOpen={setIsOpen}>
      <div className="tabs tabs-boxed">
        <a
          className={`tab ${activityType === "event" ? "tab-active" : ""}`}
          onClick={() => setActivityType("event")}
        >
          Event
        </a>
        <a
          className={`tab ${activityType === "task" ? "tab-active" : ""}`}
          onClick={() => setActivityType("task")}
        >
          Task
        </a>
      </div>
      {activityType === "event" ? (
        <CreateEvent setIsOpen={setIsOpen} />
      ) : (
        <CreateTask setIsOpen={setIsOpen} />
      )}
    </Dialog>
  );
}
