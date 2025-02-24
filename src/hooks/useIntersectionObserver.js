import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (threshold = 0.1) => {
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        },
        { threshold }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [threshold]);
  
    return ref;
  };
  
  export default useIntersectionObserver;
  
  