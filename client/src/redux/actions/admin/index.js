
import axios from "axios";
import { DELETE_JOBTYPE, ADD_JOBTYPE } from "./constantJobTypes";
import { ADMIN_URL } from "../../../utils/constants";

export function AddJobType(newJob) {
  return async function (dispatch) {
    try {
      const addJob = await axios.post(ADMIN_URL, newJob);
      return dispatch({
        type: ADD_JOBTYPE,
        payload: addJob.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function DeleteJobType(name) {
  return async function (dispatch) {
    try {
      const deleteJob = await axios.delete(name);
      return dispatch({
        type: DELETE_JOBTYPE,
        payload: deleteJob.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
