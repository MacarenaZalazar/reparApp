import {
  StyledDiv,
  LoginDiv,
  TitleDiv,
  InputDiv,
  ButtonDiv,
} from "./styledLogin";

import { MdAccountCircle, MdVpnKey } from "react-icons/md";
import { Link } from "react-router-dom";

import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });

  function handleInputChange(evento) {
    setInput((input) => ({
      ...input,
      [evento.target.name]: evento.target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado:", input);
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
              type="text"
              name="username"
              placeholder="Ingrese usuario"
              onChange={handleInputChange}
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
              Crear Usuario
            </button>
          </ButtonDiv>
        </LoginDiv>
      </form>
    </StyledDiv>
  );
};

export default Login;
