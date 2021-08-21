import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Category from "./Component/Category";
import Book from "./Component/Book";
import Logo from "./Component/Logo";
import Subscribe from "./Component/Subscribe";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Hero />
      <Category />
      <Book />
      <Logo />
      <Subscribe />
    </>
  );
};
export default App;
