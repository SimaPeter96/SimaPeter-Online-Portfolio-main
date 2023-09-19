import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from '../Img/AboutImg.png';
import CV from '../Img/SimamnkelePeterCV.pdf';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <Container fluid>
      <h1 className="about-Heading" >About Me</h1>
        <Row className="Row-Col-About-Col">
          <Col md={5} sm={12} xs={12} className='abt-img'>
            <div className="img-container">
              <img src={Image} alt="Image" className="about-Img" />
            </div>
          </Col>
          <Col md={6} sm={12} xs={12} className="align-self-center-about">
            <div className="about-content-text p">
             <p>Hello there! I'm a junior software developer. I build websites using front-end and back-end. I'm very creative. I'm good with graphics and design. I am very passionate and dedicated to my work. With the training experience, I've gained at my learnership, I have acquired the skills and knowledge necessary to make projects a success. Fun facts about me are, I love listening to music and dancing. And I enjoy going to the gym.</p>
            <Button className='bounce-button' variant='custom-about' type='submit' href={CV} download='' target='_blank'>Hire Me</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;
