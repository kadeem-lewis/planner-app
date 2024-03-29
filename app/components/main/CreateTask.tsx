import React, { Dispatch, useRef, FormEvent, useState } from "react";
import { useFireStore } from "~/contexts/FirestoreContext";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectPopover,
} from "../ui/select";
import { Key } from "react-aria-components";

type CreateTaskProps = {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export type Task = {
  title: string;
  description: string;
  dueDate: string;
  progress: string;
};

export default function CreateTask({ setIsOpen }: CreateTaskProps) {
  const { addTask } = useFireStore();
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<Key>("Not Started");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(progress);
    if (titleRef.current && descRef.current && dateRef.current && addTask) {
      try {
        await addTask(
          titleRef.current.value,
          descRef.current.value,
          dateRef.current.value,
          progress as string,
        );
        setIsOpen(false);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <form onSubmit={(e) => handleFormSubmit(e)} className="form-control">
      <Label htmlFor="title">Title:</Label>
      <Input type="text" name="title" className="input" ref={titleRef} />
      <Label htmlFor="description">Description:</Label>
      <Textarea
        name="description"
        placeholder="Description"
        className="textarea"
        ref={descRef}
      />
      <Label htmlFor="due-date">Due Date:</Label>
      <Input type="date" name="due-date" ref={dateRef} className="input" />
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
      <Button type="submit" variant="default" className="w-full">
        Submit
      </Button>
    </form>
  );
}
