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
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalprice: 0,
  };

  addIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    const updatedcount = oldcount + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedcount;
    const priceaddition = IngredientPrice[type] + this.state.totalprice;
    this.setState({
      totalprice: priceaddition,
      ingredients: updatedIngredient,
    });
  };
  RemoveIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    if (oldcount <= 0) {
      return;
    }
    const updatedcount = oldcount - 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedcount;
    const priceremove = this.state.totalprice - IngredientPrice[type];
    this.setState({
      totalprice: priceremove,
      ingredients: updatedIngredient,
    });
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Buildcontrols
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.RemoveIngredientHandler}
          price={this.state.totalprice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
