import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Spotify from "../auth/Spotify";
import NewReleases from "./NewReleases";
import SearchBar from "./SearchBar";

import { removeResultsSongs } from "../store/index";

import "../styles/_home.css";
import SearchResults from "./SearchResults";

const Home = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeResultsSongs());
  }, []);

  return (
    <div>
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

          <SearchBar />

          <div className="navbar-collapse collapse order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <Spotify />
            </ul>
          </div>
        </nav>
      </div>
      {userData.user.isLoggedIn ? (
        <div>
          <NewReleases />
        </div>
      ) : (
        <div>Login In o check your Latest New Releases</div>
      )}
      <SearchResults />
    </div>
  );
};

export default Home;
