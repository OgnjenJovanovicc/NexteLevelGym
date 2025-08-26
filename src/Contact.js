import React, { useRef, useEffect } from 'react';
import './Contact.css';
import { FaInstagram, FaTwitter, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = React.forwardRef((props, ref) => {
    const nameInputRef = useRef(null);

    useEffect(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }, []);

    return (
        <section className="contact-bg contact-full" ref={ref} {...props}>
          <div className="contact">
            <h2 className="contact-title">Kontakt</h2>
            <div className="contact-grid">
              <form className="contact-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input"
                  ref={nameInputRef}
                />
                <input type="email" placeholder="Your Email" className="contact-input" />
                <textarea placeholder="Your Message" rows="6" className="contact-textarea"></textarea>
                <button type="submit" className="contact-submit">
                  Send Message
                </button>
              </form>
              <div className="contact-info">
                <div>
                  <FaMapMarkerAlt className="contact-icon" />
                  <strong>Address:</strong>
                  Bulevar Kralja Aleksandra 123, Beograd
                </div>
                <div>
                  <FaPhoneAlt className="contact-icon" />
                  <strong>Phone:</strong>
                  +381 11 123 456
                </div>
                <div>
                  <FaEnvelope className="contact-icon" />
                  <strong>Email:</strong>
                  info@gym.rs
                </div>
                <div>
                  <FaClock className="contact-icon" />
                  <strong>Working Hours:</strong>
                  Mon - Sat: 08:00 - 22:00
                </div>
                <div className="contact-socials">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  });
  export default Contact;