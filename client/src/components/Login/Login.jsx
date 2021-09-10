import {
  StyledDiv,
  LoginDiv,
  TitleDiv,
  InputDiv,
  ButtonDiv,
} from "./styledLogin";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTechUsersByJobAndZone } from "../../redux/actions/techUsers";
import { MdAccountCircle, MdVpnKey } from "react-icons/md";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({ mail: "", password: "" });

  function handleInputChange(evento) {
    setInput((input) => ({
      ...input,
      [evento.target.name]: evento.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const login = await axios.post("http://localhost:3001/login", input);
      window.sessionStorage.setItem("user", JSON.stringify(login.data));

      const role = login.data.roles && login.data.roles[0].name;

      if (role === "userFinal") {
        dispatch(getTechUsersByJobAndZone(null, login.data.zone));
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
  };

  const showAlert = async (e) => {
    e.preventDefault();
    // MySwal.fire({
    //   title: "Elige un tipo de usuario",
    //   showDenyButton: true,
    //   confirmButtonText:
    //     '<a style=”color:white” href="/signinTech">Técnico</a> ',
    //   denyButtonText: '<a className="enlace"  href="/signinFinal">Final</a> ',
    // });

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
            <h4>Login</h4>
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
          <span>O <span className='register'onClick={showAlert}>registrate</span></span>
        </LoginDiv>
      </form>
    </StyledDiv>
  );
};

export default Login;
