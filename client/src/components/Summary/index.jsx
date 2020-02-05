import React from "react";
import "./Summary.css";

class Summary extends React.Component {
  render() {
    return (
      <section className="summary">
        <div>
          <div
            className="summary-image wow fadeInDown"
          >
            <img
              src={this.props.img_url}
              alt=""
            />
          </div>
        </div>
        <div
          className="summary-text dark-green  light-shadow  wow fadeInUp"
          data-wow-iteration="1"
          data-wow-delay=".5s"
          data-wow-duration=".6s"
        >
          <p>heart  of Nyanza</p>
          <div className="horizontal-line" />
          <h3 className="font-48">Lekisa Gem Country Lodge </h3>
          <p>
          Nestled on the slopes of Nguge Hills.
          </p>
        </div>
      </section>
    );
  }
}

export default Summary;
