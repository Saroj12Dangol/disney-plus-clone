import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Detail/Details";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Details />} />
        <Route path="/login" element = {<Login />} />
      </Routes>
    </div>
  );
}

export default App;
