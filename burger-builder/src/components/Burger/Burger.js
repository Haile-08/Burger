import React from "react";

import Burgeringredient from "./Burgeringredient/Burgeringredient";
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Burgeringredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>please start adding ingredient</p>;
  }

  return (
    <div className="w-[100%] m-auto h-[250px] scroll text-center font-bold text-[1.2rem] sm:w-[350px] sm:h-[300px]">
      <Burgeringredient type="bread-top" />
      {transformedIngredients}
      <Burgeringredient type="bread-bottom" />
    </div>
  );
};

export default burger;
