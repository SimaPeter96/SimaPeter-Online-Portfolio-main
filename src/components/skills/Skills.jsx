import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Vid from '../Img/SimzSkills.mp4'
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
        <video controls>
            <source src={Vid} type="video/mp4" />
          </video>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
