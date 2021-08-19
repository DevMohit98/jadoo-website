import React from "react";
import Image from "../Assests/Image.svg";
import value1 from "../Assests/value1.svg";
import payment from "../Assests/payment.svg";
import Research from "../Assests/Research.svg";
const Book = () => {
  return (
    <section className="bg  p-4  text-md-start">
      <div className="container">
        <div className="d-md-flex align-items-center">
          <div>
            <h1 className="book-tag">Easy and Fast</h1>
            <p className="book-moto">Book Your Next Trip In 3 Easy Steps</p>
            <div className="d-flex justify-content-between flex-column">
              <div className="values d-flex align-items-center">
                <img src={value1} alt="value" className="img-fluid" />
                <div className="values-text d-flex flex-column p-3 mt-3">
                  <h1 className="value-tag">Choose Destinations</h1>
                  <p className="value-moto">
                    lorem ipsum dolor sit amet, consectetur adip
                  </p>
                </div>
              </div>
              <div className="values d-flex align-items-center">
                <img src={payment} alt="value" className="img-fluid" />
                <div className="values-text d-flex flex-column p-3 mt-3">
                  <h1 className="value-tag">Make Payment</h1>
                  <p className="value-moto">
                    lorem ipsum dolor sit amet, consectetur adip
                  </p>
                </div>
              </div>
              <div className="values d-flex align-items-center">
                <img src={Research} alt="value" className="img-fluid" />
                <div className="values-text d-flex flex-column p-3 mt-3">
                  <h1 className="value-tag">Reach Airport on Selected Date</h1>
                  <p className="value-moto">
                    lorem ipsum dolor sit amet, consectetur adip
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image}
            alt="logo"
            className="img-fluid w-50 d-none d-lg-block "
          />
        </div>
      </div>
    </section>
  );
};
export default Book;
