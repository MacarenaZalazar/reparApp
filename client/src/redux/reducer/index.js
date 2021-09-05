import {
  GET_TECH_USERS_ALL,
  GET_TECH_USERS_BY_ID,
  GET_TECH_USERS_BY_JOB_ZONE,
} from "../actions/techUsers/constantsTechUsers";

var initialState = {
  techUsers: [],
  technicUserDetail: {},
  jobTypes: [],
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

    default:
      return state;
  }
}
export default reducer;
