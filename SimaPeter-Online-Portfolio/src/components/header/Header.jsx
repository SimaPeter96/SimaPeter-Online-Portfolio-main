import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import logo from '../Img/SP-Logo .png';
import './Header.css';


function Header() {
  
  return (
    <Navbar expand="lg" className="NavContainer">
    <Container>
      <Navbar.Brand href="home">
        <img src={logo} className="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" >Home</Nav.Link>
          <Nav.Link href="#about" >About</Nav.Link>
          <Nav.Link href="#skills" >Skills</Nav.Link>
          <Nav.Link href="#projects" >Projects</Nav.Link>
          <Nav.Link href="#contact" >Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header