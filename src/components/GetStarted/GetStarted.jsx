import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section class="g-wrapper">
      <div class="paddings innerWidth g-container">
        <div class="flexColCenter inner-container">
          <span className="primaryText">Get Started With Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button class="button">
            <a href="mailto:pratikjay522000@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
