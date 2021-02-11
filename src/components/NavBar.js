import React from "react";
import { useSelector } from "react-redux";

import Spotify from "../auth/Spotify";
import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";

const NavBar = () => {
  const userData = useSelector((state) => state.user);
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">
          <img
            src={userData.user.imageIcon}
            className="user-icon"
            alt="user icon"
          />
          <div className="navbar-brand">{userData.user.userName}</div>
        </div>

        {userData.user.isLoggedIn && <SearchBar />}

        <div className="navbar-collapse collapse order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link" data-testid="create">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/library"} className="nav-link" data-testid="create">
                MyLibrary
              </Link>
            </li>
            <Spotify />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
