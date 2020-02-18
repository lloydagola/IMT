import React, { Component } from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './pages/Layout';
import Home from './pages/Home';
import Hospitals from './pages/Hospitals';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import "./css/styles.css";

class App extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Router  onUpdate={() => window.scrollTo(0, 0)} >          
          <Switch>
            <Layout>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/hospitals"} component={Hospitals} />
                    <Route exact path={"/testimonials"} component={Testimonials} />
                    <Route exact path={"/services"} component={Services} />
                    <Route exact path={"/contacts"} component={Contacts} />
          </Layout>
          </Switch>             
        </Router>
    );
  }
}

export default App;
