import axios from "axios";
import { REQUEST_URL} from "../../../utils/constants";
import { GET_ALL_REQUEST, GET_REQUEST_BY_USER } from "./constantsRequest";

export function getRequestAllFiltered(workType, state, workZones) {
  const workZonesString = workZones.toString();

  return async function (dispatch) {
    try {
      let allRequest = await axios.get(
        `${REQUEST_URL}/filtered?workType=${workType}&state=${state}&workZones=${workZonesString}`
      );

      return dispatch({
        type: GET_ALL_REQUEST,
        payload: allRequest.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllRequests(){
  return async function (dispatch) {
    try {
      const allRequests = await axios.delete(GET_ALL_REQUEST);
      return dispatch({
        type: GET_ALL_REQUEST,
        payload: allRequests.data,
      });
    } catch (error) {
      console.log(error);
    }
  }; 
}

export const getRequestByUser = (id, config) =>{
  return async function (dispatch) {
    try {
      const requests = await axios.get(`${REQUEST_URL}/all/${id}`, config);
      return dispatch({
        type: GET_REQUEST_BY_USER,
        payload: requests.data,
      });
    } catch (error) {
      console.log(error);
    }
  }; 

}
