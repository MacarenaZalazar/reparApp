// import { GET_ALL_JOB_REQUESTS } from "./constantsAllUsers";
import {
  ORDER_BY_PRICE,
  ORDER_BY_SCORE,
  LOGIN_GOOGLE,
} from "./constantsAllUsers";


export const restoreState = () => {
  return {
    type: "Restore",
  };
};

export const orderByScore = () => {
  return {
    type: ORDER_BY_SCORE,
  };
};

export const orderByPrice = () => {
  return {
    type: ORDER_BY_PRICE,
  };
};

export const loginGoogle = (response) => {
  return {
    type: LOGIN_GOOGLE,
    payload: response.profileObj,
  };
};
