import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth  flexCenter hero-container">
        {/* left side */}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Explore <br />
              Your Dream <br />
              Home
            </h1>
          </div>

          <div className="flexColStart hero-description">
            <span>Discover a Range of Tailored Properties for Your Ease</span>
            <span>
              Leave Behind the Challenges 
              of Securing Your Ideal Residence
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter starts">
            <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span className="span">+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={3300} end={2900} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Custommer</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1000} end={28} duration={4} />
                <span className="span">+</span>
              </span>
              <span className="secondaryText">Award winning</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
