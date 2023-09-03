import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from '../Img/MyImg.png';
import Button from 'react-bootstrap/Button';
import './Home.css';



function Home() {
  return (
    <section className="home" id="home">
      <Container>
        <Row className="Row-Col home-col">
          <Col md={6} className="align-self-center">
            <div className="home-content">
              <h1>Hello, I'm</h1>
              <h2 className="home-content h2">Sima Peter</h2>
              <p>A Junior <span>Software Developer</span><br></br>
                I am a junior software developer based in Cape Town,
                currently building websites using front-end and back-end.
              </p>
              <Button variant='custom-home' type='submit' href="#about" >About me</Button>
            </div>
          </Col>
          <Col md={6} className='jpg'>
            <img src={Image}  alt="Image"  className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section> 
  );
}

export default Home