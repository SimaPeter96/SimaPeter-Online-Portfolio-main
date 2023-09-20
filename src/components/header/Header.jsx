import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import logo from '../Img/SP-Logo .png';
import './Header.css';


function Header() {

  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };
  



  return (
    <Navbar expand="lg" className="NavContainer" expanded={expanded} >
    <Container>
      <Navbar.Brand href="home">
        <img src={logo} className="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" onClick={closeNavbar}>Home</Nav.Link>
          <Nav.Link href="#about" onClick={closeNavbar}>About</Nav.Link>
          <Nav.Link href="#skills" onClick={closeNavbar}>Skills</Nav.Link>
          <Nav.Link href="#projects" onClick={closeNavbar} >Projects</Nav.Link>
          <Nav.Link href="#contact" onClick={closeNavbar}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header