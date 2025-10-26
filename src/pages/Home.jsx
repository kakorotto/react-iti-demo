import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  InputGroup,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TableComp from "../components/TableComp";
import NavbarComp from "../components/Navbar";
import Footer from "../components/Footer";

// Quick Sign Up Form Component
function QuickSignUpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Quick Sign Up:", formData);
    setIsSubmitting(false);
    setSubmitted(true);

    // Scroll to the users table section
    setTimeout(() => {
      const tableSection = document.getElementById("users-section");
      if (tableSection) {
        tableSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 1500);
  };

  if (submitted) {
    return (
      <Alert variant="success" className="text-center">
        <i
          className="bi bi-check-circle-fill me-2"
          style={{ fontSize: "2rem" }}
        ></i>
        <h5 className="mt-2">Account Created!</h5>
        <p className="mb-0">
          Want to add more details?{" "}
          <a href="/form" style={{ color: "#667eea", fontWeight: "600" }}>
            Complete Full Registration
          </a>
        </p>
      </Alert>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Full Name</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-person-fill"></i>
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
            minLength={3}
          />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Email Address</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-envelope-fill"></i>
          </InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Password</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-lock-fill"></i>
          </InputGroup.Text>
          <Form.Control
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
          <Button
            variant="outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </Button>
        </InputGroup>
        <Form.Text className="text-muted">
          <i className="bi bi-info-circle me-1"></i>
          Minimum 6 characters
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Check
          type="checkbox"
          label={
            <small>
              I agree to the{" "}
              <a href="#terms" style={{ color: "#667eea" }}>
                Terms & Conditions
              </a>
            </small>
          }
          required
        />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            border: "none",
            fontWeight: "600",
          }}
        >
          {isSubmitting ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                className="me-2"
              />
              Creating Account...
            </>
          ) : (
            <>
              <i className="bi bi-rocket-takeoff-fill me-2"></i>
              Create Free Account
            </>
          )}
        </Button>
      </div>

      <p className="text-center mt-3 mb-0">
        <small className="text-muted">
          Want more options?{" "}
          <a
            href="/form"
            style={{
              color: "#667eea",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Full Sign Up Form
          </a>
        </small>
      </p>
    </Form>
  );
}

