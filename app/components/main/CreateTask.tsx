import React, { Dispatch, useRef, FormEvent } from "react";
import { useFireStore } from "~/contexts/FirestoreContext";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type  CreateTaskProps ={
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

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
  const selectRef = useRef<HTMLSelectElement>(null);
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      titleRef.current &&
      descRef.current &&
      dateRef.current &&
      selectRef.current &&
      addTask
    ) {
      try {
        await addTask(
          titleRef.current.value,
          descRef.current.value,
          dateRef.current.value,
          selectRef.current.value
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
      <select
        name="progress"
        ref={selectRef}
        className="select select-bordered"
        defaultValue="Not Started"
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <Button type="submit" variant="default" />
    </form>
  );
}
