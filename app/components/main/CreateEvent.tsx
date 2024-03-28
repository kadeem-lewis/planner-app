import React, { Dispatch, useRef, FormEvent } from "react";
import { useFireStore } from "../../contexts/FirestoreContext";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
interface Props {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
export default function CreateEvent({ setIsOpen }: Props) {
  const { addEvent } = useFireStore();
  const titleRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          endDateRef.current.value
        );
        setIsOpen(false);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <form onSubmit={(e) => handleFormSubmit(e)} className="form-control">
      <Label htmlFor="title" className="label">
        Title:
      </Label>
      <Input type="text" name="title" className="input" ref={titleRef} />
      <Label htmlFor="start-time" className="label">
        Start
      </Label>
      <input type="datetime-local" name="start-time" ref={startDateRef} />
      <Label htmlFor="end-time" className="label">
        End
      </Label>
      <input type="datetime-local" name="end-time" ref={endDateRef} />
      <Button type="submit" variant="default" />
    </form>
  );
}
