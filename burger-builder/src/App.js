import React, { Component } from "react";

import Layout from "./components/Layout/layout";
import BurgerBuilder from "./container/burgerbuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
