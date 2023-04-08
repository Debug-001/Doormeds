import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointments from "./pages/Appointments";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
