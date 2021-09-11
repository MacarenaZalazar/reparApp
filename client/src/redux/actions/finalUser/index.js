import axios from "axios";
import { FINAL_USER_URL } from "../../../utils/constants";
import {
  GET_FINAL_USERS_ALL,
  GET_FINAL_USERS_BY_ID,
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
      let finalUser = await axios.get(`${FINAL_USERS_URL}/${id}`, config);

      return dispatch({
        type: GET_FINAL_USERS_BY_ID,
        payload: finalUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
