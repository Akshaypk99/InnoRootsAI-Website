import React, { useEffect, useState } from 'react'
import './CourseBanner.scss'
import aiRoboticsBanner from "../../assets/images/courses/ai-robotics-banner.jpg";
import aiMlBanner from "../../assets/images/courses/ai-ml-banner.jpg";

const courseImages = [aiRoboticsBanner, aiMlBanner];


const CourseBanner = ({ page }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (page === "courses") {
      const interval = setInterval(() => {
        setFade(true); // Start fade out effect
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % courseImages.length);
          setFade(false); // Start fade in effect
        }, 500); // Duration of fade-out
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [page]);
  
  return (
    <div className={`course-banner ${page}`}>
      <div className={`image-slider ${fade ? "fade-out" : "fade-in"}`}>
          <img src={courseImages[currentImageIndex]} alt="Course Banner" className="img-fluid" />
        </div>
    </div>
  )
}

export default CourseBanner
