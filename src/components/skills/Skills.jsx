import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../Img/skillsGIF.gif';
import Image1 from '../Img/CSSicon.png';
import Image2 from '../Img/HTMLicon.png';
import Image3 from '../Img/JSicon.png';
import Image5 from '../Img/PyIcon.png';
import Image6 from '../Img/reactIcon.png';
import Image7 from '../Img/NodeJSIcon.png';
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <Container className='skills-content-container'>
        <Row className="skills-Col">
          <Col>
            <h1 className='skills-heading'>Skills</h1>
            <p>These are the skills I've gained during my learnership program and internship</p>
          </Col>
        </Row>
        <Row className="icons-row">
          <Col md={12} className='icons-center'>
            <img src={Image2} alt="HTML" className="icon-bounce icon" /> 
            <img src={Image1} alt="CSS" className="icon-bounce icon" />
            <img src={Image3} alt="JavaScript" className="icon-bounce icon" />
            <img src={Image5} alt="Python" className="icon-bounce icon" />
            <img src={Image6} alt="React" className="icon-bounce icon" />
            <img src={Image7} alt="Node.js" className="icon-bounce icon" />
          </Col>
        </Row>
        <Row>
          <Col md={6} className='GIF'>
            <img src={Image} alt="Image" className="img-gif" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
