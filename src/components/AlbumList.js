import React from "react";

const AlbumList = ({ tracks }) => {
  return (
    <div className="releases-track">
      {tracks.map((song, index) => (
        <div key={"tr-" + index} className="news-track">
          {song.name}
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
