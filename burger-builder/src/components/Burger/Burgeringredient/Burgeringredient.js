import React, { Component } from "react";
import PropTypes from "prop-types";

class Burgeringredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className=""></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className="">
            <div className=""></div>
            <div className=""></div>
          </div>
        );
      case "meat":
        ingredient = <div className=""></div>;
        break;
      case "cheese":
        ingredient = <div className=""></div>;
        break;
      case "bacon":
        ingredient = <div className=""></div>;
        break;
      case "salad":
        ingredient = <div className=""></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

Burgeringredient.PropTypes = {
    type = PropTypes.string.isRequired
}
export default Burgeringredient;
