import React from "react";

function HeroSection() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="https://www.pexels.com/download/video/7687931/"  
        muted
        autoPlay
        loop
        playsInline
      />
    </div>
  );
}

export default HeroSection;