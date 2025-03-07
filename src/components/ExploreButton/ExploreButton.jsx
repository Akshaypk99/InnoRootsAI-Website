import React from "react";
import "./ExploreButton.scss";

const ExploreButton = ({ text }) => {
  return (
    <div className="explore-btn-container">
      <button className="exp-btn">
        <span>{text}</span>
      </button>
      <span className="bg-effect"></span>
      <div className="arrow-icon">
        <img src="/images/icons/button-arrow.svg" alt="arrow" />
      </div>
    </div>
  );
};

export default ExploreButton;
