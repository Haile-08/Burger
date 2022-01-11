import React from "react";

const Modal = (props) => (
  <div
    className="h-auto w-auto absolute z-10 bg-white flex justify-center items-center flex-col m-5 rounded-lg shadow-2xl ease-out duration-500"
    style={{
      transform: props.show ? "translateY(0)" : "translateY(-100)",
      opacity: props.show ? "1" : "0",
    }}
  >
    {props.children}
  </div>
);

export default Modal;
