import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-2 bg-main h-14">
      <h1>Title</h1>
      <container className="flex justify-center gap-6">
        <h3>Products(button)</h3>
        <h3>Monthly Deals(button)</h3>
        <h3>Search Bar</h3>
      </container>
      <h3>Cart(Icon)(button)</h3>
    </header>
  );
};

export default Header;
