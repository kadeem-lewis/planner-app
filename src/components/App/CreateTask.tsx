import React, { Dispatch, useRef, FormEvent } from "react";
import { useFireStore } from "../../contexts/FirestoreContext";
import { Timestamp } from "firebase/firestore";
interface Props {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
export default function CreateTask({ setIsOpen }: Props) {
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
      <label htmlFor="title" className="label">
        Title:
      </label>
      <input type="text" name="title" className="input" ref={titleRef} />
      <label htmlFor="description">Description:</label>
      <textarea
        name="description"
        placeholder="Description"
        className="textarea"
        ref={descRef}
      ></textarea>
      <label htmlFor="due-date">Due Date:</label>
      <input type="date" name="due-date" ref={dateRef} className="input" />
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
      <input type="submit" value="Add" className="btn" />
    </form>
  );
}
