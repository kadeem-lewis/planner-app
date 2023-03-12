import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: boolean;
}
export const Dialog = ({ isOpen, setIsOpen, children }: Props) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          <FontAwesomeIcon icon={faX} />
        </label>
        {children}
      </div>
    </div>
  );
};
