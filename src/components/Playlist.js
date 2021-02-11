import React from "react";
import { useSelector } from "react-redux";

import "../styles/_library.css";

const Playlist = () => {
  const LibraryData = useSelector((state) => state.library);

  return (
    <div className="library-result">
      {LibraryData.library.length > 0 ? (
        LibraryData.library.map((song, index) => (
          <div key={"lb-" + index} className="library-track">
            <img src={song.cover} />
            <p className="lib-name">{song.name}</p>
            <p className="lib-artist">{song.artist}</p>
            <p className="lib-album">{song.album}</p>
          </div>
        ))
      ) : (
        <div className="no-res">no music in your library</div>
      )}
    </div>
  );
};

export default Playlist;
