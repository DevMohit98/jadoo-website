import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assests/Logo.svg";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg">
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="Logo" className="navbar-brand" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <GiHamburgerMenu className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Destinations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Flights
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Login
              </Link>
            </li>
            <button type="button" className="button ">
              Sign up
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
