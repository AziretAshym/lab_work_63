import './Contacts.css';

const Contacts = () => {
  return (
    <>
      <div className="contactBlock">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Our Office</h3>
              <p>
                <img src="https://www.svgrepo.com/show/530593/address.svg" alt="map" className="contactImg"/>
                <strong>Address:</strong> Kyrgyzstan, Bishkek, Sovet str. 999
              </p>
              <p>
                <img src="https://www.svgrepo.com/show/530581/cell-phone.svg" alt="phone" className='contactImg'/>
                <strong>Phone:</strong> +999 999 999 999
              </p>
              <p>
                <img src="https://www.svgrepo.com/show/530587/mail.svg" alt="email" className='contactImg'/>
                <strong>Email:</strong> contact@travelulu.com
              </p>
              <p>
                <img src="https://www.svgrepo.com/show/530576/calendar.svg" alt="date" className='contactImg'/>
                <strong>Business Hours:</strong> Mon-Fri, 9AM - 6PM
              </p>
            </div>
            <div className="contact-form">
              <h3>Get in Touch</h3>
              <form>
                <input type="text" name="name" placeholder="Your Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <input type="tel" name="phone" placeholder="Your Phone Number" required/>
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

import React from 'react';
