import react from "react";

import Buildcontrol from "./Buildcontrol/Buildcontrol";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];
const Buildcontrols = (props) => {
  return (
    <div className="w-[100%] my-[20px] bg-orange-400 flex flex-col items-center m-auto py-[10px] ">
      {controls.map((ctrl) => (
        <Buildcontrol key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};

export default Buildcontrols;
