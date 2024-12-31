import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Icons from '../assets/images/20241231_040333_0000.png';
import '../assets/style/Navbar.css';

const NavbarCustom = () => {
  return (
    <Navbar variant="dark" expand="md">
      <Container>
        <Navbar.Brand Link as={NavLink} to="/home">
          <img src={Icons} alt="Logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home" className="navbar-item">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="navbar-item">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="navbar-item">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="navbar-item">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;