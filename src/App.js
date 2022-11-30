import React from "react";
import "./AppBar.css";
import logo from "./AppBar.logo.svg";
import Conv from "./components/Convertisseurs/Convertisseur.js";
import NotFound from "./components/404/NotFound.js";
import "./App.css";

import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className="App">
    <header>
      <nav className="AppBar">
        <img
          className="AppBar-logo"
          src={logo}
          aria-label="people"
          alt="People"
        />
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Conv />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </div>
);

export default App;
