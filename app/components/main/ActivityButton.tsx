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
import { Dialog, DialogHeader } from "../ui/dialog";
import {
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";

export default function ActivityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activityType, setActivityType] = useState("");
  const createActivity = (activity: string) => {
    setActivityType(activity);
    setIsOpen(true);
  };
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              <Plus />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DialogTrigger asChild>
              <DropdownMenuItem onClick={() => createActivity("event")}>
                Add Event
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogTrigger asChild>
              <DropdownMenuItem onClick={() => createActivity("task")}>
                Add Task
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
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
