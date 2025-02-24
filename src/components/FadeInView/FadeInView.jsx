import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./FadeInView.scss"; // Make sure this file exists

const FadeInView = ({ children }) => {  // Accept children as a prop
  const ref = useIntersectionObserver(0.2);


  return <div ref={ref} className="fade-inview">{children}</div>;
}

export default FadeInView;
