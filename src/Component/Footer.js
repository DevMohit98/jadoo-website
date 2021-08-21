import React from "react";
import "../App.css";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg -4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start">
            <h3 className="logo-text">Jadoo</h3>
            <p className="footer-p">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="services-text mb-4">Company</h5>
            <p>
              <a href="#about" className="services-link">
                About
              </a>
            </p>
            <p>
              <a href="#Careers" className="services-link">
                Careers
              </a>
            </p>
            <p>
              <a href="#Mobile" className="services-link">
                Mobile
              </a>
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="services-text mb-4">Contact</h5>
            <p>
              <a href="#help" className="services-link">
                Help/FAQ
              </a>
            </p>
            <p>
              <a href="#press" className="services-link">
                Press
              </a>
            </p>
            <p>
              <a href="#affilates" className="services-link">
                Affilates
              </a>
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="services-text mb-4">More</h5>
            <p>
              <a href="#airlinefees" className="services-link">
                Airlinesfess
              </a>
            </p>
            <p>
              <a href="#airline" className="services-link">
                Airline
              </a>
            </p>
            <p>
              <a href="#tips" className="services-link">
                Low fare tips
              </a>
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <div className="social-icons d-flex flex-column">
              <button className="social">
                <FaFacebookF className="social-icon-size" />
              </button>
              <button className="social">
                <AiOutlineInstagram className="social-icon-size" />
              </button>
              <button className="social">
                <AiOutlineTwitter className="social-icon-size" />
              </button>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col--md-7 col-lg-8">
              <p className="rights-text">All rights reserved@jadoo.co</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
