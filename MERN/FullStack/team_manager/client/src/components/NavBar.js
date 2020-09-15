import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = props => {
  return (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">My Team Manager</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        { props.NavLinks}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavBar
