import React,{Component} from "react";
import {  Navbar,  Nav,  Container, NavDropdown,  Form,  FormControl,  Button,} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class NavbarComp extends Component {
  render() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
             
              <NavLink className="nav-link" to="/form">
                Form
              </NavLink>
              <NavLink className="nav-link" to="/err">
                Demo Error
              </NavLink>
             
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </>
  );
}
}

export default NavbarComp;
