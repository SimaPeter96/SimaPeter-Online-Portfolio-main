import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import projectImage1 from '../Img/MzamomtshaPrimary.png';
import projectImage2 from '../Img/BasicBankApplication.png';
import projectImage3 from '../Img/FinancialCalculator.png';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="Projectheading">Projects</h2>
      <p>Here are some of the projects I've worked on and collaborated with.</p>
      <Container className="project-content-container">
        <Row>
          <Col md={4}>
            <Card className="Project-card">
              <a href="https://melodic-nasturtium-8a6e3c.netlify.app/">
                <Card.Img src={projectImage1} alt="Project 1" />
                <div className="overlay">
                  <div className="text">Mzamomtsha Primary School Website</div>
                  <div className="card-back"></div>
                </div>
              </a>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="Project-card">
              <a href="https://github.com/SimaPeter96/Basic-Bank-Application-Program">
                <Card.Img src={projectImage2} alt="Project 2" />
                <div className="overlay">
                  <div className="text">Basic Bank Application Program</div>
                </div>
              </a>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="Project-card">
              <a href="https://github.com/SimaPeter96/Financial_Calculator">
                <Card.Img src={projectImage3} alt="Project 3" />
                <div className="overlay">
                  <div className="text">Financial Calculator</div>
                </div>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
