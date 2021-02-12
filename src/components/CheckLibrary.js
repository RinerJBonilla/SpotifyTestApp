import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLibrary, deleteLibrarySong } from "../store/index";

import {
  addToLibraryFirebase,
  deleteLibraryFirebase,
} from "../services/library";

const CheckLibrary = ({ song, addToLib, removeToLib }) => {
  const userData = useSelector((state) => state.user);

  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  const LibraryData = useSelector((state) => state.library);

  const refreshSong = () => {
    const sang = LibraryData.library.find((el) => el.id === song.id);
    if (sang) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  useEffect(() => {
    refreshSong();
  }, [song.id]);

  const removeSong = () => {
    //console.log(song.id);
    removeToLib(song.id);
    deleteLibraryFirebase(song.id, userData.user.id)
      .then(() => {
        dispatch(deleteLibrarySong(song.id));
      })
      .catch((err) => {
        console.log(err);
      });
    setFlag(false);
  };

  const addSong = () => {
    //console.log(song);
    addToLib(song.id);
    addToLibraryFirebase(song, userData.user.id)
      .then(() => {
        dispatch(addLibrary(song));
      })
      .catch((err) => {
        console.log(err);
      });
    //dispatch(addLibrary(song));
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
