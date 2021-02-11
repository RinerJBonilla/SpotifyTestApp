import { SET_USER, REMOVE_USER } from "./userActions";

const initialState = {
  user: {
    id: "",
    userName: "please login",
    imageIcon:
      "https://lh3.googleusercontent.com/proxy/Taji84zSnnaStRZ2wLW8vAmnbCyjJEavXOsZjsrnHOA-y2MEbMdBrFsJZpNVa31Rxh-wRYTfmVe9SnrZszdWnwmihMKCazQVRLkFvjUle6aQ4OjJxaMoVdK9wAOYgttYTBqIH7w5Dnc",
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
            "https://lh3.googleusercontent.com/proxy/Taji84zSnnaStRZ2wLW8vAmnbCyjJEavXOsZjsrnHOA-y2MEbMdBrFsJZpNVa31Rxh-wRYTfmVe9SnrZszdWnwmihMKCazQVRLkFvjUle6aQ4OjJxaMoVdK9wAOYgttYTBqIH7w5Dnc",
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
