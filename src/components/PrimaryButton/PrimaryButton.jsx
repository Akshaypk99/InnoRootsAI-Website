import React from "react";
import "./PrimaryButton.scss";

const PrimaryButton = ({ text }) => {
  return (
    <div className="primary-btn-container">
      <button className="primary-btn">
        <span>{text}</span>
      </button>
      <span className="bg-effect"></span>
      <div className="arrow-icon">
        <img src="/images/icons/primary-btn-arrow.svg" alt="arrow" />
      </div>
    </div>
  );
};

export default PrimaryButton;
