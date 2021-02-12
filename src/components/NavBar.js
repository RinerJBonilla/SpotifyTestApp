import React from "react";
import { useSelector } from "react-redux";

import Spotify from "../auth/Spotify";
import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

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

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
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
            <li className="nav-item">
              <Spotify />
            </li>
          </ul>
          {userData.user.isLoggedIn && <SearchBar />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
