import { machineReducer } from "./machineReducer";
import { combineReducers } from "redux";
import recommendationReducer from "./recommendationReducer";


const rootReducer = combineReducers({
  machine: machineReducer,
  recommendation: recommendationReducer
});

export default rootReducer;
