import React from "react";
import ContactCardStyles from "./styledComponents/ContactCardStyles";
import T_Logo from "./T_Logo";

const Contact = () => {
  return (
    // Add copy to clipboard on email

    <>
      <ContactCardStyles>
        <div className="content">
          <div className="contact">Contact Me</div>
          <h1>Teo Oliver</h1>
          <p className="p-contact">
            <i className="fa fa-envelope"></i>
            <span>teo.liz.oli@gmail.com</span>
          </p>
          <p className="p-contact">
            <a
              href="https://github.com/teooliver"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              <span>github.com/teooliver</span>
            </a>
          </p>
          <p className="p-contact">
            <a
              href="https://www.linkedin.com/in/teo-oliver-84b33185"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              <span>linkedin.com/in/teooliver</span>
            </a>
          </p>
          <div className="contact-card-logo">
            <T_Logo />
          </div>
        </div>
      </ContactCardStyles>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Contact;
