import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GithubImg from '../Img/GitHub.png';
import linkedInImg from '../Img/LinkedIn.png';
import Instagram from '../Img/Instagram.png';
import Email from '../Img/Email.png';
import './Contact.css';


function Contact() {
  return (
    <section className='contact' id="contact">
        <h1 className="ContactHeading">You have any projects?</h1>
        <span className="contactSubtitle">Lets chat </span>
        <Form className="contactForm">
          <Form.Control type="name" placeholder="Name" onChange={(e) => console.log(e.target.value)}></Form.Control>
          <Form.Control type="surname" placeholder="Surname" ></Form.Control>
          <Form.Control type="cellphone number" placeholder="Cellphone Number" ></Form.Control>
          <Form.Control type="email" placeholder="Email" ></Form.Control>
          <Form.Group className="textarea" control Id="Description" ><Form.Control as="textarea" rows={3} /></Form.Group>
        </Form>
        <Button variant='custom-contact' type='submit'>Send</Button>
        <div className="social-media-links">
          <p><img src={GithubImg } alt=""  href=""/></p>
          <p><img src={Instagram} alt=""  href=""/></p>
          <p><img src={Email} alt="" href=""/></p>
       </div>
       <hr/>
        <div className="footer-below">
        <div className="footer-copyright">
            <p> &copy;{new Date().getFullYear()} SimaPeter. All rights reserved</p>
        </div>
    </div>
  </section>
  )
}

export default Contact