import {
  GET_TECH_USERS_ALL,
  GET_TECH_USERS_BY_ID,
  GET_TECH_USERS_BY_JOB_ZONE,
  GET_STATES,
  GET_CITIES
} from "../actions/techUsers/constantsTechUsers";

var initialState = {
  techUsers: [],
  technicUserDetail: {},
  jobTypes: [],
  allStates: [],
  allCities: []
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TECH_USERS_ALL:
      console.log("pay:", payload);
      return {
        ...state,
        techUsers: payload,
      };
    case GET_TECH_USERS_BY_ID:
      console.log(payload);
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
        allStates: payload
      };
    case GET_CITIES:
      return {
        ...state,
        allCities: payload
      }

    default:
      return state;
  }
}
export default reducer;
