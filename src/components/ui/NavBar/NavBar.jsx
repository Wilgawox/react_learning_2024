import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">UwU</Nav.Link>
          <Nav.Link href="#features">OwO</Nav.Link>
          <Nav.Link href="#pricing">Nouveau</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;