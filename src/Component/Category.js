import React from "react";
import "../App.css";
import sat from "../Assests/sat.svg";
import Flights from "../Assests/Flights.svg";
import Local from "../Assests/Local.svg";
import customization from "../Assests/customization.svg";
const Category = () => {
  return (
    <section className="p-5 bg">
      <h1 className="category-title text-center">category</h1>
      <h3 className="category-moto text-center p-4">We Offer Best Services</h3>
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-lg ">
            <div className="card  bg">
              <div className="card-body text-center">
                <img src={sat} alt="satelite" className="img-fluid mb-3" />
                <h3 classname="card-title p-3">Calculated Weather</h3>
                <p className="card-text">
                  Built Wicket longer admire do barton vanity itself do in it.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card bg">
              <div className="card-body text-center">
                <img src={Flights} alt="satelite" className="img-fluid mb-3" />
                <h3 classname="card-title p-3">Best Flights</h3>
                <p className="card-text">
                  Engrossed listening. Park gate sell they west hard for the.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card bg">
              <div className="card-body text-center">
                <img src={Local} alt="satelite" className="img-fluid mb-3 " />
                <h3 classname="card-title p-3 ">Local Events</h3>
                <p className="card-text">
                  Barton vanity itself do in it. Preferd to men it engrossed
                  listening.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg">
              <div className="card-body text-center">
                <img
                  src={customization}
                  alt="satelite"
                  className="img-fluid mb-3"
                />
                <h3 classname="card-title p-3">Customization</h3>
                <p className="card-text">
                  We deliver outsourced aviation services for military customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
