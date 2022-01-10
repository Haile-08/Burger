import React from "react";

const Buildcontrol = (props) => (
  <div className="flex justify-between items-center my-2 font-mono font-san">
    <div className="font-bold w-[80px] text-white">{props.label}</div>
    <button
      className="block font-mono p-2 mx-2 w-[80px] rounded border-2 border-oragnge-900 hover:bg-orange-500 active:bg-orange-800 ease-out duration-300"
      onClick={props.added}
    >
      Add
    </button>
    <button className="block font-mono p-2 mx-2 w-[80px] rounded border-2 border-oragnge-900 hover:bg-orange-500 active:bg-orange-800 ease-out duration-300">
      Remove
    </button>
  </div>
);

export default Buildcontrol;
