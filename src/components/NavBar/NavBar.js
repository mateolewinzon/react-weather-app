import React from "react";
import { Container, Form, Navbar as BootstrapNavBar } from "react-bootstrap";
import { APP_TITLE, SEARCH_CITY } from "../../config/texts";
import "./NavBar.css";

const NavBar = () => {
  return (
    <BootstrapNavBar className="nav-bar" variant="dark" bg="darK">
      <Container>
        <BootstrapNavBar.Brand>{APP_TITLE}</BootstrapNavBar.Brand>
        <Form.Group>
          <Form.Control placeholder={SEARCH_CITY}></Form.Control>
        </Form.Group>
      </Container>
    </BootstrapNavBar>
  );
};

export default NavBar;
