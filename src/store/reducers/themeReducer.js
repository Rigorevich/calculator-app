import { themes } from "Constants";

const themeReducer = (state = themes[1], action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
