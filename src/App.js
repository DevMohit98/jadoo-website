import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Hero />
    </>
  );
};
export default App;
