import {
  SAVE_LIBRARY_SONG,
  ADD_LIBRARY_SONG,
  DELETE_LIBRARY_SONG,
} from "./libraryActions";

const initialState = {
  library: [],
};

const libraryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_LIBRARY_SONG:
      return {
        ...state,
        library: [...state.library, payload],
      };
    case DELETE_LIBRARY_SONG:
      return {
        ...state,
        library: state.library.filter((song) => song.id !== payload),
      };
    default:
      return state;
  }
};

export default libraryReducer;
