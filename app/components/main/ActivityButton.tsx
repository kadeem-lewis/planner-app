import { useState } from "react";
import ActivityModal from "./ActivityModal";
import { Button } from "~/components/ui/button";

import { Menu, MenuItem, MenuPopover, MenuTrigger } from "../ui/menu";
import type { Key } from "react-aria-components";

import {
  DialogOverlay,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from "~/components/ui/dialog";
import { Icon } from "../Icon";

export default function ActivityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activityType, setActivityType] = useState("");
  const createActivity = (activity: "event" | "task") => {
    setActivityType(activity);
    setIsOpen(true);
  };

  const onMenuAction = (key: Key) => {
    console.log(key);
    if (key === "event") {
      createActivity("event");
    } else if (key === "task") {
      createActivity("task");
    }
  };

  return (
    <>
      <MenuTrigger>
        <Button variant="ghost">
          <Icon name="lucide-plus" className="size-5" />
        </Button>
        <MenuPopover>
          <Menu onAction={onMenuAction}>
            <MenuItem id="event">Add Event</MenuItem>
            <MenuItem id="task">Add Task</MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>

      <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add {activityType}</DialogTitle>
            </DialogHeader>
            <ActivityModal setIsOpen={setIsOpen} activityType={activityType} />
          </DialogContent>
        </DialogOverlay>
      </DialogTrigger>
    </>
  );
}
