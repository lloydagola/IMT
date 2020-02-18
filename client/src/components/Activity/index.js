import React from "react";
import "./Activity.css";

const Activity = props => (
  <section className="activity">
    <div className="activity-container wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s" data-wow-offset="90">
      <iframe src={props.content.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"/>
      <div className="activity-text ">
        <h1>{props.content.title}</h1>
        <p>{props.content.text}</p>
      </div>
    </div>
      
  </section>
);

export default Activity;
