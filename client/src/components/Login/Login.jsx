import {
  StyledDiv,
  LoginDiv,
  TitleDiv,
  InputDiv,
  ButtonDiv,
} from "./styledLogin";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/login";
import { getTechUsersByJobAndZone } from "../../redux/actions/techUsers";
import { MdAccountCircle, MdVpnKey } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({ mail: "", password: "" });
  const user = useSelector((state) => state.user);

  function handleInputChange(evento) {
    setInput((input) => ({
      ...input,
      [evento.target.name]: evento.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(login(input));
      const role = user.roles && user.roles[0].name;
      console.log("user", user);
      if (role === "userFinal") {
        dispatch(getTechUsersByJobAndZone(null, user.data.zone));
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
        </LoginDiv>
      </form>
    </StyledDiv>
  );
};

export default Login;
