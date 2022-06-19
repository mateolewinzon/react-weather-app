import React from "react";
import { Container, Form, Navbar as BootstrapNavBar } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <BootstrapNavBar className="nav-bar" variant="dark" bg="darK">
      <Container>
        <BootstrapNavBar.Brand>Weather app</BootstrapNavBar.Brand>
        <Form.Group>
          <Form.Control placeholder="Search city"></Form.Control>
        </Form.Group>
      </Container>
    </BootstrapNavBar>
  );
};

export default NavBar;
