import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">User Profiles App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link as={Link} to="/profiles" className="nav-link-custom">Profiles</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
