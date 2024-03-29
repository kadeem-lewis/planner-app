import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";
import ActivityCard from "~/components/main/ActivityCard";
import { Event } from "~/components/main/CreateEvent";
import CreateTask, { Task } from "~/components/main/CreateTask";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

type KanbanBoardProps = {
  name: string;
  activities: Event[] | Task[];
  updateBoardName: (oldName: string, newName: string) => void;
};

export default function KanbanBoard({ name, activities }: KanbanBoardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: name,
    data: {
      type: "board",
      name,
    },
  });
  const [editable, setEditable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="flex w-full flex-col border-2 opacity-40"
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex h-fit w-full flex-col justify-between rounded-lg bg-muted px-4 py-6"
    >
      <div
        className="text-xl font-bold"
        {...attributes}
        {...listeners}
        onClick={() => setEditable(true)}
      >
        {!editable ? (
          name
        ) : (
          <Input
            value={name}
            onBlur={() => setEditable(false)}
            onChange={(e) => updateBoardName(name, e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setEditable(false);
            }}
          />
        )}
      </div>
      <div className="my-4 flex flex-col gap-3">
        {activities.map((activity) => {
          return <ActivityCard key={activity.title} activity={activity} />;
        })}
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <Button variant="default" className="flex gap-2 justify-self-end">
            <Plus />
            Add Task
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>
          <CreateTask setIsOpen={setIsOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
