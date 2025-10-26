import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Alert, Spinner, Badge, ProgressBar } from "react-bootstrap";
import NavbarComp from "./Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function FormComp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(30, "First name must not exceed 30 characters")
      .matches(/^[A-Za-z\s]+$/, "Only alphabetic characters allowed"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(30, "Last name must not exceed 30 characters")
      .matches(/^[A-Za-z\s]+$/, "Only alphabetic characters allowed"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters")
      .matches(/^[a-zA-Z0-9_]+$/, "Only alphanumeric and underscore allowed"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits"),
    dateOfBirth: Yup.date()
      .required("Date of birth is required")
      .max(new Date(), "Date cannot be in the future")
      .test("age", "You must be at least 13 years old", function (value) {
        const cutoff = new Date();
        cutoff.setFullYear(cutoff.getFullYear() - 13);
        return value <= cutoff;
      }),
    country: Yup.string().required("Country is required"),
    address: Yup.string()
      .required("Address is required")
      .min(10, "Address must be at least 10 characters")
      .max(200, "Address must not exceed 200 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(40, "Password must not exceed 40 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&#]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
    newsletter: Yup.bool(),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const password = watch("password", "");

  // Calculate password strength
  React.useEffect(() => {
    let strength = 0;
    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 10;
    if (/[a-z]/.test(password)) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[@$!%*?&#]/.test(password)) strength += 15;
    setPasswordStrength(strength);
  }, [password]);

  const getPasswordStrengthLabel = () => {
    if (passwordStrength < 40) return { text: "Weak", variant: "danger" };
    if (passwordStrength < 70) return { text: "Medium", variant: "warning" };
    if (passwordStrength < 90) return { text: "Strong", variant: "info" };
    return { text: "Very Strong", variant: "success" };
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Data:", JSON.stringify(data, null, 2));
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      reset();
      setSubmitSuccess(false);
      setPasswordStrength(0);
    }, 3000);
  };

  const inputClass = (fieldName) =>
    `form-control ${errors[fieldName] ? "is-invalid" : ""} ${
      watch(fieldName) && !errors[fieldName] ? "is-valid" : ""
    }`;

  return (
    <>
      <NavbarComp />
      <Container className="py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              <div
                className="card-header text-white text-center py-4"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
              >
                <h2 className="mb-0">
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Create Account
                </h2>
                <p
                  className="mb-0 mt-2"
                  style={{ fontSize: "0.9rem", opacity: 0.9 }}
                >
                  Join us today! Fill in your details below
                </p>
              </div>

              <div className="card-body p-4">
                {submitSuccess && (
                  <Alert variant="success" className="animated fadeIn">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <strong>Success!</strong> Your account has been created
                    successfully!
                  </Alert>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Name Fields */}
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label className="form-label fw-bold">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        {...register("firstName")}
                        className={inputClass("firstName")}
                      />
                      <div className="invalid-feedback">
                        {errors.firstName?.message}
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        {...register("lastName")}
                        className={inputClass("lastName")}
                      />
                      <div className="invalid-feedback">
                        {errors.lastName?.message}
                      </div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </div>

                  {/* Username */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Username <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">@</span>
                      <input
                        type="text"
                        placeholder="johndoe123"
                        {...register("username")}
                        className={inputClass("username")}
                      />
                      <div className="invalid-feedback">
                        {errors.username?.message}
                      </div>
                      <div className="valid-feedback">Username available!</div>
                    </div>
                    <small className="text-muted">
                      {watch("username")?.length || 0}/20 characters
                    </small>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      {...register("email")}
                      className={inputClass("email")}
                    />
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                    <div className="valid-feedback">Email looks valid!</div>
                  </div>

                  {/* Phone & DOB */}
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label className="form-label fw-bold">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="1234567890"
                        {...register("phone")}
                        className={inputClass("phone")}
                      />
                      <div className="invalid-feedback">
                        {errors.phone?.message}
                      </div>
                      <div className="valid-feedback">Valid phone!</div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        Date of Birth <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        {...register("dateOfBirth")}
                        className={inputClass("dateOfBirth")}
                      />
                      <div className="invalid-feedback">
                        {errors.dateOfBirth?.message}
                      </div>
                      <div className="valid-feedback">Valid date!</div>
                    </div>
                  </div>

                  {/* Country */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Country <span className="text-danger">*</span>
                    </label>
                    <select
                      {...register("country")}
                      className={inputClass("country")}
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                      <option value="IN">India</option>
                      <option value="BR">Brazil</option>
                      <option value="MX">Mexico</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="invalid-feedback">
                      {errors.country?.message}
                    </div>
                    <div className="valid-feedback">Great choice!</div>
                  </div>

                  {/* Address */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Address <span className="text-danger">*</span>
                    </label>
                    <textarea
                      rows="2"
                      placeholder="123 Main Street, Apt 4B, City, State, ZIP"
                      {...register("address")}
                      className={inputClass("address")}
                    />
                    <div className="invalid-feedback">
                      {errors.address?.message}
                    </div>
                    <div className="valid-feedback">Address looks good!</div>
                    <small className="text-muted">
                      {watch("address")?.length || 0}/200 characters
                    </small>
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter strong password"
                        {...register("password")}
                        className={inputClass("password")}
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "🙈" : "👁️"}
                      </button>
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                    </div>
                    {password && (
                      <div className="mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <small className="text-muted">
                            Password Strength:
                          </small>
                          <Badge bg={getPasswordStrengthLabel().variant}>
                            {getPasswordStrengthLabel().text}
                          </Badge>
                        </div>
                        <ProgressBar
                          now={passwordStrength}
                          variant={getPasswordStrengthLabel().variant}
                          style={{ height: "6px" }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Retype your password"
                        {...register("confirmPassword")}
                        className={inputClass("confirmPassword")}
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? "🙈" : "👁️"}
                      </button>
                      <div className="invalid-feedback">
                        {errors.confirmPassword?.message}
                      </div>
                      <div className="valid-feedback">Passwords match!</div>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="mb-3">
                    <div className="form-check mb-2">
                      <input
                        type="checkbox"
                        {...register("acceptTerms")}
                        className={`form-check-input ${
                          errors.acceptTerms ? "is-invalid" : ""
                        }`}
                        id="acceptTerms"
                      />
                      <label className="form-check-label" htmlFor="acceptTerms">
                        I agree to the <a href="#terms">Terms and Conditions</a>{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="invalid-feedback d-block">
                        {errors.acceptTerms?.message}
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        {...register("newsletter")}
                        className="form-check-input"
                        id="newsletter"
                      />
                      <label className="form-check-label" htmlFor="newsletter">
                        Subscribe to our newsletter for updates and promotions
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={isSubmitting}
                      style={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        border: "none",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Creating Account...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-check-circle me-2"></i>
                          Create Account
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center mt-3">
                    <small className="text-muted">
                      Already have an account? <a href="#login">Sign in here</a>
                    </small>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Card */}
            <div className="card mt-3 border-0 bg-light">
              <div className="card-body">
                <h6 className="fw-bold mb-2">
                  <i className="bi bi-shield-check text-success me-2"></i>
                  Your data is secure
                </h6>
                <small className="text-muted">
                  We use industry-standard encryption to protect your personal
                  information. Your password is hashed and will never be stored
                  in plain text.
                </small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
