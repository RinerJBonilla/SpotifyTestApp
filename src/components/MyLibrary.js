import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Playlist from "./Playlist";

import { getLibraryFirebase } from "../services/library";
import { setLibrary } from "../store";

const MyLibrary = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const fetchLibrary = async () => {
    try {
      const res = await getLibraryFirebase(userData.user.id);
      if (res) {
        console.log(res);
        dispatch(setLibrary(res));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    await fetchLibrary();
  }, []);

  useEffect(() => {}, []);
  return userData.user.isLoggedIn ? (
    <div>
      <h3>This is your library</h3>
      <Playlist />
    </div>
  ) : (
    <h3>Login In to check your Current Library</h3>
  );
};

export default MyLibrary;
