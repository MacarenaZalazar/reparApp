import {
  GET_TECH_USERS_ALL,
  GET_TECH_USERS_BY_ID,
  GET_TECH_USERS_BY_JOB_ZONE,
  GET_STATES,
  GET_CITIES,
} from "../actions/techUsers/constantsTechUsers";

import {
  GET_ALL_REQUEST,
  GET_REQUEST_BY_USER,
  GET_REQUEST_DETAILS,
  GET_REQUEST_BY_USER_TECH,
} from "../actions/request/constantsRequest";

import { GET_JOB_TYPES } from "../actions/jobTypes/constantsJobTypes";
import {
  GET_FINAL_USERS_ALL,
  GET_FINAL_USERS_BY_ID,
} from "../actions/finalUser/constantsFinalUser";
import {
  //  GET_ALL_JOB_REQUESTS,
  ORDER_BY_PRICE,
  ORDER_BY_SCORE,
  LOGIN_GOOGLE,
} from "../actions/allUsers/constantsAllUsers";

var initialState = {
  techUsers: [],
  technicUserDetail: {},
  finalUser: [],
  finalUserDetail: {},
  jobTypes: [],
  allStates: [],
  allCities: [],
  allUsers: [],
  allRequests: [],
  requestsByUserTech: [],
  requestsByUser: [],
  responseGoogle: {},
  requestDetails: {},
  promoted: [],
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
        promoted: payload.filter((e) => e.user.promoted),
      };
    case GET_TECH_USERS_BY_ID:
      return {
        ...state,
        technicUserDetail: payload,
      };
    case GET_TECH_USERS_BY_JOB_ZONE:
      return {
        ...state,
        techUsers: payload,
        promoted: payload.filter((e) => e.user.promoted),
      };
    case GET_STATES:
      let pay = payload.map((element) => {
        if (element === "Tierra del Fuego, Antártida e Islas del Atlántico Sur")
          return (element = "Tierra del Fuego");
        if (element === "Ciudad Autónoma de Buenos Aires")
          return (element = "CABA");
        return element;
      });

      return {
        ...state,
        allStates: pay.sort(),
      };
    case GET_CITIES:
      let payloadCapitalize = payload.map((pay) => capitalize(pay));

      return {
        ...state,
        allCities: payloadCapitalize.sort(),
      };
    case GET_JOB_TYPES:
      return {
        ...state,
        jobTypes: payload.sort(),
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
      return {
        ...state,
        allRequests: payload,
      };
    case ORDER_BY_SCORE:
      let techs = state.techUsers.sort(function (a, b) {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        techUsers: techs.map((e) => e),
      };
    case ORDER_BY_PRICE:
      console.log(state.techUsers);
      let tech = state.techUsers.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        techUsers: tech.map((e) => e),
      };
    case GET_REQUEST_BY_USER:
      return {
        ...state,
        requestsByUser: payload,
      };
    //JOB REQUEST BY USER TECH

    case GET_REQUEST_BY_USER_TECH:
      return {
        ...state,
        requestsByUserTech: payload,
      };
    case "Restore":
      return {
        ...state,
        techUsers: [],
        technicUserDetail: {},
        finalUser: [],
        finalUserDetail: {},
        allCities: [],
        allUsers: [],
        allRequests: [],
        requestsByUserTech: [],
        requestsByUser: [],
        responseGoogle: {},
        requestDetails: {},
        promoted: [],
      };
    case GET_REQUEST_DETAILS:
      return {
        ...state,
        requestDetails: payload,
      };
    //Google Login
    case LOGIN_GOOGLE:
      return {
        ...state,
        responseGoogle: payload,
      };

    default:
      return state;
  }
}
export default reducer;
