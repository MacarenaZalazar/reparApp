import {
  GET_TECH_USERS_ALL,
  GET_TECH_USERS_BY_ID,
  GET_TECH_USERS_BY_JOB_ZONE,
  GET_STATES,
  GET_CITIES,
} from "../actions/techUsers/constantsTechUsers";

import { GET_ALL_REQUEST } from "../actions/request/constantsRequest";

import { GET_JOB_TYPES } from "../actions/jobTypes/constantsJobTypes";
import {
  GET_FINAL_USERS_ALL,
  GET_FINAL_USERS_BY_ID,
} from "../actions/finalUser/constantsFinalUser";
import { ADD_JOBTYPE, DELETE_JOBTYPE } from "../actions/admin/constantJobTypes";
import { GET_ALL_USERS } from "../actions/admin/constantsAdmin";
import { GET_ALL_JOB_REQUESTS } from "../actions/allUsers/constantsAllUsers";

var initialState = {
  techUsers: [],
  technicUserDetail: {},
  finalUser: [],
  finalUserDetail: {},
  jobTypes: [],
  allStates: [],
  allCities: [],
  allUsers: [],
  allRequest: [],
};

function capitalize(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (Word) {
      return Word[0].toUpperCase() + Word.substr(1);
    })
    .join(" ");
}

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TECH_USERS_ALL:
      return {
        ...state,
        techUsers: payload,
      };
    case GET_TECH_USERS_BY_ID:
      return {
        ...state,
        technicUserDetail: payload,
      };
    case GET_TECH_USERS_BY_JOB_ZONE:
      console.log(payload);
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
      let payloadCapitalize = payload.map((pay) => capitalize(pay));

      return {
        ...state,
        allCities: payloadCapitalize,
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
      return {
        ...state,
        jobTypes: payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };

    case GET_FINAL_USERS_ALL:
      return {
        ...state,
        finalUser: payload,
      };

    case GET_FINAL_USERS_BY_ID:
      return {
        ...state,
        finalUserDetail: payload,
      };

    //WorkOrders -- Request
    case GET_ALL_REQUEST:
      console.log("payload:  ", payload);
      return {
        ...state,
        allRequest: payload,
      };

    default:
      return state;
  }
}
export default reducer;
