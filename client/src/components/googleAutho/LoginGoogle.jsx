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
    MySwal.fire({
      title: "Error de google",
      confirmButtonColor: "#0a122aff",
      background: "#e7decdff",
      backdrop: "rgba(10,18,42,0.6)",
    });
  };

  const responseGoogle = async (response) => {
    try {
      const mailGoogle = response.profileObj.email;

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
            confirmButtonColor: "#0a122aff",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
          history.push("/home");
        } catch (error) {
          MySwal.fire({
            title: "Error en el logueo",
            confirmButtonColor: "#0a122aff",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
        }
      } else {
        dispatch(loginGoogle(response));

        await Swal.fire({
          input: "select",
          title: "Registrarse como:",
          backdrop: "rgba(10,18,42,0.6)",
          icon: "question",
          iconColor: "#f06449ff",
          inputOptions: {
            Tipo: {
              tech: "Técnico - Profesional",
              final: "Usuario Final",
            },
          },
          confirmButtonColor: "#0a122aff",
          cancelButtonColor: "#f06449ff",
          background: "#e7decdff",
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
      console.log(error);
    }
  };
  const url =
    "497367320284-4nttqrdm45o2lded0stu5hq6mht8tlmf.apps.googleusercontent.com";

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
        redirectUri={"https://webclient-pf-050921.herokuapp.com"}
      />
    </>
  );
}

export default LoginGoogle;
