import React from "react";

import "./team.css";

const Team = () => (
  <section className="team">
    <div className="team-text">
      <p className="font-36 team-hash-tag">
        <b>#weTheTeam</b>
      </p>
      <div className="team-main-text">
        <p className="team-text-vertical">
          <b>79539487</b>
        </p>
        <p className="team-text-left">
          <b>Nairobi, Kenya</b>
        </p>
        <p className="team-text-right">
          <b>Only as strong as our team</b>
        </p>
      </div>
    </div>
    <div className="team-overlay" />
  </section>
);

export default Team;
