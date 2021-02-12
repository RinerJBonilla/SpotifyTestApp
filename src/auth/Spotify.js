import React, { useEffect, useState } from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import Cookies from "js-cookie";
import { setUserData } from "./server";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../store/index";

const dev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const Spotify = () => {
  const [token, setToken] = useState();
  const dispatch = useDispatch();

  const setSession = async (token) => {
    try {
      const response = await setUserData(token);
      if (response) {
        dispatch(setUser(response));
      }
    } catch (error) {
      //console.log(error);
    }
  };

  const checkSession = () => {
    if (Cookies.get("spotifyAuthToken")) {
      setToken(Cookies.get("spotifyAuthToken"));
    } else {
      dispatch(removeUser());
    }
  };

  useEffect(async () => {
    checkSession();
  }, [Cookies.get("spotifyAuthToken")]);

  const removeCookie = () => {
    Cookies.remove("spotifyAuthToken", {
      path: dev ? "" : "react-spotify-auth",
    });
    window.location = "https://spotify-test-ab921.firebaseapp.com/";
    setToken(null);
  };

  return (
    <div>
      {token ? (
        <div>
          <button type="button" class="btn btn-dark" onClick={removeCookie}>
            Logout
          </button>
        </div>
      ) : (
        <SpotifyAuth
          redirectUri="https://spotify-test-ab921.firebaseapp.com/"
          clientID={process.env.REACT_APP_SPOTIFY_CLIENT_ID}
          scopes={[
            Scopes.userReadPrivate,
            Scopes.userReadEmail,
            "user-top-read",
          ]}
          noLogo={true}
          title="Login"
          btnClassName="btn btn-warning"
          onAccessToken={(token) => {
            setSession(token);
          }}
        />
      )}
    </div>
  );
};

export default Spotify;
