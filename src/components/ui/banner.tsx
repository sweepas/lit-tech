import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="fixed inset-0 w-full h-screen bg-custom-gray z-20">
      <video
        id="background-video"
        src="/videos/b-vid.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ pointerEvents: "none" }}
      ></video>
    </div>
  );
};

export default Banner;
