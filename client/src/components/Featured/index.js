import React from 'react'
import './styles.css'

export const Featured = props => {
    return (
        <section className="featured">
            <img src={props.content.featuredImage} className="heavy-shadow wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s"/>
            <div className="text wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s">
                <div className="outer-circle">
                    <div className = "inner-circle">
                        <h3 className="font-36">{props.count}</h3>
                    </div>
                </div>
                <h3 className="font-48">{props.content.title}</h3>
                <p className="vertical-text">{props.content.tags}</p>
                <p className="featured-text">{props.content.text}</p>
            </div>
        </section>
    )
}

export const FeaturedInverse = props => {
    return (
        <section className="featured-inverse">
            <div className="text-inverse wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s">
                <h3 className="font-48">{props.content.title}</h3>
                <div className="outer-circle">
                    <div className = "inner-circle">
                        <h3 className="font-36">{props.count}</h3>
                    </div>
                </div>
                <p className="featured-text">{props.content.text}</p>
                <p className="vertical-text">{props.content.tags}</p>
            </div>
            <img src={props.content.featuredImage} className="heavy-shadow wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s"/>
        </section>
    )
}
