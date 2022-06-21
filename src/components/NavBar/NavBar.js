import React from "react";
import { Container, Navbar as BootstrapNavBar } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { APP_TITLE } from "../../config/texts";
import "./NavBar.css";

const NavBar = () => {
  return (
    <BootstrapNavBar className="nav-bar" variant="dark" bg="darK">
      <Container>
        <BootstrapNavBar.Brand>{APP_TITLE}</BootstrapNavBar.Brand>
        <SearchBar />
      </Container>
    </BootstrapNavBar>
  );
};

export default NavBar;
