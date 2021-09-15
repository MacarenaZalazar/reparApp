// import { GET_ALL_JOB_REQUESTS } from "./constantsAllUsers";
import { ORDER_BY_PRICE, ORDER_BY_SCORE } from "./constantsAllUsers";
import { ORDER_BY_RELEVANT } from "./constantsAllUsers";

export const postScore = (score) => {};

// export const getAllJobRequests = () => {
//     return async function (dispatch) {
//         try {
//           let allRequests = await axios.get('something');
//           return dispatch({
//             type: GET_ALL_JOB_REQUESTS,
//             payload: allRequests.data,
//           });
//         } catch (error) {
//           console.log(error);
//         }
//       };
// }
export const restoreState = () => {
  return {
    type: "Restore",
  };
};

export const orderByScore = () => {
  return {
    type: ORDER_BY_SCORE,
    payload: function (a, b) {
      return b.score - a.score;
    },
  };
};
export const orderByPrice = () => {
  return {
    type: ORDER_BY_PRICE,
    payload: function (a, b) {
      return a.price - b.price;
    },
  };
};
export const orderByRelevant = () => {
  return {
    type: ORDER_BY_RELEVANT,
    payload: function (a, b) {
      return (a.add === true) - (b.add === true);
    },
  };
};
