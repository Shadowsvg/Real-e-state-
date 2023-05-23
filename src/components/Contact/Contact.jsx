import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section class="c-wrapper">
      <div class="paddings innerWidth flexCenter c-container">
        {/* Left Side */}
        <div class="flexColStart c-left">
          <span className="orangeText">Contact</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            believe a good place to live can make your life better.
          </span>

          <div class="flexColStart contactModes">
          {/* First Row */}
            <div class="flexStart row">

            {/* First Mode */}
              <div class="flexColCenter mode">
                <div class="flexStart">
                  <div class="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div class="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">123 123 123 12</span>
                  </div>
                </div>
                <div class="flexCenter button">Call Now</div>
              </div>

            {/* Second Mode */}
            <div class="flexColCenter mode">
                <div class="flexStart">
                  <div class="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div class="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">123 123 123 12</span>
                  </div>
                </div>
                <div class="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* Second Row */}

            <div class="flexStart row">

            {/* Third Mode */}
              <div class="flexColCenter mode">
                <div class="flexStart">
                  <div class="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div class="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">123 123 123 12</span>
                  </div>
                </div>
                <div class="flexCenter button">Video Call Now</div>
              </div>

            {/* Fourth Mode */}
            <div class="flexColCenter mode">
                <div class="flexStart">
                  <div class="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div class="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">123 123 123 12</span>
                  </div>
                </div>
                <div class="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div class="flexCenter c-right">
          <div class="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
