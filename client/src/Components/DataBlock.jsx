import React, { useState } from 'react';
import '../Styles/datablock.css';

const videos = [
  '../Assets/po.mp4',
  '../Assets/tes.mp4',
  '../Assets/po.mp4'
];

const DataBlock = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="video-section">
    <video src={currentVideo} controls autoPlay className="video-player"></video>
    <div className="video-timeline">
      {videos.map((video, index) => (
        <span key={index}
              className={`dot ${currentVideo === video ? 'active' : ''}`}
              onClick={() => setCurrentVideo(video)}>
        </span>
      ))}
    </div>
  </div>
  );
};

export default DataBlock;
