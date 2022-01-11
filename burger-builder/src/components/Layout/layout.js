import React from "react";

import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className="my-[76px]">{props.children}</main>
  </Aux>
);

export default Layout;
