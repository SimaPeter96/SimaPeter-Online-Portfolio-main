import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GithubImg from '../Img/GitHub.png';
import linkedInImg from '../Img/LinkedIn.png';
import Instagram from '../Img/Instagram.png';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    cellphone_number: '',
    email: '',
    description: '',
  });

  const [errors, setErrors] = useState({}); // State for form validation errors

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validate the form data
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.surname) {
      newErrors.surname = 'Please enter your surname';
    }
    if (!formData.cellphone_number) {
      newErrors.cellphone_number = 'Please enter your cellphone number';
    }
    if (!formData.email) {
      newErrors.email = 'Please enter your email address';
    } else if (!/[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
  
    // Update the errors state
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      // Submit the form data
      const data = {
        name: formData.name,
        surname: formData.surname,
        cellphone_number: formData.cellphone_number,
        email: formData.email,
        description: formData.description,
      };
  
      // Send the data to the server
      const request = new XMLHttpRequest();
      request.open('POST', '/api/contact');
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));
  
      // Handle the response from the server
      request.onload = () => {
        if (request.status === 200) {
          // The request was successful
          alert('Your message has been sent!');
        } else {
          // The request was not successful
          alert('There was an error sending your message.');
        }
      };
    }
  };
  
  

  return (
    <section className='contact' id="contact">
      <h1 className="ContactHeading">You have any projects?</h1>
      <span className="contactSubtitle">Let's chat</span>
      <Form className="contactForm" onSubmit={handleSubmit}>
        <Form.Control type="text" placeholder="Name" value={formData.name} onChange={handleChange}></Form.Control>
        <Form.Control type="text" placeholder="Surname" value={formData.surname} onChange={handleChange}></Form.Control>
        <Form.Control type="text" placeholder="Cellphone Number" value={formData.cellphone_number} onChange={handleChange}></Form.Control>
        <Form.Control type="email" placeholder="Email" value={formData.email} onChange={handleChange}></Form.Control>
        <Form.Group className="textarea" controlId="Description">
          <Form.Control as="textarea" rows={3} value={formData.description} onChange={handleChange}></Form.Control>
        </Form.Group>
        {errors.name && <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>}
        {errors.surname && <Form.Control.Feedback type="invalid">{errors.surname}</Form.Control.Feedback>}
        {errors.cellphone_number && <Form.Control.Feedback type="invalid">{errors.cellphone_number}</Form.Control.Feedback>}
        {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
        <Button variant='custom-contact' type='submit'>Send</Button>
      </Form>
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
