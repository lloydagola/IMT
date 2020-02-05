import React from "react";
import "./Welcome.css";
import Jumbotron from '../Jumbotron';

class Welcome extends React.Component {  

  

  render() {
    return (
      <section className="welcome">
        <Jumbotron content={
            {
              title:"India Medical Travel", 
              description:`Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Obcaecati, aliquid consequatur voluptatem quos vitae sit, 
              nostrum facere deleniti laborum placeat, impedit qui reiciendis 
              ullam iste. Corrupti temporibus est neque iste.`,
              text:`Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Obcaecati, aliquid consequatur voluptatem quos vitae sit, 
              nostrum facere deleniti laborum placeat, impedit qui reiciendis 
              ullam iste. Corrupti temporibus est neque iste..`,
              button:`Learn more`
              }
              
            }/>       
        
           
          
           <div className="welcome-area-widget">
              <p>IMT KENYA</p>
              <h1>2020</h1>
          </div> 
        </section>
    );
  }
}

export default Welcome;
