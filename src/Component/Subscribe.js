import React from "react";
import "../App.css";
import { BiEnvelope } from "react-icons/bi";
import telegram from "../Assests/telegram.svg";
const Subscribe = () => {
  return (
    <section className="bg p-4">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="subscribe-background  m-4 text-center d-flex justify-content-center align-items-center flex-column">
          <h1 className="subscribe-text mb-5">
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h1>
          <div className="d-flex inputs">
            <div className="input-group">
              <span class="input-group-text" id="basic-addon1">
                <BiEnvelope className="envelop" />
              </span>
              <input
                type="text"
                className="subscribe-input"
                placeholder="Your email"
              />
            </div>

            <button className="subscribe-button">Subscribe</button>
          </div>
          <img src={telegram} alt="tele" className="subscribe-tele" />
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
