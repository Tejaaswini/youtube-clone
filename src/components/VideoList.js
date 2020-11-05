import React from 'react';
import VideoSideList from './VideoSideList';
import "../styles/youtubeClone.css"

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoSideList key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className="main-list">{renderedVideos}</div>;
};
export default VideoList;