import { SET_USER, REMOVE_USER } from "./userActions";

const initialState = {
  user: {
    id: "",
    userName: "please login",
    imageIcon:
      "https://toppng.com/public/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png",
    isLoggedIn: false,
    country: "",
  },
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        user: payload,
      };
    case REMOVE_USER:
      return {
        user: {
          id: "",
          userName: "",
          imageIcon:
            "https://toppng.com/public/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png",
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
