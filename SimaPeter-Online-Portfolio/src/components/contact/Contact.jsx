import React, { useState } from 'react';
import GithubImg from '../Img/GitHub.png';
import linkedInImg from '../Img/LinkedIn.png';
import Instagram from '../Img/Instagram.png';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    Surname: '',
    Cellphone: '',
    Email: '',
    description: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.Email.trim()) {
      errors.Email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      errors.Email = 'Invalid email format';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can send the data here
      console.log(formData);
    }
  };

  return (
    <section className="contact" id="contact">
      <h1 className="ContactHeading">You have any projects?</h1>
      <span className="contactSubtitle">Let's chat</span>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label-name"></label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && <div className="error">{formErrors.name}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label-surname"></label>
          <input
            type="text"
            placeholder="Surname"
            name="Surname"
            className="form-control"
            id="surname"
            value={formData.Surname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label-cellphone"></label>
          <input
            type="text"
            placeholder="Cellphone Number"
            name="Cellphone"
            className="form-control"
            id="cellphone"
            value={formData.Cellphone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label-email"></label>
          <input
            type="text"
            placeholder="Email"
            name="Email"
            className="form-control"
            id="email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
          {formErrors.Email && <div className="error">{formErrors.Email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label-description"></label>
          <textarea
            placeholder="Description"
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <br></br>
        <button type="submit" className="Send-Button">
          Send
        </button>
      </form>
      <div className="social-media-links">
        <a href="https://github.com/SimaPeter96"><img src={GithubImg} alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/simamnkele-peter-b84a2118b/"><img src={linkedInImg} alt="LinkedIn" /></a>
        <a href="#"><img src={Instagram} alt="Instagram" /></a>
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
