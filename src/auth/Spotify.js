import React, { useEffect, useState } from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import Cookies from "js-cookie";
import { setUserData } from "./server";
import { useDispatch } from "react-redux";
import { setUser } from "../store/index";

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
      console.log(error);
    }
  };

  useEffect(async () => {
    setToken(Cookies.get("spotifyAuthToken"));
  }, [Cookies.get("spotifyAuthToken")]);

  const removeCookie = () => {
    Cookies.remove("spotifyAuthToken", {
      path: dev ? "" : "react-spotify-auth",
    });
    window.location = dev ? "/" : "/react-spotify-auth";
    setToken(null);
  };

  return (
    <div className="container">
      {token ? (
        <div>
          <button onClick={removeCookie}>Logout</button>
        </div>
      ) : (
        <SpotifyAuth
          redirectUri={process.env.REACT_APP_REDIRECT_URI}
          clientID={process.env.REACT_APP_SPOTIFY_CLIENT_ID}
          scopes={[
            Scopes.userReadPrivate,
            Scopes.userReadEmail,
            "user-top-read",
          ]}
          noLogo={true}
          title="Login"
          onAccessToken={(token) => {
            setSession(token);
          }}
        />
      )}
    </div>
  );
};

export default Spotify;
