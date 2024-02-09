import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./Search";
import cart from '../icons/cart.png'

const Header = () => {
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
      <h1>Title</h1>
      <container className="flex justify-center gap-6">
        <button onClick={onHome}>Home</button>
        <button onClick={onProducts}>Products</button>
        <button onClick={onDeals}>Monthly Deals</button>
        <SearchBar />
      </container>
      <img src={cart} alt="cart" />
    </header>
  );
};

export default Header;
