import React from "react";

const VideoDetal = ({ video }) => {
  if (!video) {
    return <div>Roading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title={video.id.videoId} src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetal;
