import React, { Fragment } from "react";
import "./About.scss";
import aboutImg from"../../assets/image/about/about img.png"

const About = () => {
  return (
    <Fragment>
      <section className="about">
        <div className="container">
          <div className="about__info">
            <div className="all__info-part">
              <div></div>
              <p>about us</p>
            </div>
            <h2 className="about__title">
              If you’re looking for a Premium Quality Tempered Glass or
              Back-cover for your Device
            </h2>
          </div>
          <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <div>
            <img className="about__img" src={aboutImg} alt="about img" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
