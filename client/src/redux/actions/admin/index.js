
import axios from "axios";
import { DELETE_JOBTYPE, ADD_JOBTYPE } from "./constantJobTypes";
import { ADMIN_URL } from "../../../utils/constants";
import { DELETE_USER, GET_ALL_USERS } from './constantsAdmin';

export function AddJobType(newJob) {
  return async function (dispatch) {
    try {
      const addJob = await axios.put(ADMIN_URL, newJob);
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

export function GetAllUsers(name){
  return async function (dispatch) {
    try {
      const users = await axios.get(name);
      return dispatch({
        type: GET_ALL_USERS,
        payload: users.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteUser(id){
    return async function (dispatch) {
    try {
      const deleteJob = await axios.delete(name);
      return dispatch({
        type: DELETE_USER,
        payload: deleteJob.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

}