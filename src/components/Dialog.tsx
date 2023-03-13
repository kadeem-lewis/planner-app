import React, { useRef, Dispatch } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
interface Props {
  children: React.ReactNode;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
export const Dialog = ({ children, setIsOpen }: Props) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faX} />
        </label>
        {children}
      </div>
    </div>
  );
};
