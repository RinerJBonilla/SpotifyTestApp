import React from "react";
import { useSelector } from "react-redux";

import "../styles/_search-results.css";
import CheckLibrary from "./CheckLibrary";

const SearchResults = () => {
  const ResultsData = useSelector((state) => state.results);

  const addToLib = (id) => {};

  const removeToLib = (id) => {};

  return (
    <div className="search-result">
      <h4>Search...</h4>
      <div className="results-track">
        {ResultsData.results.length > 0 ? (
          ResultsData.results.map((song, index) => (
            <div key={"rs-" + index} className="list-track">
              <p className="track-name">{song.name}</p>
              <p className="track-artist">{song.artist}</p>
              <p className="track-album">{song.album}</p>
              <CheckLibrary
                song={song}
                addToLib={addToLib}
                removeToLib={removeToLib}
              />
            </div>
          ))
        ) : (
          <div className="no-res">no results yet</div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
