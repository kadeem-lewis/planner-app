import React from "react";
import { Dialog } from "../Dialog";
interface Props {
  isOpen: boolean;
  setIsOpen: boolean;
}
export const ActivityModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
      <form></form>
    </Dialog>
  );
};
