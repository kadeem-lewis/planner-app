import React, { Dispatch } from "react";
interface Props {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
export const CreateTask = ({ setIsOpen }: Props) => {
  return (
    <form onSubmit={() => setIsOpen(false)} className="form-control">
      <label htmlFor="title" className="label">
        Title:
      </label>
      <input type="text" name="title" className="input" />
      <label htmlFor="start-time" className="label">
        Start
      </label>
      <input type="datetime-local" name="start-time" />
      <label htmlFor="end-time" className="label">
        End
      </label>
      <input type="datetime-local" name="end-time" />
      <input type="submit" value="Add" className="btn" />
    </form>
  );
};
