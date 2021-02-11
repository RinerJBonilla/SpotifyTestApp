import React from "react";
import { useSelector } from "react-redux";
import Playlist from "./Playlist";

const MyLibrary = () => {
  const userData = useSelector((state) => state.user);
  return userData.user.isLoggedIn ? (
    <div>
      <div>this is your library</div>
      <Playlist />
    </div>
  ) : (
    <div>Login In to check your Current Library</div>
  );
};

export default MyLibrary;
