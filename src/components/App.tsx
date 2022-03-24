import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@geefuoco/palmtree";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar
        logo={{ content: "Brainteaser", url: "/" }}
        links={[{ text: "About", url: "/about" }]}
        customClass="navbar"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
