import React from "react";

import "../styles/_song-container.css";

const SongContainer = ({ id, artist, title, cover, fetchTracks }) => {
  return (
    <div className="song-container">
      <img
        onClick={() => fetchTracks(id)}
        className="song-cover"
        src={cover}
        alt="title"
      />
      <div className="song-data">
        <h5>{title}</h5>
        <small>by {artist}</small>
      </div>
    </div>
  );
};

export default SongContainer;
