import React from "react";

const Backdrop = (props) => {
  return props.show ? (
    <div
      className="h-screen w-screen fixed z-[100] opacity-30 left-0 top-0 bg-zinc-700"
      onClick={props.clicked}
    ></div>
  ) : null;
};

export default Backdrop;
