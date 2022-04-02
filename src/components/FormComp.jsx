import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  {Container} from "react-bootstrap"
import NavbarComp from "./Navbar"
import Footer from "./Footer"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function FormComp() {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
     <NavbarComp/>
    <Container fluid align="center">
      <div className="row mx-auto">
    <div className="register">
      <div className="col col-3">
        <form
          id="form"
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Sign In</h2>
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>

          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>

          <input
            type="password"
            placeholder="Retype Password"
            {...register("confirmPassword")}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
          <button className="btn btn-primary">Sign In</button>
        </form>
      </div>
      </div>
    </div>
    </Container>
    {/* <hr/>
    <Footer/> */}
</>
  );
}