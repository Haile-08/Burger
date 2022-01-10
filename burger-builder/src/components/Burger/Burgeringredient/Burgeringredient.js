import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Burgeringredient.css";

class Burgeringredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = (
          <div className=" h-1/4 w-5/6 rounded-b-[30px] m-[2%] shadow-inner-[-15px_0px_rgb(193, 87, 17)] bg-gradient-to-r from-orange-300 to-orange-600  ">
            <h1 className="opacity-0">.</h1>
          </div>
        );
        break;
      case "bread-top":
        ingredient = (
          <div className="h-1/4 w-4/5 rounded-t-[50%] relative m-[2%] shadow-inner-[-15px_0px_rgb(193, 87, 17)] bg-gradient-to-r from-orange-300 to-orange-600">
            <h1 className="opacity-0">.</h1>
            <div className="h-[15%] w-[10%] absolute bg-white left-[30%] top-[50%] rounded-[40%] rotate-[-20deg] shadow-inner-[-2px_-3px_rgb(201, 201, 201)]">
              <h1 className="opacity-0">.</h1>
            </div>
            <div className="h-[15%] w-[10%] absolute bg-white left-[64%] top-[50%] rounded-[40%] rotate-[40deg] shadow-inner-[-3px_0px_rgb(201, 201, 201)]">
              <h1 className="opacity-0">.</h1>
            </div>
          </div>
        );
        break;
      case "meat":
        ingredient = (
          <div className="w-[80%] h-[8%] rounded-[15px] m-[2%] bg-gradient-to-r from-orange-800 to-orange-900 ">
            <h1 className="opacity-0">.</h1>
          </div>
        );
        break;
      case "cheese":
        ingredient = (
          <div className="w-[80%] h-[4.5%] rounded-[20px] m-[2%] bg-gradient-to-r from-yellow-500 to-yellow-600 ">
            <h1 className="opacity-0">.</h1>
          </div>
        );
        break;
      case "bacon":
        ingredient = (
          <div className="w-[80%] h-[4.5%] rounded-[20px] m-[2%] bg-gradient-to-r from-red-500 to-red-600 ">
            <h1 className="opacity-0">.</h1>
          </div>
        );
        break;
      case "salad":
        ingredient = (
          <div className="w-[80%] h-[4.5%] rounded-[20px] m-[2%] bg-gradient-to-r from-green-500 to-green-600 ">
            <h1 className="opacity-0">.</h1>
          </div>
        );
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

Burgeringredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Burgeringredient;
