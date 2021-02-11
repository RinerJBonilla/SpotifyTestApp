import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLibrarySong, deleteLibrarySong } from "../store/index";

const CheckLibrary = ({ song, addToLib, removeToLib }) => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  const LibraryData = useSelector((state) => state.library);

  const refreshSong = () => {
    const sang = LibraryData.library.find((el) => el.id === song.id);
    if (sang) {
      addToLib(song.id);
      setFlag(true);
    }
  };

  useEffect(() => {
    refreshSong();
  }, []);

  const removeSong = () => {
    //console.log(song.id);
    removeToLib(song.id);
    dispatch(deleteLibrarySong(song.id));
    setFlag(false);
  };

  const addSong = () => {
    //console.log(song);
    addToLib(song.id);
    dispatch(addLibrarySong(song));
    setFlag(true);
  };

  return flag ? (
    <button type="button" onClick={removeSong} className="btn btn-info">
      -
    </button>
  ) : (
    <button type="button" onClick={addSong} className="btn btn-dark">
      +
    </button>
  );
};

export default CheckLibrary;
