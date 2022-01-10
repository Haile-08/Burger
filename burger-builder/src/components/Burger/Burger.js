import React, { Component } from "react";

import Burgeringredient from "./Burgeringredient/Burgeringredient";

class Burger extends Component {
  render() {
    return (
      <div>
        <Burgeringredient type="bread-top" />
        <Burgeringredient type="meat" />
        <Burgeringredient type="cheese" />
        <Burgeringredient type="bread-bottom" />
      </div>
    );
  }
}

export default Burger;
