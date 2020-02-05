import React from "react";

import "../css/layout.css";
import Sidebar from "../components/Sidebar/";
import Backdrop from "../components/Backdrop/";
import SideDrawer from "../components/MobileMenu/SideDrawer";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class Layout extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      sideDrawerOpen : false
    }    
  } 

  handleDrawerToggleClick = () => this.setState(previousState => ({sideDrawerOpen : !previousState.sideDrawerOpen}))

  handleBackdropClick = () => {
    this.setState({sideDrawerOpen: false});
  }
  

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen)  {
      backdrop = <Backdrop click={this.handleBackdropClick}/>
    }
    return (
      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Navigation drawerClickHandler={this.handleDrawerToggleClick}/>
          <SideDrawer show={this.state.sideDrawerOpen} click={this.handleBackdropClick}/>
          {backdrop}    
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
