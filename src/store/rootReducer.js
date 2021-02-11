import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import resultsReducer from "./results/resultsReducer";
import libraryReducer from "./library/libraryReducer";

const rootReducer = combineReducers({
  library: libraryReducer,
  results: resultsReducer,
  user: userReducer,
});

export default rootReducer;
