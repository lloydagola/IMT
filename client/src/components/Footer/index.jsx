import React from "react";
import "./Footer.css";
import ContactForm from "../ContactForm";

class Footer extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <section
        className="footer wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
        <div className="footer-wrapper dark-grey ">
          <div className="footer-logo">
              <div className="footer-logo-exterior white">
                <div className="footer-logo-interior  dark-grey">
                  <h1 className="font-76">IMT</h1>
                </div>
              </div>
            </div>
          <ContactForm />
        </div>
        <div />
      </section>
    );
  }
}

export default Footer;
