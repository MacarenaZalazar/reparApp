import LoginGoogle from "../googleAutho/LoginGoogle";
import {
  StyledDiv,
  LoginDiv,
  TitleDiv,
  InputDiv,
  ButtonDiv,
  OptionsDiv,
} from "./styledLogin";
import axios from "axios";

import { useDispatch } from "react-redux";
import { getTechUsersByJobAndZone } from "../../redux/actions/techUsers";
import { getRequestAllFiltered } from "../../redux/actions/request/index";
import { MdAccountCircle, MdVpnKey } from "react-icons/md";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOGIN_URL } from "../../utils/constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({ mail: "", password: "" });

  function validate(values) {
    let errors = {};

    if (!values.password) {
      errors.password = "Campo obligatorio";
    }

    if (!values.mail) {
      errors.mail = "Campo obligatorio";
    }

    return errors;
  }

  function handleInputChange(evento) {
    setInput((input) => ({
      ...input,
      [evento.target.name]: evento.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, ...sinErrors } = input;
    const result = validate(sinErrors);
    setInput((prevState) => {
      return {
        ...prevState,
        errors: result,
      };
    });

    if (!Object.keys(result).length) {
      try {
        const login = await axios.post(LOGIN_URL, input);
        window.sessionStorage.setItem("user", JSON.stringify(login.data));

        const role = login.data.roles && login.data.roles[0].name;

        if (role === "userFinal") {
          dispatch(
            getTechUsersByJobAndZone(null, login.data.state, login.data.zone)
          );
        }
        if (role === "userTech") {
          dispatch(
            getRequestAllFiltered(null, login.data.state, login.data.workZones)
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
      alert("Se encontraron errores");
    }
  };
  const forgotPassword = async (e) => {
    e.preventDefault();
    let passInput = { mail: input.mail, password: "forgot your password" };
    await axios.post(LOGIN_URL, passInput);
    alert("Enviamos un email con tu nueva contraseña");
  };

  const showAlert = async (e) => {
    e.preventDefault();

    const { value: fruit } = await Swal.fire({
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
  };

  return (
    <StyledDiv>
      <form onSubmit={(e) => handleSubmit(e)}>
        <LoginDiv>
          <TitleDiv>
            <h4>¡Hola! Ingresá tus datos</h4>
          </TitleDiv>
          <InputDiv>
            <MdAccountCircle className="icon" />

            <input
              type="email"
              name="mail"
              placeholder="Ingrese su e-mail"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </InputDiv>
          <InputDiv>
            <MdVpnKey className="icon" />

            <input
              type="password"
              name="password"
              placeholder="Ingrese password"
              onChange={handleInputChange}
            />
          </InputDiv>

          <ButtonDiv>
            <button className="link" type="submit">
              ¡Ingresá!
            </button>
          </ButtonDiv>
        </LoginDiv>
      </form>
      <LoginGoogle />
      <OptionsDiv>
        <span>
          O{" "}
          <span className="register" onClick={showAlert}>
            registrate
          </span>
        </span>
        <span>
          O{" "}
          <span className="register" onClick={(e) => forgotPassword(e)}>
            Olvidaste tu contraseña?
          </span>
        </span>
      </OptionsDiv>
    </StyledDiv>
  );
};

export default Login;
