"use client";
import React, { useRef, useState } from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

 

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        if (isFullScreen) {
          document.exitFullscreen();
        } else {
          videoRef.current.requestFullscreen();
        }
      }
    }
    setIsFullScreen(!isFullScreen);
  };
  return (
    <div className="relative">
      <video ref={videoRef} src={videoUrl} controls className="w-96" />

      <div className="absolute top-0 right-0 p-2">
        <button
          onClick={toggleFullScreen}
          className="text-white bg-gray-900 rounded-full p-2"
        >
          {isFullScreen ? (
            <i className="fas fa-compress"></i>
          ) : (
            <i className="fas fa-expand"></i>
          )}
        </button>
        <button
          onClick={toggleMute}
          className="text-white bg-gray-900 rounded-full p-2"
        >
          {isMuted ? (
            <i className="fas fa-volume-mute"></i>
          ) : (
            <i className="fas fa-volume-up"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
