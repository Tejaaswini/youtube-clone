import React from "react";
import "../styles/youtubeClone.css";

const VideoSideList = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="video-list">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div>
        <div className="video-list-desc">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoSideList;
