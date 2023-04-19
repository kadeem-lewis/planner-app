import React, { Dispatch } from "react";
import { FaWindowClose } from "react-icons/fa";
interface Props {
  children: React.ReactNode;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
export default function Dialog({ children, setIsOpen }: Props) {
  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => setIsOpen(false)}
        >
          <FaWindowClose />
        </label>
        {children}
      </div>
    </div>
  );
}
