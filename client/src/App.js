import React, { Component } from "react";

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './pages/Layout';
import Home from './pages/Home';
import Hospitals from './pages/Hospitals';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';
import "./css/styles.css";

class App extends Component {

  render() {
    return (
      <Router  onUpdate={() => window.scrollTo(0, 0)} >          
        <Layout>
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/hospitals"} component={Hospitals} />
                <Route exact path={"/testimonials"} component={Testimonials} />
                <Route exact path={"/services"} component={Services} />
              </Switch>             
      </Layout>
        </Router>
    );
  }
}

export default App;
