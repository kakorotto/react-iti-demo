import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const footerStyle = {
    background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
    color: "#fff",
    marginTop: "auto",
  };

  const linkStyle = {
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "block",
    marginBottom: "0.5rem",
  };

  const socialIconStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 0.3rem",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  return (
    <>
      <footer style={footerStyle}>
        {/* Main Footer Content */}
        <Container className="pt-5 pb-4">
          <Row className="g-4">
            {/* About Section */}
            <Col md={3} sm={6}>
              <h5 className="mb-3 fw-bold">
                <i className="bi bi-rocket-takeoff-fill me-2"></i>
                ReactApp
              </h5>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.9rem",
                }}
              >
                Building amazing web experiences with React. Fast, modern, and
                scalable solutions for your business needs.
              </p>
              <div className="mt-3">
                <a
                  href="#facebook"
                  style={{ ...socialIconStyle, background: "#3b5998" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="#twitter"
                  style={{ ...socialIconStyle, background: "#1da1f2" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="#instagram"
                  style={{ ...socialIconStyle, background: "#e4405f" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="#linkedin"
                  style={{ ...socialIconStyle, background: "#0077b5" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="#github"
                  style={{ ...socialIconStyle, background: "#333" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </Col>

            {/* Quick Links */}
            <Col md={2} sm={6}>
              <h6 className="mb-3 fw-bold text-uppercase">Quick Links</h6>
              <a
                href="/home"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>Home
              </a>
              <a
                href="/form"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>Sign Up
              </a>
              <a
                href="#about"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>About Us
              </a>
              <a
                href="#services"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>Services
              </a>
            </Col>

            {/* Resources */}
            <Col md={2} sm={6}>
              <h6 className="mb-3 fw-bold text-uppercase">Resources</h6>
              <a
                href="#docs"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>Documentation
              </a>
              <a
                href="#api"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>API Reference
              </a>
              <a
                href="#tutorials"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>Tutorials
              </a>
              <a
                href="#blog"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>Blog
              </a>
            </Col>

            {/* Support */}
            <Col md={2} sm={6}>
              <h6 className="mb-3 fw-bold text-uppercase">Support</h6>
              <a
                href="#faq"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>FAQ
              </a>
              <a
                href="#contact"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>Contact
              </a>
              <a
                href="#support"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>Help Center
              </a>
              <a
                href="#privacy"
                style={linkStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <i className="bi bi-chevron-right me-2"></i>Privacy Policy
              </a>
            </Col>

            {/* Newsletter */}
            <Col md={3} sm={12}>
              <h6 className="mb-3 fw-bold text-uppercase">Newsletter</h6>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.9rem",
                }}
              >
                Subscribe to get the latest updates and news.
              </p>
              <Form onSubmit={handleNewsletterSubmit}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      color: "#fff",
                    }}
                  />
                  <Button
                    type="submit"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "none",
                    }}
                  >
                    {subscribed ? (
                      <i className="bi bi-check-lg"></i>
                    ) : (
                      <i className="bi bi-send-fill"></i>
                    )}
                  </Button>
                </InputGroup>
              </Form>
              {subscribed && (
                <small className="text-success">
                  <i className="bi bi-check-circle-fill me-1"></i>
                  Successfully subscribed!
                </small>
              )}
            </Col>
          </Row>
        </Container>

        {/* Bottom Bar */}
        <div
          style={{
            background: "rgba(0, 0, 0, 0.2)",
            padding: "1.5rem 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                <p
                  className="mb-0"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  © {new Date().getFullYear()} ReactApp. All rights reserved.
                </p>
              </Col>
              <Col md={6} className="text-center text-md-end">
                <a
                  href="#terms"
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    marginRight: "1.5rem",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")
                  }
                >
                  Terms of Service
                </a>
                <a
                  href="#privacy"
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    marginRight: "1.5rem",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")
                  }
                >
                  Privacy Policy
                </a>
                <a
                  href="#cookies"
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")
                  }
                >
                  Cookie Policy
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>

      <style>{`
        input[type="email"]::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        input[type="email"]:focus {
          background: rgba(255, 255, 255, 0.15) !important;
          color: #fff !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
}

export default Footer;
