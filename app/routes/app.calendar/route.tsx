import { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import ActivityModal from "~/components/main/ActivityModal";
import { EventInput } from "@fullcalendar/core";
import {
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { eq } from "drizzle-orm";
import { db } from "~/drizzle/config.server";
import { events, tasks } from "~/drizzle/schema.server";
import { useLoaderData } from "@remix-run/react";

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await getAuth(args);
  const eventData = await db
    .select()
    .from(events)
    .where(eq(events.user_id, userId!));

  const taskData = await db
    .select()
    .from(tasks)
    .where(eq(tasks.user_id, userId!));

  return json({ events: eventData, tasks: taskData });
}

export default function Calendar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activityType] = useState("event");
  const { tasks, events } = useLoaderData<typeof loader>();
  const [activities, setActivities] = useState<EventInput>([]);

  const filterActivities = useCallback(() => {
    const filteredEvents = events
      ? events.map((event) => {
          return {
            id: event.id,
            title: event.title,
            start: event.start_date && new Date(event.start_date),
            end: event.end_date && new Date(event.end_date),
          };
        })
      : [];
    const filteredTasks = tasks
      ? tasks.map((task) => {
          return {
            id: task.id,
            title: task.title,
            start: task.due_date,
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
      <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add {activityType}</DialogTitle>
            </DialogHeader>
            <ActivityModal
              setIsOpen={setIsOpen}
              activityType={activityType}
            ></ActivityModal>
          </DialogContent>
        </DialogOverlay>
      </DialogTrigger>
    </div>
  );
}
