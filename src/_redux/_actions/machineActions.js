import axios from "axios";
import { machineAPIUrl } from "../_api";
import * as types from "../_constants";


// Get All Machines


export const getMachines = () => {
  return (dispatch) => {
    return axios.get(`${machineAPIUrl}`)
      .then(response => {
        dispatch({type: types.GET_MACHINE_SUCCESS, payload: response.data});
      })
      .catch(error => { throw(error); });
  };
};


 
