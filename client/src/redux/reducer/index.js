import {
  GET_TECH_USERS_ALL,
  GET_TECH_USERS_BY_ID,
  GET_TECH_USERS_BY_JOB_ZONE,
  GET_STATES,
  GET_CITIES,
} from "../actions/techUsers/constantsTechUsers";

import { GET_JOB_TYPES } from "../actions/jobTypes/constantsJobTypes";

import { ADD_JOBTYPE, DELETE_JOBTYPE } from "../actions/admin/constantJobTypes";
import { GET_ALL_USERS } from "../actions/admin/constantsAdmin";
import { GET_ALL_JOB_REQUESTS } from "../actions/allUsers/constantsAllUsers";

var initialState = {
  techUsers: [],
  technicUserDetail: {},
  jobTypes: [],
  allStates: [],
  allCities: [],
  allUsers: [],
  allRequests: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TECH_USERS_ALL:
      return {
        ...state,
        techUsers: payload,
      };
    case GET_TECH_USERS_BY_ID:
      console.log("tech user by id");
      return {
        ...state,
        technicUserDetail: payload,
      };
    case GET_TECH_USERS_BY_JOB_ZONE:
      return {
        ...state,
        techUsers: payload,
      };
    case GET_STATES:
      return {
        ...state,
        allStates: payload,
      };
    case GET_CITIES:
      return {
        ...state,
        allCities: payload,
      };
    case ADD_JOBTYPE:
      return {
        ...state,
        jobTypes: payload,
      };
    case DELETE_JOBTYPE:
      return {
        ...state,
        jobTypes: payload,
      };
    case GET_JOB_TYPES:
      console.log("pay:", payload);
      return {
        ...state,
        jobTypes: payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };
    case GET_ALL_JOB_REQUESTS:
      return {
        ...state,
        allRequests: payload,
      };

    default:
      return state;
  }
}
export default reducer;
