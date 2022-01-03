import React from "react";
import "./Button.css";
import propTypes from "prop-types";

const Button = ({ children, onClick, width }) => {
  return (
    <button className="button" onClick={onClick} style={{ width }}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  onclick: propTypes.func.isRequired,
  width: propTypes.number.isRequired,
};

export default Button;
