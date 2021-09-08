import axios from "axios";
import { TECH_USERS_URL } from "../../../utils/constants";
import {
  GET_TECH_USERS_ALL,
  GET_TECH_USERS_BY_ID,
  GET_TECH_USERS_BY_JOB_ZONE,
  GET_STATES,
  GET_CITIES,
} from "./constantsTechUsers";
import { useSelector } from "react-redux";

export function getTechUsersAll() {
  return async function (dispatch) {
    try {
      let techUsers = await axios.get(TECH_USERS_URL);
      return dispatch({
        type: GET_TECH_USERS_ALL,
        payload: techUsers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTechUsersById(id, config) {
  console.log("config:", config);
  return async function (dispatch) {
    console.log(`${TECH_USERS_URL}/${id}`);
    try {
      let techUser = await axios.get(`${TECH_USERS_URL}/${id}`, config);

      return dispatch({
        type: GET_TECH_USERS_BY_ID,
        payload: techUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTechUsersByJobAndZone(jobType, zone) {
  return async function (dispatch) {
    try {
      let techUsers = await axios.get(
        `${TECH_USERS_URL}/filter?jobTypes=${jobType}&workZones=${zone}`
      );
      return dispatch({
        type: GET_TECH_USERS_BY_JOB_ZONE,
        payload: techUsers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getStates() {
  return async function (dispatch) {
    try {
      let states = await axios.get(
        "https://apis.datos.gob.ar/georef/api/provincias"
      );
      states = states.data.provincias.map((c) => c.nombre);
      return dispatch({
        type: GET_STATES,
        payload: states,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCities(city) {
  return async function (dispatch) {
    try {
      let cities = await axios.get(
        `https://apis.datos.gob.ar/georef/api/localidades?provincia=${city}&campos=nombre&max=100`
      );
      cities = cities.data.localidades.map((e) => e.nombre);
      return dispatch({
        type: GET_CITIES,
        payload: cities,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
