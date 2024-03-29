import { useState } from "react";
import { Plus } from "lucide-react";
import ActivityModal from "./ActivityModal";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Dialog, DialogHeader, DialogContent, DialogTitle } from "../ui/dialog";

export default function ActivityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activityType, setActivityType] = useState("");
  const createActivity = (activity: "event" | "task") => {
    setActivityType(activity);
    setIsOpen(true);
  };

  // ! Activity button is outside of context so it cant add to db currently

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost">
            <Plus />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => createActivity("event")}>
            Add Event
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => createActivity("task")}>
            Add Task
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add {activityType}</DialogTitle>
          </DialogHeader>
          <ActivityModal setIsOpen={setIsOpen} activityType={activityType} />
        </DialogContent>
      </Dialog>
    </>
  );
}
