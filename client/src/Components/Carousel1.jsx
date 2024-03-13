import React from 'react';
import '../Styles/carousel1.css';
import backgroundImage from '../Assets/Testing.jpg'; // Update with the path of the image

const Carousel1 = () => {
  return (
    <div className="image-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay-text">
        <h1>Your Overlay Text</h1>
        <p>Additional description or call to action</p>
      </div>
    </div>
  );
};

export default Carousel1;
