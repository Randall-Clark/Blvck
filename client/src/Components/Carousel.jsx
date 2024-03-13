import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/carousel.css";
import sampleVideo from '../Assets/po.mp4';

const Carousel = () => {
  return (
    <div className="video-banner-container">
    <video autoPlay loop muted className="video-banner">
      <source src={sampleVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="overlay-text">
      <h1>We Build Your Success</h1>
      <p>Contact Us</p>
    </div>
  </div>
  );
};

export default Carousel;
