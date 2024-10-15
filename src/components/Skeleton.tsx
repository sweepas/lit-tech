import React from "react";

const Skeleton = ({ width, height }: { width: string; height: string }) => {
  return (
    <div className="bg-gray-200 animate-pulse" style={{ width, height }}></div>
  );
};

export default Skeleton;
