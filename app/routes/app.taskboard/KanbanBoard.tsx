import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";
import ActivityCard from "~/components/main/ActivityCard";
import CreateTask, { Task } from "~/components/main/CreateTask";
import { Input } from "~/components/ui/input";
import React, { useState } from "react";
import {
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "~/components/ui/dialog";
import { GridList, GridListItem } from "~/components/ui/grid-list";
import { useDragAndDrop } from "react-aria-components";

type KanbanBoardProps = {
  name: string;
  activities: Task[];
  setActivities: React.Dispatch<React.SetStateAction<Task[]>>;
  updateBoardName: (oldName: string, newName: string) => void;
};

export default function KanbanBoard({ name, activities }: KanbanBoardProps) {
  const [editable, setEditable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { dragAndDropHooks } = useDragAndDrop({
    getItems(keys) {},
    getDropOperation: () => "move",
    async onInsert(e) {},
    async onRootDrop(e) {},
    onDragEnd(e) {
      if (e.dropOperation === "move") {
        //use setActivities to remove
      }
    },
  });

  return (
    <div className="flex h-fit w-full flex-col justify-between rounded-lg bg-muted px-4 py-6">
      <div className="text-xl font-bold" onClick={() => setEditable(true)}>
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
      <GridList
        items={activities}
        aria-label={`${name} Kanban Board`}
        className="my-4 flex flex-col gap-3"
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => {
          return (
            <GridListItem textValue={item.title}>
              <ActivityCard activity={item} />
            </GridListItem>
          );
        }}
      </GridList>
      <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button variant="default" className="flex gap-2 justify-self-end">
          <Plus />
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
}
