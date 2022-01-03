import React from "react";
import "./Pills.css";
import PropTypes from "prop-types";

const Pills = ({ local, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`pillsContainer ${selected ? "pillsContainerEnabled" : ""}`}
    >
      {local}
    </div>
  );
};

Pills.PropType = {
  local: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default Pills;
