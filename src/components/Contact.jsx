import React, { useState } from 'react';
import './Styles/Contact.css';
import contactImg from '../assets/service.png';
import ToastMessage from './ToastMessage';
// import './Styles/ToastMessage.css';
// import { Toast } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
  });

  const [toastData, setToastData] = useState({
    show: false,
    type: 'success',
    message: '',
  });

  const emailRegex =
    /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, text } = formData;

    if (name.trim() === '' || name.length < 2) {
      alert('Name must be at least 2 characters long and cannot be empty.');
      // setToastData({
      //   show: true,
      //   type: 'danger',
      //   message: 'Name must be at least 2 characters long and cannot be empty',
      // });
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter valid email address');
      // setToastData({
      //   show: true,
      //   type: 'danger',
      //   message: 'Please enter valid email address',
      // });
      return;
    }

    console.log('Form submitted: ', { name, email, text });

    setToastData(true);

    setFormData({
      name: '',
      email: '',
      text: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="contact-us-container">
      <div className="contact-header">
        <h1>CONTACT US</h1>
        <p>
          LET'S CONNECT: REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,
          OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <div className="contact-buttons">
            <button className="support-btn">VIA SUPPORT CHAT</button>
            <button className="call-btn">VIA CALL</button>
          </div>
          <button className="email-form-btn">VIA EMAIL FORM</button>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="E-Mail"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="TEXT"
              name="text"
              className="form-textarea"
              value={formData.text}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>

        <div className="contact-image-section">
          <img src={contactImg} alt="24/7 Service" className="service-image" />
        </div>
      </div>
      {/* <ToastMessage show={toastData} onClose={() => setToastData(false)} /> */}
    </div>
  );
};

export default Contact;
