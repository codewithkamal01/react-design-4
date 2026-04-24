import React from "react";
import HeroFootage from "../assets/hero_video.mp4";

function HeroSection() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src={HeroFootage}
        muted
        autoPlay
        loop
        playsInline
      />
    </div>
  );
}

export default HeroSection;
