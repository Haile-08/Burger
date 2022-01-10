import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import Buildcontrols from "../../components/Burger/Buildcontrols/Buildcontrols";

const IngredientPrice = {
  salad: 0.6,
  cheese: 0.9,
  meat: 1.2,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
    totalprice: 4,
  };

  addIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    const updatedcount = oldcount + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedcount;
    const priceaddition = IngredientPrice[type] + this.state.totalprice;
  };
  RemoveIngredientHandler = () => {};
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Buildcontrols />
      </Aux>
    );
  }
}

export default BurgerBuilder;
