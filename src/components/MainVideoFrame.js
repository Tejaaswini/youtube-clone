import React from "react";

const MainVideoFrame = ({ video }) => {
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
      <div>
        <iframe src={videoSrc} allowFullScreen title="Video player" className="video-player"/>
      </div>
      <div >
        <h2 className="video-header">{video.snippet.title}</h2>
        <p className="video-desc">{video.snippet.description}</p>
      </div>
    </div>
  )
};

export default MainVideoFrame;
