import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "../asset/images/logo.svg";

const NavbarComponent = (props) => {
  const clicked = () => {
    props.setTasksActive((prevValue) => !prevValue);
  };

  return (
    <Navbar bg="dark" variant="dark" className="position-fixed top-0 left-0" style={{ width: "100%" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" /> React Bootstrap
        </Navbar.Brand>
        <div>
          <Button variant="primary" className="me-1" onClick={clicked}>
            <i className="bi bi-card-checklist"></i>
          </Button>

          <Button variant="primary" onClick={props.handleClick}>
            <i className="bi bi-gear"></i>
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
