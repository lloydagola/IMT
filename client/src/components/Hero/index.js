import React from 'react';
import './styles.css';

const HeroTestimonial =  {
    title:"Welcome To IMT",
    url:`/img/hero.mp4`
  }

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s" data-wow-offset="90">                
                <video controls>
                    <source src="./img/hero.mp4" type="video/mp4"/>
                </video> 
            </div>            
        </section>
    )
}
