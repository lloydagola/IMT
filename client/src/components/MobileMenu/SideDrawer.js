import React from 'react';
import { NavLink  } from "react-router-dom";
import './SideDrawer.css';

const SideDrawer = props =>  {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (<nav className={drawerClasses}>
               <ul>
                <li><NavLink activeClassName="a-active-mobile" onClick={props.click} exact to="/">Home</NavLink ></li>
                <li><NavLink activeClassName="a-active-mobile" onClick={props.click} exact to="/testimonials">Testimonials</NavLink ></li>
                <li><NavLink activeClassName="a-active-mobile" onClick={props.click} exact to="/hospitals">Hospitals</NavLink ></li>
                <li><NavLink activeClassName="a-active-mobile" onClick={props.click} exact to="/services">Services</NavLink ></li>
               </ul>
            </nav>)
}


export default SideDrawer;
