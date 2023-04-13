import { createStore, combineReducers } from "redux";
import operationReducer from "./reducers/operationReducer";
import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  history: operationReducer,
});

const store = createStore(rootReducer);

export default store;
