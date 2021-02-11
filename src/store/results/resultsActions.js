export const ADD_RESULTS_SONGS = "ADD_RESULTS_SONGS";
export const REMOVE_RESULTS_SONGS = "REMOVE_RESULTS_SONGS";

export const addResultsSongs = (songs) => ({
  type: ADD_RESULTS_SONGS,
  payload: songs,
});

export const removeResultsSongs = () => ({
  type: REMOVE_RESULTS_SONGS,
  payload: [],
});