function Home() {
  const navigate = useNavigate();

  const heroStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    padding: "5rem 0",
    marginBottom: "3rem",
  };

  const statCardStyle = {
    border: "none",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    height: "100%",
  };

  const featureIconStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  };

  return (
    <>
      <NavbarComp />

      {/* Hero Section */}
      <div style={heroStyle}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">Welcome to ReactApp</h1>
              <p
                className="lead mb-4"
                style={{ fontSize: "1.2rem", opacity: 0.9 }}
              >
                Build amazing web applications with React. Fast, modern, and
                scalable solutions for your business needs.
              </p>
              <div>
                <Button
                  size="lg"
                  onClick={() => navigate("/form")}
                  style={{
                    background: "#fff",
                    color: "#667eea",
                    border: "none",
                    fontWeight: "600",
                    padding: "0.75rem 2rem",
                    marginRight: "1rem",
                    marginBottom: "0.5rem",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <i className="bi bi-rocket-takeoff-fill me-2"></i>
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline-light"
                  style={{
                    fontWeight: "600",
                    padding: "0.75rem 2rem",
                    borderWidth: "2px",
                    marginBottom: "0.5rem",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <i className="bi bi-play-circle-fill me-2"></i>
                  Learn More
                </Button>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <div
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "2rem",
                  backdropFilter: "blur(10px)",
                }}
              >
                <i
                  className="bi bi-code-square"
                  style={{ fontSize: "8rem", opacity: 0.8 }}
                ></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Stats Section */}
      <Container className="mb-5">
        <Row className="g-4">
          <Col md={3} sm={6}>
            <Card
              style={statCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Body className="text-center p-4">
                <div
                  style={{
                    ...featureIconStyle,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                    margin: "0 auto 1rem",
                  }}
                >
                  <i className="bi bi-people-fill"></i>
                </div>
                <h2 className="fw-bold mb-2">10K+</h2>
                <p className="text-muted mb-0">Active Users</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card
              style={statCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Body className="text-center p-4">
                <div
                  style={{
                    ...featureIconStyle,
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    color: "#fff",
                    margin: "0 auto 1rem",
                  }}
                >
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h2 className="fw-bold mb-2">98%</h2>
                <p className="text-muted mb-0">Satisfaction Rate</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card
              style={statCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Body className="text-center p-4">
                <div
                  style={{
                    ...featureIconStyle,
                    background:
                      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    color: "#fff",
                    margin: "0 auto 1rem",
                  }}
                >
                  <i className="bi bi-lightning-charge-fill"></i>
                </div>
                <h2 className="fw-bold mb-2">Fast</h2>
                <p className="text-muted mb-0">Lightning Speed</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card
              style={statCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Body className="text-center p-4">
                <div
                  style={{
                    ...featureIconStyle,
                    background:
                      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                    color: "#fff",
                    margin: "0 auto 1rem",
                  }}
                >
                  <i className="bi bi-shield-check"></i>
                </div>
                <h2 className="fw-bold mb-2">100%</h2>
                <p className="text-muted mb-0">Secure</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="mb-5">
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="display-6 fw-bold mb-3">Why Choose ReactApp?</h2>
            <p className="text-muted lead">
              Discover the features that make us stand out
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4}>
            <Card
              style={statCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Body className="p-4">
                <div
                  style={{
                    ...featureIconStyle,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                  }}
                >
                  <i className="bi bi-speedometer2"></i>
                </div>
                <h5 className="fw-bold mb-3">High Performance</h5>
                <p className="text-muted">
                  Optimized for speed and efficiency. Our app delivers blazing
                  fast performance across all devices.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={statCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Body className="p-4">
                <div
                  style={{
                    ...featureIconStyle,
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    color: "#fff",
                  }}
                >
                  <i className="bi bi-phone"></i>
                </div>
                <h5 className="fw-bold mb-3">Responsive Design</h5>
                <p className="text-muted">
                  Perfect on any screen size. Mobile-first approach ensures
                  great experience everywhere.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              style={statCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Body className="p-4">
                <div
                  style={{
                    ...featureIconStyle,
                    background:
                      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    color: "#fff",
                  }}
                >
                  <i className="bi bi-palette-fill"></i>
                </div>
                <h5 className="fw-bold mb-3">Modern UI</h5>
                <p className="text-muted">
                  Beautiful and intuitive interface. Designed with user
                  experience at the forefront.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Sign Up Call to Action Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "4rem 0",
          marginBottom: "4rem",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={5} className="text-white mb-4 mb-md-0">
              <h2 className="display-5 fw-bold mb-3">Join Us Today!</h2>
              <p className="lead mb-4" style={{ opacity: 0.9 }}>
                Create your account and become part of our growing community of
                10,000+ users.
              </p>
              <div className="mb-3">
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <i
                      className="bi bi-check-circle-fill"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Free Forever</h6>
                    <small style={{ opacity: 0.8 }}>
                      No credit card required
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <i
                      className="bi bi-shield-check"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Secure & Private</h6>
                    <small style={{ opacity: 0.8 }}>
                      Your data is protected
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <i
                      className="bi bi-lightning-charge-fill"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Instant Access</h6>
                    <small style={{ opacity: 0.8 }}>
                      Get started in seconds
                    </small>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <Card
                style={{
                  border: "none",
                  borderRadius: "20px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                }}
              >
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4 text-center">Quick Sign Up</h4>
                  <QuickSignUpForm />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Users Table Section */}
      <Container className="mb-5" id="users-section">
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="display-6 fw-bold mb-3">Our Users</h2>
            <p className="text-muted lead">
              Meet some of our amazing community members
            </p>
          </Col>
        </Row>
        <TableComp />
      </Container>

      <Footer />
    </>
  );
}

export default Home;
