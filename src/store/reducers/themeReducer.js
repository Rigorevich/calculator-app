import { themes } from "Constants";

const initialState = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : themes[1];

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      localStorage.setItem("theme", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
