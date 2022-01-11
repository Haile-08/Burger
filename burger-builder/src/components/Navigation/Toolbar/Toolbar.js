import React from "react";

const Toolbar = (props) => {
  return (
    <header className="h-[56px] w-screen fixed top-0 left-0 bg-orange-700 flex justify-between items-center py-[20px] z-[90] ">
      <div>Logo</div>
      <div>Menu</div>
      <nav className="h-[100%]">nav</nav>
    </header>
  );
};

export default Toolbar;