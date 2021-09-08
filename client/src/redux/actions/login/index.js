import axios from "axios";

export function login(input) {
  return async function (dispatch) {
    try {
      const login = await axios.post("http://localhost:3001/login", input);

      window.localStorage.setItem("user", JSON.stringify(login.data));

      return dispatch({
        type: "LOGIN",
        payload: login.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
