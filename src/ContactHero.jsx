// ContactHero.jsx
import React from "react";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero__container">
        <h1 className="contact-hero__title">
          Let's <span className="highlight">Connect</span>
        </h1>
        <p className="contact-hero__subtitle">
          Have a project in mind or just want to say hello? We're all ears.
        </p>
        <div className="contact-hero__cta-group">
          <a href="#contact-form" className="btn btn-primary">
            Get in Touch
          </a>
          <a href="mailto:hello@example.com" className="btn btn-secondary">
            hello@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
