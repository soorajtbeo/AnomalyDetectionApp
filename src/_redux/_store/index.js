import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../_reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};
const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);
export default store;
