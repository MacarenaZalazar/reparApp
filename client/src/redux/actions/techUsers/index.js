import axios from "axios";
import { TECH_USERS_URL } from "../../../utils/constants";
import {
  GET_TECH_USERS_ALL,
  GET_TECH_USERS_BY_ID,
  GET_TECH_USERS_BY_JOB_ZONE,
} from "./constantsTechUsers";

export function getTechUsersAll() {
  return async function (dispatch) {
    console.log("llegué a la action");
    try {
      let techUsers = await axios.get(TECH_USERS_URL);
      return dispatch({
        type: GET_TECH_USERS_ALL,
        payload: techUsers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTechUsersById(id) {
  console.log("llegué a la action");
  return async function (dispatch) {
    console.log(`${TECH_USERS_URL}/${id}`);
    try {
      let techUser = await axios.get(`${TECH_USERS_URL}/${id}`);
      console.log(techUser);
      return dispatch({
        type: GET_TECH_USERS_BY_ID,
        payload: techUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTechUsersByJobAndZone(jobType, zone) {
  console.log("llegué a la action");
  return async function (dispatch) {
    try {
      let techUsers = await axios.get(
        `${TECH_USERS_URL}/filter?jobTypes=${jobType}&workZones=${zone}`
      );
      return dispatch({
        type: GET_TECH_USERS_BY_JOB_ZONE,
        payload: techUsers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
