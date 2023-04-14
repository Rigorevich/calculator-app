const initialState = [
  "1 + 2",
  "3 / 2",
  "1 + 2",
  "3 / 2",
  "1 + 2",
  "3 / 2",
  "1 + 2",
  "3 / 2",
  "1 + 2",
  "3 / 2",
  "1 + 2",
  "3 / 2",
  "1 + 2",
  "3 / 2",
  "1 + 2",
  "3 / 2",
  "1 + 2",
  "3 / 2",
  "1 + 2",
  "3 / 2",
  "1 + 2",
  "3 / 2",
];

const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OPERATION":
      state.push(action.payload);
      return state;
    case "CLEAR_HISTORY":
      return [];
    default:
      return state;
  }
};

export default operationReducer;
