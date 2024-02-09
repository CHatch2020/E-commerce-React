import "./App.css";
import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App grid gap-y-10">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
