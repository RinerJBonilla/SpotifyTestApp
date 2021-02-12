export const ADD_LIBRARY_SONG = "ADD_LIBRARY_SONG";
export const DELETE_LIBRARY_SONG = "DELETE_LIBRARY_SONG";
export const SAVE_LIBRARY_SONG = "SAVE_LIBRARY_SONG";
export const SET_LIBRARY_SONGS = "SET_LIBRARY_SONGS";

export const addLibrary = (song) => ({
  type: ADD_LIBRARY_SONG,
  payload: song,
});

export const deleteLibrary = (songId) => ({
  type: DELETE_LIBRARY_SONG,
  payload: songId,
});

export const deleteLibrarySong = (songId) => {
  return (dispath) => {
    dispath({ type: DELETE_LIBRARY_SONG, payload: songId });
  };
};

export const setLibrary = (songs) => ({
  type: SET_LIBRARY_SONGS,
  payload: songs,
});
