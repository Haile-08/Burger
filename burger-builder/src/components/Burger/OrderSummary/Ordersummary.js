import React from "react";

import Aux from "../../../hoc/Aux";

const Ordersummary = (props) => {
  const ingredientsummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span className="uppercase w-auto">{igkey} </span> :
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <div className="border-2  rounded-lg w-[700px] flex justify-center">
        <h3 className="font-mono font-bold text-2xl m-4 ">Your Order</h3>
      </div>
      <p className="m-3 font-sans font-mono">
        A Burger with the following ingredients:
      </p>
      <ul className=" w-auto font-sans font-mono">{ingredientsummary}</ul>
      <p className="m-3 font-sans font-mono">Continue to cheekout? </p>
      <div className="flex  justify-center items-center">
        <button
          className="text-white m-5 bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={props.purchasecontinued}
        >
          Continue
        </button>
        <button
          className="text-gray-500 m-5 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
          onClick={props.purchasecancel}
        >
          Cancel
        </button>
      </div>
    </Aux>
  );
};

export default Ordersummary;
