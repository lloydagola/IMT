import React from 'react';
import './styles.css';

export default function Jumbotron(props) {
    return (
        <div className="jumbotron light-shadow">
            <h1>{props.content.title}</h1>
            <p >{props.content.description}</p>
            <hr/>
            <p>{props.content.text}.</p>
            <div className="flat-button">{props.content.button}</div>            
        </div>
    )
}
