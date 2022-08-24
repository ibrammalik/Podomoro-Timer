import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "../asset/images/logo.svg";

const NavbarComponent = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" /> React Bootstrap
        </Navbar.Brand>
        <div>
          <Button variant="primary" onClick={props.handleClick}>
            Settings
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
