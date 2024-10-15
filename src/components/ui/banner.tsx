import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="fixed inset-x-0 top-0 w-full h-screen bg-custom-gray z-20 mb-70">
      <iframe
        id="background-video"
        src="https://player.vimeo.com/video/1001925454?background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0"
        allow="autoplay; fullscreen"
        className="absolute z-10 top-0 left-0 w-full h-full border-0 mb-10"
      ></iframe>
    </div>
  );
};

export default Banner;
