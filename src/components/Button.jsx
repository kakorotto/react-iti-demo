import React from "react";
import { NavLink } from "react-router-dom";

function Button(props) {
  return (
    <NavLink className="btn btn-primary text-white" to={`/profile/${props.id}`}>
      {props.children}
    </NavLink>
  );
}

export default Button;
