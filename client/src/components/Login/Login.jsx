import LoginGoogle from "../googleAutho/LoginGoogle";
import {
  StyledDiv,
  LoginDiv,
  TitleDiv,
  InputDiv,
  ButtonDiv,
  OptionsDiv,
  LinksDiv,
  GoogleDiv,
} from "./styledLogin";
import axios from "axios";

import { useDispatch } from "react-redux";
import { getTechUsersByJobAndZone } from "../../redux/actions/techUsers";
import { getRequestAllFiltered } from "../../redux/actions/request/index";
import { MdAccountCircle, MdVpnKey } from "react-icons/md";
import { TiArrowBack, TiUserAdd } from "react-icons/ti";
import { GiPadlockOpen } from "react-icons/gi";
import { FaUserPlus, FaArrowLeft } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { LOGIN_URL } from "../../utils/constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({ mail: "", password: "", errors: {} });
  const [flagGoogle, setFlagGoogle] = useState(false);
  function validate(values) {
    let errors = {};

    if (!values.password) {
      errors.password = "Campo obligatorio";
    }
    if (values.password.length > 15) {
      errors.password = "Contraseña máximo 15 caracteres";
    }

    if (!values.mail) {
      errors.mail = "Campo obligatorio";
    }

    return errors;
  }

  const changeFlagGoogle = () => {
    setFlagGoogle(!flagGoogle);
  };

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
  };

  return (
    <StyledDiv>
      <LinksDiv>
        <Link className="link" to="/home">
          <TiArrowBack className="icon" />
          <p>Volver a Home</p>
        </Link>
        <Link onClick={(e) => forgotPassword(e)} className="link" to="/login">
          <GiPadlockOpen className="icon" />
          <p>Recuperar Contraseña</p>
        </Link>
        <Link onClick={showAlert} className="link" to="/#">
          <TiUserAdd className="icon" />
          <p>Registrarse</p>
        </Link>
      </LinksDiv>
      <form onSubmit={(e) => handleSubmit(e)}>
        <LoginDiv>
          <TitleDiv>
            <h4>¡Ingresá tus datos!</h4>
          </TitleDiv>
          <InputDiv error={input.errors.mail}>
            <MdAccountCircle className="icon" />

            <input
              type="email"
              name="mail"
              placeholder="Ingrese su e-mail"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </InputDiv>
          <InputDiv error={input.errors.password}>
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
              Confirmar
            </button>
          </ButtonDiv>
        </LoginDiv>
      </form>
      <GoogleDiv flag={flagGoogle}>
        <div className="login" onClick={changeFlagGoogle}>
          <AiFillGoogleCircle className="icon" />
          <p> ¡Ingresá con Google!</p>
          <div className="enter">
            <LoginGoogle />
          </div>
        </div>
      </GoogleDiv>
    </StyledDiv>
  );
};

export default Login;
