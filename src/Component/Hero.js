import React from "react";
import "../App.css";
import nav from "../Assests/nav.svg";
const Hero = () => {
  return (
    <section className="bg  p-4  text-sm-start">
      <div className="container">
        <div className="d-md-flex">
          <div>
            <h1 className="tag-line">Best detination around the world</h1>
            <p className="moto  ">Travel,enjoy and live a new</p>
            <p className="hero-discription py-3">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div classname="d-flex">
              <button type="button" className="hero-button ">
                Find Out More
              </button>
            </div>
          </div>
          <img
            src={nav}
            alt="logo"
            className="img-fluid w-50 d-none d-lg-block"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
