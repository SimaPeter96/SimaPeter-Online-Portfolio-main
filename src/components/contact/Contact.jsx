import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA
import GithubImg from '../Img/GitHub.png';
import LinkedInImg from '../Img/LinkedIn.png';
import InstagramImg from '../Img/Instagram.png';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    cellphone: '',
    email: '',
    description: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Store reCAPTCHA value

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear validation error when input changes
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.surname.trim()) {
      errors.surname = 'Surname is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.cellphone.trim()) {
      errors.cellphone = 'Cellphone number is required';
    } else if (!/^\d{10}$/.test(formData.cellphone)) {
      errors.cellphone = 'Invalid cellphone number';
    }

    // Set errors for empty fields
    Object.keys(formData).forEach((fieldName) => {
      if (!formData[fieldName].trim() && !errors[fieldName]) {
        errors[fieldName] = `${fieldName} is required`;
      }
    });

    // Validate reCAPTCHA
    if (!recaptchaValue) {
      errors.recaptcha = 'Please complete the reCAPTCHA';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can send the data here
      console.log(formData);

      // Clear the form fields after submission
      setFormData({
        name: '',
        surname: '',
        cellphone: '',
        email: '',
        description: '',
      });

      emailjs
        .sendForm(
          'Sima_Peter_Dev_Projects', // Replace with your EmailJS service ID
          'template_1cy1dvh', // Replace with your EmailJS template ID
          form.current,
          'smcFd2PZrfd3vI81P' // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  // Handle reCAPTCHA onChange event
  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <section className="contact" id="contact">
      <h1 className="ContactHeading">Do you have any projects?</h1>
      <span className="contactSubtitle">Let's chat</span>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && <div className="error">{formErrors.name}</div>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Surname"
            name="surname"
            className="form-control"
            value={formData.surname}
            onChange={handleChange}
            required
          />
          {formErrors.surname && (
            <div className="error">{formErrors.surname}</div>
          )}
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Cellphone Number"
            name="cellphone"
            className="form-control"
            value={formData.cellphone}
            onChange={handleChange}
            required
          />
          {formErrors.cellphone && (
            <div className="error">{formErrors.cellphone}</div>
          )}
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && <div className="error">{formErrors.email}</div>}
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Description"
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          
          <ReCAPTCHA
            sitekey="6LfphRgoAAAAANe2zy84XxvjG2p9Zz9K2All9hQ_" // Replace with the correct reCAPTCHA key
            onChange={handleRecaptchaChange}
          />
          {formErrors.recaptcha && (
            <div className="error">{formErrors.recaptcha}</div>
          )}
        </div>
        <br></br>
        <button type="submit" className="Send-Button">
          Send
        </button>
      </form>
      <div className="social-media-links">
        <a href="https://github.com/SimaPeter96">
          <img src={GithubImg} alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/in/simamnkele-peter-b84a2118b/">
          <img src={LinkedInImg} alt="LinkedIn Logo" />
        </a>
        <a href="#">
          <img src={InstagramImg} alt="Instagram Logo" />
        </a>
      </div>
      <hr />
      <div className="footer-below">
        <div className="footer-copyright">
          <p>&copy;{new Date().getFullYear()} SimaPeter. All rights reserved</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
