import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <section id="about" className="about">
        <div
          className="about-description"
        >
          <h1 id="about-title" className="font-76">
            Get cared for by the best.
          </h1>
          <p id="about-description">
            Home to the most eminent doctors in the world, most of whom are not just highly decorated but also pioneers in their respective areas
          </p>
          <p id="about-price" className="font-36" />
          <div className="flat-button-white">find a doctor</div>
        </div>
        <div
          className="about-image"
        >
          <img
            className="light-shadow white"
            src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
        <div
          className="about-page-number yellow"
        />
      </section>
    );
  }
}

export default About;
