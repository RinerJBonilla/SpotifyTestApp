import React from "react";
import CheckLibrary from "./CheckLibrary";

import "../styles/_album-list.css";

const AlbumList = ({ tracks, addToLib, removeToLib }) => {
  return (
    <div className="releases-track">
      {tracks.map((song, index) => (
        <div key={"tr-" + index} className="news-track">
          <p>{song.name}</p>
          <CheckLibrary
            song={song}
            addToLib={addToLib}
            removeToLib={removeToLib}
          />
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
