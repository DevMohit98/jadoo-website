import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Category from "./Component/Category";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Hero />
      <Category />
    </>
  );
};
export default App;
