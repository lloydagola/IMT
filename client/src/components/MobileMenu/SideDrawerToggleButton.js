import React from 'react';
import './SideDrawerToggleButton.css';

const SideDrawerToggleButton = props =>  <button className="toggle-button" onClick={props.click}>
    <div className = "toggle-button_line"/>    
    <div className = "toggle-button_line"/>    
    <div className = "toggle-button_line"/>    
</button>


export default SideDrawerToggleButton;
