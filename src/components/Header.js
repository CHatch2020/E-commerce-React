import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./Search";
import cart from "../icons/cart.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onProducts = (event) => {
    navigate("/products");
  };
  const onDeals = (event) => {
    navigate("/deals");
  };
  const onHome = (event) => {
    navigate("/home");
  };

  return (
    <header className="flex justify-between items-center border-b-2 bg-main h-14 z-10">
      <h1>FusionStyle</h1>
      <container className="flex justify-center gap-6">
        <button onClick={onHome}>Home</button>
        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button onClick={onProducts} className="focus:outline-none focus:shadow-outline">
            Products
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <p>Option 1</p>
              <p>Option 2</p>
              <p>Option 3</p>
            </div>
          )}
        </div>
        <button onClick={onDeals}>Monthly Deals</button>
        <SearchBar />
      </container>
      <img src={cart} alt="cart" />
    </header>
  );
};

export default Header;
