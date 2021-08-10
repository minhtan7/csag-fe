import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" className="publickNavbar">
        <Container>
          <Navbar.Brand as={Link} to="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/products">
                Shipper
              </Nav.Link>
              <Nav.Link as={Link} to="/packages">
                {" "}
                Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="break"></div>
    </>
  );
};

export default PublicNavbar;
