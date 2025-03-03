import React, { useEffect } from 'react'
import './ContactUs.scss'
import Banner from '../../components/Banner/Banner'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'


const ContactUs = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className='contact-us-page'>
      <Banner />

      <div className='sec-2'>

        <div className='contact-form'>
          <div className='main-title'>
            SHARE YOUR DETAILS
          </div>
          <div className='form-section'>
            <form >
              {/* Name & Company in One Row */}
              <div className='row'>
                <div className="form-group">
                  <input type="text" id="name" placeholder=" " required />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-group">
                  <input type="text" id="company" placeholder=" " required />
                  <label htmlFor="company">Company Name</label>
                </div>
              </div>

              {/* Email & Contact Number in One Row */}
              <div className='row'>
                <div className="form-group">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-group">
                  <input type="tel" id="phone" placeholder=" " required />
                  <label htmlFor="phone">Contact Number</label>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="form-group last">
                <textarea id="message" placeholder=" " required rows="4"></textarea>
                <label htmlFor="message">Message</label>
              </div>
            </form>
            <div className='btn-container mobile'>
              <PrimaryButton text={'SUBMIT'} />
            </div>
            <div className='contact-info'>
              <div className="item">
                <div className="title">
                  Call Us
                </div>
                <div className="value">
                  +91 70258 89911
                </div>
              </div>
              <div className="item">
                <div className="title">
                  Mail Us
                </div>
                <div className="value">
                  customersupport@infolks.in
                </div>
              </div>
            </div>
          </div>
          <div className='btn-container'>
            <PrimaryButton text={'SUBMIT'} />
          </div>

        </div>

      </div>
      <div className="sec-3">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7007709643512!2d76.42880607480811!3d10.985943589175836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d5a1bd894c5f%3A0xcdfbc13c0900549d!2sInfolks%20Head%20Office!5e0!3m2!1sen!2sin!4v1740573673003!5m2!1sen!2sin"
            width="100%"
            height="600"
            className="contact-map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
