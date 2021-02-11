export const ADD_LIBRARY_SONG = "ADD_LIBRARY_SONG";
export const DELETE_LIBRARY_SONG = "DELETE_LIBRARY_SONG";
export const SAVE_LIBRARY_SONG = "SAVE_LIBRARY_SONG";

export const addLibrarySong = (song) => ({
  type: ADD_LIBRARY_SONG,
  payload: song,
});

export const deleteLibrarySong = (songId) => ({
  type: DELETE_LIBRARY_SONG,
  payload: songId,
});
