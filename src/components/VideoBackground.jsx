import React from 'react';

const VideoBackground = ({ videoUrl, children }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-20 inset-0 bg-black opacity-50"></div>
      <div className="relative z-30 flex items-center justify-center h-full text-white">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;