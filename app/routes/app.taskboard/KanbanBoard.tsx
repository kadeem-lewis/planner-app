import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";
import ActivityCard from "~/components/main/ActivityCard";
import { Event } from "~/components/main/CreateEvent";
import { Task } from "~/components/main/CreateTask";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type KanbanBoardProps = {
  name: string;
  activities: Event[] | Task[];
};

export default function KanbanBoard({ name, activities }: KanbanBoardProps) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: name,
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div className="flex w-full flex-col justify-between rounded-lg bg-muted px-4 py-6">
      <div className="text-xl font-bold">{name}</div>
      <div className="my-4 flex flex-col gap-3">
        {activities.map((activity) => {
          return <ActivityCard key={activity.title} activity={activity} />;
        })}
      </div>
      <Button variant="default" className="flex gap-2 justify-self-end">
        <Plus />
        Add Task
      </Button>
    </div>
  );
}
