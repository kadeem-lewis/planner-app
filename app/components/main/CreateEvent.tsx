import React, { Dispatch, useRef, FormEvent } from "react";
import { useFireStore } from "~/contexts/FirestoreContext";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type CreateEventProps = {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export type Event = {
  title: string;
  startDate: string;
  endDate: string;
};

export default function CreateEvent({ setIsOpen }: CreateEventProps) {
  const { addEvent } = useFireStore();
  const titleRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      titleRef.current?.value,
      startDateRef.current?.value,
      endDateRef.current?.value,
      addEvent,
    );
    if (
      titleRef.current &&
      endDateRef.current &&
      startDateRef.current &&
      addEvent
    ) {
      try {
        await addEvent(
          titleRef.current.value,
          startDateRef.current.value,
          endDateRef.current.value,
        );
        setIsOpen(false);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <Label htmlFor="title" className="label">
        Title:
      </Label>
      <Input type="text" name="title" className="input" ref={titleRef} />
      <Label htmlFor="start-time" className="label">
        Start
      </Label>
      <Input type="datetime-local" name="start-time" ref={startDateRef} />
      <Label htmlFor="end-time" className="label">
        End
      </Label>
      <Input type="datetime-local" name="end-time" ref={endDateRef} />
      <Button type="submit" variant="default" className="w-full">
        Submit
      </Button>
    </form>
  );
}
