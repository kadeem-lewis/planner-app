import React, { Dispatch, useEffect, useState } from "react";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectPopover,
} from "~/components/ui/select";
import { DateValue, Key, TextField } from "react-aria-components";
import MyDatePicker from "~/components/MyDatePicker";
import { useFetcher } from "@remix-run/react";
import { ACTIVITY } from "../constants/activities";
import { getLocalTimeZone } from "@internationalized/date";

type CreateTaskProps = {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  initialProgress?: Key;
  initialDate?: DateValue;
};

export type Task = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  progress: string;
  subtasks?: Record<string, string>[];
};

export default function CreateTask({
  setIsOpen,
  initialProgress,
}: CreateTaskProps) {
  const fetcher = useFetcher();
  const [progress, setProgress] = useState<Key>(
    initialProgress ?? "Not Started",
  );
  const [date, setDate] = useState<DateValue>();

  useEffect(() => {
    if (fetcher.state !== "loading") return;
    if (fetcher.data?.success && fetcher.data?.activity === ACTIVITY.TASK) {
      setIsOpen(false);
    }
  }, [fetcher.data?.activity, fetcher.data?.success, fetcher.state, setIsOpen]);

  return (
    <fetcher.Form method="post" action="/app" className="space-y-6">
      <TextField name="title" className="space-y-2">
        <Label>Title:</Label>
        <Input />
      </TextField>
      <div className="space-y-2">
        <Label htmlFor="description">Description:</Label>
        <Textarea name="description" placeholder="Description" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="due-date">Due Date:</Label>
        <MyDatePicker
          date={date}
          value={date}
          setDate={setDate}
          aria-label="chose task due date"
        />
      </div>
      <input
        type="hidden"
        name="due_date"
        value={date?.toDate(getLocalTimeZone()).toISOString()}
      />
      <div className="space-y-2">
        <Label htmlFor="progress">Progress:</Label>
        <Select
          name="progress"
          aria-label="task progress"
          selectedKey={progress}
          onSelectionChange={(selected) => setProgress(selected)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopover>
            <SelectContent>
              <SelectItem id="Not Started" textValue="Not Started">
                Not Started
              </SelectItem>
              <SelectItem id="In Progress" textValue="In Progress">
                In Progress
              </SelectItem>
              <SelectItem id="Completed" textValue="Completed">
                Completed
              </SelectItem>
            </SelectContent>
          </SelectPopover>
        </Select>
      </div>
      <Button
        type="submit"
        variant="default"
        name="activity"
        value={ACTIVITY.TASK}
        className="w-full"
      >
        Submit
      </Button>
    </fetcher.Form>
  );
}
