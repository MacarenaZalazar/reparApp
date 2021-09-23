import axios from "axios";
import { REQUEST_URL } from "../../../utils/constants";
import {
  GET_ALL_REQUEST,
  GET_REQUEST_BY_USER,
  GET_REQUEST_DETAILS,
  GET_REQUEST_BY_USER_TECH,
} from "./constantsRequest";

export function getRequestAllFiltered(workType, state, workZones) {
  const workZonesString = workZones.toString();

  return async function (dispatch) {
    try {
      let allRequest = await axios.get(
        `${REQUEST_URL}/filtered?workType=${workType}&state=${state}&workZones=${workZonesString}`
      );

      return dispatch({
        type: GET_ALL_REQUEST,
        payload: allRequest.data.filter(r => (!r.ban)),
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllRequests() {
  return async function (dispatch) {
    try {
      const allRequests = await axios.delete(GET_ALL_REQUEST);
      return dispatch({
        type: GET_ALL_REQUEST,
        payload: allRequests.data.filter(r => (!r.ban)),
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getRequestByUser = (id, config) => {
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
};
export const getRequestByUserTech = (id, config) => {
  return async function (dispatch) {
    try {
      const requests = await axios.get(`${REQUEST_URL}/allTech/${id}`, config);

      return dispatch({
        type: GET_REQUEST_BY_USER_TECH,
        payload: requests.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRequestDetailsbyID = (id) => {
  return async function (dispatch) {
    try {
      const requestDetails = await axios.get(`${REQUEST_URL}/details/${id}`);
      return dispatch({
        type: GET_REQUEST_DETAILS,
        payload: requestDetails.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
