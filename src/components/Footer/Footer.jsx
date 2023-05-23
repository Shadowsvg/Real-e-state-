import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="f-wrapper">
      <div class="innerWidth paddings flexCenter f-container">
        {/* left side */}
        <div class="flexColStart f-left">
          <img src="logo2.png" alt="logo" width={120} />

          <span class="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* right side */}
        <div class="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span class="secondaryText">17, Malu Nagar, Dondaicha</span>

          <div class="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
