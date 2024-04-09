import { Button } from "~/components/ui/button";
import ActivityCard from "~/components/main/ActivityCard";
import CreateTask, { type Task } from "~/components/main/CreateTask";
import { Input } from "~/components/ui/input";
import { useEffect, useState } from "react";
import {
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "~/components/ui/dialog";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { useFetcher } from "@remix-run/react";
import { Icon } from "~/components/Icon";

type KanbanBoardProps = {
  name: string;
  activities: Task[];
  id: string;
};

const KanbanBoard = ({ name, activities, id }: KanbanBoardProps) => {
  const [editable, setEditable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const fetcher = useFetcher();

  const [parent, tasksList] = useDragAndDrop<HTMLUListElement, Task>(
    activities,
    {
      group: "progressBoards",
    },
  );

  const [prevTasksList, setPrevTasksList] = useState<Task[]>([]);

  useEffect(() => {
    const addedTasks = tasksList.filter(
      (task) => !prevTasksList.includes(task),
    );

    if (addedTasks.length > 0) {
      const task = addedTasks[0];
      fetcher.submit(
        {
          taskId: task.id,
          boardName: name,
        },
        { method: "POST" },
      );
    }

    setPrevTasksList(tasksList);
  }, [fetcher, name, prevTasksList, tasksList]);

  return (
    <div className="flex h-fit w-full flex-col justify-between rounded-lg bg-muted px-4 py-6">
      <div className="drag-handle text-xl font-bold">
        {!editable ? (
          name
        ) : (
          <Input
            value={name}
            onBlur={() => setEditable(false)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setEditable(false);
            }}
          />
        )}
      </div>
      <ul ref={parent} id={id} className="my-6 flex flex-col gap-4">
        {tasksList.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            id={String(activity.id)}
          />
        ))}
      </ul>
      <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button variant="default" className="flex gap-2 justify-self-end">
          <Icon name="lucide-plus" className="size-5" />
          Add Task
        </Button>
        <DialogOverlay>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
            </DialogHeader>
            <CreateTask setIsOpen={setIsOpen} initialProgress={name} />
          </DialogContent>
        </DialogOverlay>
      </DialogTrigger>
    </div>
  );
};

export default KanbanBoard;
