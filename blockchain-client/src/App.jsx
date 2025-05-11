import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import Commit from "./components/Commit";
import Results from "./components/Results";
import Reveal from "./components/Reveal";
import Admin from "./components/Admin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/commit" element={<Commit />} />
        <Route path="/reveal" element={<Reveal />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
