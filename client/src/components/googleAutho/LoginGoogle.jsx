import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOGIN_URL } from "../../utils/constants";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { getRequestAllFiltered } from "../../redux/actions/request/index";
import { getTechUsersByJobAndZone } from "../../redux/actions/techUsers";
import { loginGoogle } from "../../redux/actions/allUsers/index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function LoginGoogle() {
  const history = useHistory();
  const dispatch = useDispatch();

  const alertFail = () => {
    alert("Error de google");
  };

  const responseGoogle = async (response) => {
    console.log(response);
    try {
      const mailGoogle = response.profileObj.email;
      //const mailVictor = "victor@victor.com";

      let existed = await axios.get(`${LOGIN_URL}?mail=${mailGoogle}`);

      console.log(existed);
      if (existed && existed.data && existed.data.userName) {
        const input = {
          mail: existed.data.mail,
          password: existed.data.password,
        };

        try {
          const login = await axios.post(LOGIN_URL, input);
          window.sessionStorage.setItem("user", JSON.stringify(login.data));

          const role = login.data.roles && login.data.roles[0].name;

          console.log(role);

          if (role === "userFinal") {
            dispatch(
              getTechUsersByJobAndZone(null, login.data.state, login.data.zone)
            );
          }
          if (role === "userTech") {
            dispatch(
              getRequestAllFiltered(
                null,
                login.data.state,
                login.data.workZones
              )
            );
          }
          MySwal.fire({
            title: "Bienvenido",
          });
          history.push("/home");
        } catch (error) {
          MySwal.fire({
            title: "Error en el logueo",
          });
        }
      } else {
        dispatch(loginGoogle(response));
        // const { value: fruit } =
        await Swal.fire({
          input: "select",
          inputOptions: {
            Tipo: {
              tech: "Técnico",
              final: "Final",
            },
          },
          inputPlaceholder: "Selecciona tipo",
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value === "tech") {
                history.push("/signinTech");
                resolve();
              } else {
                history.push("/signinFinal");
                resolve();
              }
            });
          },
        });
      }
    } catch (error) {
      console.log("aca esta el error");
      console.log(error);
    }
  };
  const url =
    "497367320284-qb9liem9l8i7mdroc6ci4ujm2vsftnj9.apps.googleusercontent.com";

  return (
    <>
      <GoogleLogin
        clientId={url}
        buttonText="Iniciar Sesion"
        onSuccess={responseGoogle}
        onFailure={alertFail}
        cookiePolicy={"single_host_origin"}
        theme="dark"
        icon={false}
      />
    </>
  );
}

export default LoginGoogle;
