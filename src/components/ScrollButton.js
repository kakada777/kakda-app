import React, { useState, useEffect } from 'react';

// ScrollButton Component
const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detecting scroll position to show or hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true); // Show the button
      } else {
        setIsVisible(false); // Hide the button
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`scroll-btn ${isVisible ? 'show' : 'hide'}`}onClick={scrollToTop}  >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollButton;
