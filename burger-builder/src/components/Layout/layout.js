import React from "react";

import Aux from "../../hoc/Aux";
const Layout = (props) => (
  <Aux>
    <div>Toolbar , Sidebar ,Backdrop</div>
    <main className="my-5">{props.children}</main>
  </Aux>
);

export default Layout;
