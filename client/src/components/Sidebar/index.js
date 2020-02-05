import React from "react";
import "./sidebar.css";

const Sidebar = () => (
  <div
    className="welcome-sidebar  wow fadeInDown "
  >
    <i className="fab fa-buffer font-36" />
    <div className="sidebar-spacer" />
    <div className="vertical-line" />
    <p>IMT</p>
    <div className="vertical-line" />
    <div className="sidebar-spacer" />
    <div className="social">
      <a href="#" target="_blank">
        <i className="fab fa-facebook-f" />
      </a>
      <a
        href="#"
        target="_blank"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        href="#"
        target="_blank"
      >
        <i className="fab fa-instagram" />
      </a>
      <a
        href="#"
        target="_blank"
      >
        <i className="fab fa-youtube" />
      </a>
    </div>
  </div>
);

export default Sidebar;
