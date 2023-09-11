import VideoPlayer from "@/app/components/VIdeoPlayer/videoplayer";
import React from "react";

const page = () => {
  const videoUrl = "/assets/video/black_hole.mp4";
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
};

export default page;
