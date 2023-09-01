import React from 'react';
import { Container } from 'react-bootstrap';
import projectImage from '../Img/Mzamomtsha-Primary.png';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="Projectheading">Projects</h2>
      <Container className="project-content-container"> 
      <div className="projects-box">
        <img src={projectImage} alt=""/>
      <div className="project-layer">
          <h4 className="boxHeading">Mzamomtsha Primary School Website</h4>
          <a href="https://melodic-nasturtium-8a6e3c.netlify.app/"><i id="link" className="bx bx-link-external link"></i></a>
        </div>
       </div>
    </Container>
  </section>
  );
}

export default Projects