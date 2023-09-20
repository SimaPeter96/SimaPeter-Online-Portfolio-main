import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Img/SP-Logo .png';
import './Header.css';

function Header() {
  // Create a state variable to manage the Navbar's collapse state
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the Navbar's collapse state
  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  // Function to close the Navbar's collapse menu when a link is clicked
  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      className="NavContainer"
      expanded={expanded} // Pass the expanded state to the Navbar component
    >
      <Container>
        <Navbar.Brand href="home">
          <img src={logo} className="logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNavbar} // Toggle the Navbar when the button is clicked
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Close the Navbar when a link is clicked */}
            <Nav.Link className='NavLinks' href="#home" onClick={closeNavbar}>
              Home
            </Nav.Link>
            <Nav.Link className='NavLinks' href="#about" onClick={closeNavbar}>
              About
            </Nav.Link>
            <Nav.Link className='NavLinks' href="#skills" onClick={closeNavbar}>
              Skills
            </Nav.Link>
            <Nav.Link className='NavLinks' href="#projects" onClick={closeNavbar}>
              Projects
            </Nav.Link>
            <Nav.Link className='NavLinks' href="#contact" onClick={closeNavbar}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
