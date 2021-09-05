import { GET_TECH_USERS_ALL } from "../actions/techUsers/constantsTechUsers";

var initialState = {
  techUsers: [],
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

    default:
      return state;
  }
}
export default reducer;
