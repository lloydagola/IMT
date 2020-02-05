import React from "react";
import "./Description.css";


class Description extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  }
  render() {
    const Description = <>
            <div
                className="description-text"
            >
              <h1 id="description-title" className="font-48">{this.props.content.title}</h1>
              <p id="description-text">{this.props.content.text}</p>
              <p id="description-price" className="font-36" />          
            </div> 
            <div className="description-image"> 
              <div className="description-image-overlay"/>
              <div className="description-image-container">
                <img className="heavy-shadow" src={this.props.content.image} />
              </div>
            </div>
        </>
    const DescriptionInverse = <>
            <div className="description-image"> 
                <div className="description-image-overlay"/>
                <div className="description-image-container">
                  <img className="heavy-shadow" src={this.props.content.image} />
                </div>
            </div>
            <div
                className="description-text"
                data-wow-iteration="1"
                data-wow-offset="90"
                data-wow-delay=".25s"
            >
                <h1 id="description-title" className="font-48">{this.props.content.title}</h1>
                <p id="description-text">{this.props.content.text}</p>
                <p id="description-price" className="font-36" />          
            </div> 
              
              </>
    return (
      <section id="description" className={`description ${this.props.background_color ? this.props.background_color : ""}`}>
        {this.props.inverse ? DescriptionInverse : Description}        
      </section>
    );
  }
}

export default Description;
