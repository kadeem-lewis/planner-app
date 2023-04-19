import React, { Dispatch, useRef, FormEvent } from "react";
import { Timestamp } from "firebase/firestore";
import { useFireStore } from "../../contexts/FirestoreContext";
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
      <label htmlFor="title" className="label">
        Title:
      </label>
      <input type="text" name="title" className="input" ref={titleRef} />
      <label htmlFor="start-time" className="label">
        Start
      </label>
      <input type="datetime-local" name="start-time" ref={startDateRef} />
      <label htmlFor="end-time" className="label">
        End
      </label>
      <input type="datetime-local" name="end-time" ref={endDateRef} />
      <input type="submit" value="Add" className="btn" />
    </form>
  );
}
