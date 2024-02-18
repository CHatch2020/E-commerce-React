import "./App.css";
import React from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Deals from "./components/Deals";

function App() {
  return (
    <Router>
      <div className="App grid gap-y-10">
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
