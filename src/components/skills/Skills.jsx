import React from 'react';
import { Container} from 'react-bootstrap';
import Vid from '../Img/SimzSkills.mp4'
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <Container className='skills-content-container'>
            <h1 className='skills-heading'>Skills</h1>
            <p>These are the skills I've gained during my learnership program and internship</p>
            <video autoPlay loop muted>
            <source src={Vid} type="video/mp4" />
          </video>
      </Container>
    </section>
  );
}

export default Skills;
