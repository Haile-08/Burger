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
    </Aux>
  );
};

export default Ordersummary;
