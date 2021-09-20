import axios from "axios";
import { DELETE_JOBTYPE, ADD_JOBTYPE } from "./constantJobTypes";
import { ADMIN_URL } from "../../../utils/constants";
import { GET_ALL_USERS } from "./constantsAdmin";

export const AddJobType = async (newJob) => {
    try {
      const addJob = await axios.put(ADMIN_URL, newJob);
      alert('El tipo de trabajo ha sido agregado')
    } catch (error) {
      console.log(error);
    }

}

export const deleteJobType = async (name) => {
    try {
      const deleteJob = await axios.delete(ADMIN_URL, name);
      alert('El tipo de trabajo ha sido eliminado')
    } catch (error) {
      console.log(error);
    }
}

export function GetAllUsers(name) {
  return async function (dispatch) {
    try {
      const users = await axios.get('');
      return dispatch({
        type: GET_ALL_USERS,
        payload: users.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

