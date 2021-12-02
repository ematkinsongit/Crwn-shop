import { React } from "react";

import "./App.css";
import HomePage from "./pages/homepage/Homepage.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.js";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
