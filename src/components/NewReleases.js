import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNewReleases, getTracks } from "../auth/server";

import SongContainer from "./SongContainer";
import AlbumList from "./AlbumList";

import "../styles/_new-releases.css";

const NewReleases = () => {
  const userData = useSelector((state) => state.user);
  const [nrs, setNrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [displayList, setDisplayList] = useState(false);
  const [list, setList] = useState([]);
  const [idTracker, setIdTracker] = useState();

  useEffect(async () => {
    await fetchNewReleases();
  }, []);

  const fetchNewReleases = async () => {
    try {
      const response = await getNewReleases(userData.user.country);
      setNrs(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
      setLoading(false);
    }
  };

  const fetchTracks = async (id) => {
    try {
      if (list.length > 0 && id === idTracker) {
        setList([]);
        setDisplayList(false);
        setIdTracker();
      } else {
        const response = await getTracks(id);
        setList(response);
        setDisplayList(true);
        setIdTracker(id);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
      setLoading(false);
    }
  };

  const dataToDisplay = errorMessage ? (
    <div>{errorMessage}</div>
  ) : (
    <div>
      <div className="nr-container">
        {nrs.map((song, index) => (
          <SongContainer
            key={index}
            id={song.id}
            artist={song.artist}
            title={song.title}
            cover={song.cover}
            fetchTracks={fetchTracks}
          />
        ))}
      </div>
      {displayList && <AlbumList tracks={list} />}
    </div>
  );

  return loading ? <div>loading...</div> : dataToDisplay;
};

export default NewReleases;
