import * as types from "../_constants";
import { defaultState } from "./defaultState";

export const machineReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_MACHINE_SUCCESS:
      return { ...state, machines: action.payload };
    default:
      return state;
  }
};

