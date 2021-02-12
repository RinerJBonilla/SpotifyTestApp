import axios from "axios";
import Cookies from "js-cookie";

export const setUserData = async (token) => {
  try {
    if (!token) {
      throw Error("no session found");
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get("https://api.spotify.com/v1/me", config);

    //console.log(response);

    const newSession = {
      id: response.data.id,
      userName: response.data.display_name,
      imageIcon: response.data.images[0].url,
      isLoggedIn: true,
      country: response.data.country,
    };

    return newSession;
  } catch (error) {
    //console.log(error);
    return Error(error);
  }
};

export const getNewReleases = async ({ country }) => {
  try {
    const currentToken = Cookies.get("spotifyAuthToken");
    if (!currentToken) {
      throw Error("no session found");
    }

    const config = {
      headers: { Authorization: `Bearer ${currentToken}` },
    };

    const path =
      "https://api.spotify.com/v1/browse/new-releases?country=" +
      (country ? country : "US") +
      "&limit=5";

    const response = await axios.get(path, config);
    const items = response.data.albums.items;

    let newRes = [];
    for (let i = 0; i < items.length; i++) {
      newRes.push({
        id: items[i].id,
        artist: items[i].artists[0].name,
        title: items[i].name,
        cover: items[i].images[0].url,
      });
    }

    return newRes;
  } catch (error) {
    //console.log(error);
    return Error(error);
  }
};

export const getTracks = async (id, artist, title, cover) => {
  try {
    const currentToken = Cookies.get("spotifyAuthToken");
    if (!currentToken) {
      throw Error("no session found");
    }

    const config = {
      headers: { Authorization: `Bearer ${currentToken}` },
    };

    if (!id || id.length < 1) {
      throw Error("no id provided");
    }

    const path = "https://api.spotify.com/v1/albums/" + id + "/tracks";

    const response = await axios.get(path, config);
    const items = response.data.items;

    let newRes = [];
    for (let i = 0; i < items.length; i++) {
      newRes.push({
        id: items[i].id,
        name: items[i].name,
        artist: artist,
        album: title,
        cover: cover,
        added: false,
      });
    }

    return newRes;
  } catch (error) {
    //console.log(error);
    return Error(error);
  }
};

export const getResults = async (query) => {
  try {
    const currentToken = Cookies.get("spotifyAuthToken");
    if (!currentToken) {
      throw Error("no session found");
    }

    if (!query || query.length < 1) {
      throw Error("no queries found");
    }

    const config = {
      headers: { Authorization: `Bearer ${currentToken}` },
    };

    const curatedQuery = query.replace(/\s/g, "+");

    const path =
      "https://api.spotify.com/v1/search?q=" +
      curatedQuery +
      "&type=track&limit=20";

    const response = await axios.get(path, config);
    //console.log(response);
    const items = response.data.tracks.items;

    let newRes = [];
    for (let i = 0; i < items.length; i++) {
      newRes.push({
        id: items[i].id,
        name: items[i].name,
        artist: items[i].artists[0].name,
        album: items[i].album.name,
        cover: items[i].album.images[0].url,
        added: false,
      });
    }

    return newRes;
  } catch (error) {
    //console.log(error);
    return Error(error);
  }
};
