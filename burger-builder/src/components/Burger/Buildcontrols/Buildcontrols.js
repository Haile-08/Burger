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
      <p className="my-5 font-mono ">
        Current Price : <strong>{props.price.toFixed(2)}</strong> $
      </p>
      {controls.map((ctrl) => (
        <Buildcontrol
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
        />
      ))}
      <button
        className="my-5 border-2 p-4 rounded hover:bg-amber-600  ease-out duration-300 disabled:bg-black disabled:text-white"
        disabled={!props.purchasable}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default Buildcontrols;
