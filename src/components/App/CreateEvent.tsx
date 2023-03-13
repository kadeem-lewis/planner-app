import React, { Dispatch } from "react";

interface Props {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
export const CreateEvent = ({ setIsOpen }: Props) => {
  return (
    <form onSubmit={() => setIsOpen(false)} className="form-control">
      <label htmlFor="title" className="label">
        Title:
      </label>
      <input type="text" name="title" className="input" />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        placeholder="Description"
        className="textarea"
      ></textarea>
      <input type="submit" value="Add" className="btn" />
    </form>
  );
};
