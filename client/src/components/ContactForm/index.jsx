import React from "react";
import "./ContactForm.css";

const axios = require("axios");

class ContactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: "",
      success: "",
      button: "SEND"
    };

    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleFormInputSubmit = this.handleFormInputSubmit.bind(this);
  }

  handleFormInputChange = e => {
    console.log(` value: ${e.target.value}`);

    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleFormInputSubmit = e => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: "",
      success: "",
      button: "SENDING..."
    });

    axios
      .post("http://localhost:3001/api/form", this.state)
      .then(res => {
        this.setState({ success: "message sent!", button: "SENT" });
        setTimeout(
          () =>
            this.setState({
              name: "",
              email: "",
              subject: "",
              message: "",
              errors: "",
              success: "",
              button: "SEND"
            }),
          3000
        );
      })
      .catch(error => {
        this.setState({
          errors:
            "sorry, an error occurred while sending your message, please try again later",
          button: "SEND"
        });
      });
  };

  render() {
    return (
      <section className="contact-us">
        <div className="contact-info">
          <div>
            <i className="fa fa-envelope" />
            Email
          </div>

          <div>indiamedtravel2@gmail.com</div>
          <div>
            <i className="fa fa-phone" />
            Phone
          </div>
          <div>+254721321086</div>         
          <div>
            <i className="fa fa-building" />
            Address
          </div>
          <div>P.O.Box 17626-00500 - Nairobi, Kenya.</div>
        </div>
        <div>
          <form className="email" onSubmit={this.handleFormInputSubmit}>
            <h1>get in touch</h1>
            <input
              type="text"
              name="name"
              required
              required
              minLength="2"
              maxLength="50"
              onChange={this.handleFormInputChange}
              placeholder="name"
            />
            <input
              type="email"
              name="email"
              required
              required
              minLength="7"
              maxLength="50"
              onChange={this.handleFormInputChange}
              placeholder="email"
            />
            <input
              name="phone"
              type="tel"
              required
              minLength="10"
              maxLength="12"
              required
              onChange={this.handleFormInputChange}
              placeholder="phone"
            />
            <textarea
              name="message"
              required
              required
              minLength="2"
              maxLength="144"
              onChange={this.handleFormInputChange}
              placeholder="type your message here"
            />
            <div className="errors">{this.state.errors}</div>
            <div className="success">{this.state.success}</div>
            <input
              type="submit"
              id="form-btn"
              value={this.state.button}
              className="flat-button-yellow"
            />
          </form>
        </div>
      </section>
    );
  }
}
export default ContactForm;
