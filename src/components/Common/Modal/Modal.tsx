import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalBackdrop from './../ModalBackdrop/ModalBackdrop';

const Modal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalBackdrop />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
    </>
  );
};

export default Modal;
