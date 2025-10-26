import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

function NavbarComp() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // You can implement actual search logic here
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const navbarStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    padding: "0.8rem 0",
  };

  const brandStyle = {
    fontWeight: "700",
    fontSize: "1.5rem",
    color: "#fff",
    letterSpacing: "1px",
  };

  const navLinkStyle = {
    color: "rgba(255, 255, 255, 0.85)",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    transition: "all 0.3s ease",
    borderRadius: "8px",
    margin: "0 0.2rem",
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    background: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
  };

  return (
    <>
      <Navbar expand="lg" variant="dark" style={navbarStyle} sticky="top">
        <Container fluid className="px-4">
          <Navbar.Brand href="/home" style={brandStyle}>
            <i className="bi bi-rocket-takeoff-fill me-2"></i>
            ReactApp
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavLink
                to="/home"
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
              >
                <i className="bi bi-house-door-fill me-1"></i>
                Home
              </NavLink>

              <NavLink
                to="/form"
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? activeNavLinkStyle : navLinkStyle
                }
              >
                <i className="bi bi-pencil-square me-1"></i>
                Sign Up
              </NavLink>

              <NavDropdown
                title={
                  <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                    <i className="bi bi-grid-3x3-gap-fill me-1"></i>
                    Resources
                  </span>
                }
                id="resources-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item onClick={() => navigate("/home")}>
                  <i className="bi bi-book-fill me-2 text-primary"></i>
                  Documentation
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/form")}>
                  <i className="bi bi-code-square me-2 text-success"></i>
                  API Reference
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => navigate("/err")}>
                  <i className="bi bi-bug-fill me-2 text-danger"></i>
                  Demo Error Page
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                    <i className="bi bi-info-circle-fill me-1"></i>
                    About
                  </span>
                }
                id="about-dropdown"
              >
                <NavDropdown.Item href="#team">
                  <i className="bi bi-people-fill me-2 text-info"></i>
                  Our Team
                </NavDropdown.Item>
                <NavDropdown.Item href="#contact">
                  <i className="bi bi-envelope-fill me-2 text-warning"></i>
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item href="#pricing">
                  <i className="bi bi-currency-dollar me-2 text-success"></i>
                  Pricing
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form className="d-flex me-3" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search users..."
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  borderRadius: "25px",
                  border: "2px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  paddingLeft: "1rem",
                }}
              />
              <Button
                type="submit"
                style={{
                  borderRadius: "25px",
                  background: "#fff",
                  color: "#667eea",
                  border: "none",
                  fontWeight: "600",
                  padding: "0.375rem 1.5rem",
                }}
              >
                <i className="bi bi-search me-1"></i>
                Search
              </Button>
            </Form>

            <NavDropdown
              title={
                <span style={{ color: "#fff" }}>
                  <i className="bi bi-person-circle me-1"></i>
                  Account
                </span>
              }
              id="user-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#profile">
                <i className="bi bi-person-badge-fill me-2 text-primary"></i>
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#settings">
                <i className="bi bi-gear-fill me-2 text-secondary"></i>
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#notifications">
                <i className="bi bi-bell-fill me-2 text-warning"></i>
                Notifications
                <Badge bg="danger" className="ms-2">
                  3
                </Badge>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">
                <i className="bi bi-box-arrow-right me-2 text-danger"></i>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
        .custom-dropdown .dropdown-toggle::after {
          color: rgba(255, 255, 255, 0.85);
        }
        .navbar-dark .navbar-toggler {
          border-color: rgba(255,255,255,0.3);
        }
        .navbar-dark .navbar-toggler-icon {
          filter: brightness(0) invert(1);
        }
        .nav-link:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          color: #fff !important;
          transform: translateY(-2px);
        }
        .dropdown-menu {
          border: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          border-radius: 12px;
          margin-top: 0.5rem;
        }
        .dropdown-item {
          padding: 0.6rem 1.2rem;
          transition: all 0.2s ease;
        }
        .dropdown-item:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff !important;
          transform: translateX(5px);
        }
        .dropdown-item:hover i {
          color: #fff !important;
        }
        input[type="search"]::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </>
  );
}

export default NavbarComp;
