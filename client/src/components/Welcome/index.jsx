import React from "react";
import "./Welcome.css";
import Jumbotron from '../Jumbotron';

const Welcome = () => <section className="welcome">
                        <Jumbotron content={
                            {
                              title:"India Medical Travel", 
                              description:`at India med travel we connect patients with best referral medical specialists with best hospitals in india@affordable med cost.
                              `,
                              text:`We also arrange for medical visa to India promptly.
                              Arrange for pickup from airport to hospital
                              Arrange for affordable accommodation at guest houses.`,
                              button:`Learn more`
                              }
                              
                            }/>       
                        
                          
                          
                          <div className="welcome-area-widget">
                              <p>IMT KENYA</p>
                              <h1>2020</h1>
                          </div> 
                        </section>

export default Welcome;
