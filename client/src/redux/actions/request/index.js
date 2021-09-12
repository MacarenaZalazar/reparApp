import axios from "axios";
import { REQUEST_URL } from "../../../utils/constants";
import { GET_ALL_REQUEST } from "./constantsRequest";

export function getRequestAllFiltered(workType, state, workZones) {
  const workZonesString = workZones.toString();

  return async function (dispatch) {
    try {
      let allRequest = await axios.get(
        `${REQUEST_URL}/filtered?workType=${workType}&state=${state}&workZones=${workZonesString}`
      );

      return dispatch({
        type: GET_ALL_REQUEST,
        payload: allRequest.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
