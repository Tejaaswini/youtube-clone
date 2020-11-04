import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div style={{marginTop:"50px"}}>
        <h1 align="center">Enter a keyword to search!</h1>
        <p align="center">
          Ahoy! This is a Youtube Clone that fetches data from Youtube Developer
          API v3
        </p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
