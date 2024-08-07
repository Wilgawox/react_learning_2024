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
          <Nav.Link href="#UwU">UwU</Nav.Link>
          <Nav.Link href="#OwO">OwO</Nav.Link>
          <Nav.Link href="#Unicorns?">Nouveau</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;