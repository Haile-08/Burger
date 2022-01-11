import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import Buildcontrols from "../../components/Burger/Buildcontrols/Buildcontrols";
import Modal from "../../components/UI /Modal/Modal";
import Ordersummary from "../../components/Burger/OrderSummary/Ordersummary";

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
    purchasable: false,
    purchaseing: false,
  };

  purchaseHandler = () => {
    this.setState({ purchaseing: true });
  };
  updatepurchase = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
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
    this.updatepurchase(updatedIngredient);
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
    this.updatepurchase(updatedIngredient);
  };
  render() {
    return (
      <Aux>
        <Modal show={this.state.purchaseing}>
          <Ordersummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <Buildcontrols
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.RemoveIngredientHandler}
          price={this.state.totalprice}
          purchasable={this.state.purchasable}
          orderd={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
