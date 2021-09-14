import axios from "axios";
import { FINAL_USER_URL } from "../../../utils/constants";
import {
  GET_FINAL_USERS_ALL,
  GET_FINAL_USERS_BY_ID,
  PUT_FINAL_USERS_ALL
} from "./constantsFinalUser";

export function getFinalUsersAll() {
  return async function (dispatch) {
    try {
      let finalUsers = await axios.get(FINAL_USER_URL);
      return dispatch({
        type: GET_FINAL_USERS_ALL,
        payload: finalUsers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFinalUsersById(id, config) {
  return async function (dispatch) {
    try {
      let finalUser = await axios.get(`${FINAL_USER_URL}/${id}`, config);

      return dispatch({
        type: GET_FINAL_USERS_BY_ID,
        payload: finalUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function putFinalUsersAll(finalUser){
  return async function (dispatch) {
    try {
      const allRequests = await axios.put(FINAL_USER_URL,finalUser);
      return dispatch({
        type: PUT_FINAL_USERS_ALL,
        payload: allRequests.data,
      });
    } catch (error) {
      console.log(error);
    }
  }; 
}
