import React from "react";

import Aux from "../../../hoc/Aux";
import Backdrop from "../BackDrop/BackDrop";

const Modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalclose} />
    <div
      className="h-auto w-auto absolute z-[500] bg-white flex justify-center items-center flex-col m-5 rounded-lg shadow-2xl ease-out duration-500"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;
