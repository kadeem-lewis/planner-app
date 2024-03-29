import { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import ActivityModal from "~/components/main/ActivityModal";
import { useFireStore } from "~/contexts/FirestoreContext";
import { EventInput } from "@fullcalendar/core";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

export default function Calendar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activityType, setActivityType] = useState("event");
  const { events, tasks } = useFireStore();
  const [activities, setActivities] = useState<EventInput>([]);

  console.log(activities);

  const filterActivities = useCallback(() => {
    const filteredEvents = events
      ? events.map((event) => {
          return {
            id: event.id,
            title: event.title,
            start: event.startDate,
            end: event.endDate,
          };
        })
      : [];
    const filteredTasks = tasks
      ? tasks.map((task) => {
          return {
            id: task.id,
            title: task.title,
            start: task.dueDate,
            allDay: true,
          };
        })
      : [];
    setActivities([...filteredEvents, ...filteredTasks]);
  }, [events, tasks]);

  useEffect(() => {
    filterActivities();
  }, [events, filterActivities, tasks]);
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
        events={activities}
        editable
        selectable
        select={() => setIsOpen(true)}
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add {activityType}</DialogTitle>
          </DialogHeader>
          <ActivityModal
            setIsOpen={setIsOpen}
            activityType={activityType}
          ></ActivityModal>
        </DialogContent>
      </Dialog>
    </div>
  );
}
