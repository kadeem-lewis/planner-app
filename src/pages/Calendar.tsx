import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { ActivityModal } from "../components/App/ActivityModal";

export const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activityType, setActivityType] = useState("event");
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable
        selectable
        select={() => setIsOpen(true)}
      />
      {isOpen && (
        <ActivityModal
          setIsOpen={setIsOpen}
          activityType={activityType}
          setActivityType={setActivityType}
        ></ActivityModal>
      )}
    </div>
  );
};
