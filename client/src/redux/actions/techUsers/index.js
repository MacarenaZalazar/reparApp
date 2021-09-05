import axios from "axios";
import { TECH_USERS_URL } from "../../../utils/constants";

import { GET_TECH_USERS_ALL } from "./constantsTechUsers";

export function getTechUsersAll() {
  return async function (dispatch) {
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
