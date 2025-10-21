import React from 'react';

const Video = () => {
  return (
    <div className="relative w-full h-full rounded-4xl overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
    </div>
  );
};

export default Video;
