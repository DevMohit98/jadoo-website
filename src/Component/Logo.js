import React from "react";
import axon from "../Assests/axon.svg";
import jetstar from "../Assests/jetstar.svg";
import expedia from "../Assests/expedia.svg";
import qantas from "../Assests/qantas.svg";
import alitalia from "../Assests/alitalia.svg";
const Logo = () => {
  return (
    <section className="bg p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg col-md-4 col-sm-4 col-12 d-flex justify-content-center">
            <img src={axon} alt="axon" />
          </div>
          <div className="col-lg col-md-4 col-sm-4 col-12  d-flex justify-content-center">
            <img src={jetstar} alt="axon" />
          </div>
          <div className="col-lg col-md-4 col-sm-4 col-12  d-flex justify-content-center">
            <img src={expedia} alt="axon" />
          </div>
          <div className="col-lg col-md-4 col-sm-4 col-12  d-flex justify-content-center">
            <img src={qantas} alt="axon" />
          </div>
          <div className="col-lg col-md-4 col-sm-4 col-12  d-flex justify-content-center">
            <img src={alitalia} alt="axon" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Logo;
