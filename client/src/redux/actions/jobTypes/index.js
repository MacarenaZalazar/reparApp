import axios from "axios";
import { GET_JOB_TYPES } from "./constantsJobTypes";
import { JOB_TYPES_URL } from "../../../utils/constants";

export function getJobTypesAll() {
  return async function (dispatch) {
    try {
      let jobTypes = await axios.get(JOB_TYPES_URL);
      return dispatch({
        type: GET_JOB_TYPES,
        payload: jobTypes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
