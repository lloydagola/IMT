import React from 'react';
import './styles.css';
import {NavLink} from 'react-router-dom';

 const Jumbotron = (props) => <div className="jumbotron light-shadow wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s" >
                            <h1>{props.content.title}</h1>
                            <p >{props.content.description}</p>
                            <hr/>
                            <p>{props.content.text}.</p>
                            <div className="flat-button"><NavLink to="/contacts">{props.content.button}</NavLink></div>            
                        </div>
       

export default Jumbotron;
