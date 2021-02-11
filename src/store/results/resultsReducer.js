import { ADD_RESULTS_SONGS, REMOVE_RESULTS_SONGS } from "./resultsActions";

const initialState = {
  results: [],
};

const resultsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_RESULTS_SONGS:
      return {
        results: payload,
      };
    case REMOVE_RESULTS_SONGS:
      return {
        results: [],
      };
    default:
      return state;
  }
};

export default resultsReducer;
