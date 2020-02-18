import React from "react";
import { NavLink  } from "react-router-dom";
import "./Navigation.css";
import SideDrawerToggleButton from '../MobileMenu/SideDrawerToggleButton';


const Navigation = props => (
      <section className="navigation light-shadow">
        <div className="nav-wrapper">         
          <SideDrawerToggleButton click={props.drawerClickHandler}/>
          <nav>
            <NavLink exact activeClassName="a-active" to="/">Home</NavLink >
            <NavLink exact activeClassName="a-active" to="/testimonials">Testimonials</NavLink >
            <NavLink exact activeClassName="a-active" to="/hospitals">Hospitals</NavLink >
            <NavLink exact activeClassName="a-active" to="/services">Services</NavLink >
            <NavLink exact activeClassName="a-active" to="/Contacts">ContactUs</NavLink >
          </nav>
          
        </div>
      </section>
    )

export default Navigation;
