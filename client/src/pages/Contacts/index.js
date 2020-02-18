import React from 'react';
import ContactForm from '../../components/ContactForm';
import WOW from 'wowjs';

export default class Contacts extends React.Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    
        new WOW.WOW().init();
      }
    render() {
        return (
            <div className="contacts wow fadeIn" data-wow-duration=".5s">
                <ContactForm/>            
        </div>
        )
    }
}

