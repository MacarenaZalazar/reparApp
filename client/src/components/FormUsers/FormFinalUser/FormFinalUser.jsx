import React, { useState } from "react";
import { StyledDiv, Input, Form } from "../stylesFormUsers";
import axios from "axios";

const FormFinalUser = () => {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    userName: "",
    password: "",
    image: "",
    phone: "",
    mail: "",
    zone: "",
    errors: {},
  });

  function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Campo obligatorio";
    }
    if (!values.lastName) {
      errors.lastName = "Campo obligatorio";
    }
    if (!values.userName) {
      errors.userName = "Campo obligatorio";
    }
    if (!values.password) {
      errors.password = "Campo obligatorio";
    }
    if (!values.zone.length) {
      errors.zone = "Campo obligatorio";
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
        console.log(input);
        await axios.post("http://localhost:3001/finalUsers", input);
        alert("Usuario creado");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Se encontraron errores");
    }
  };

  return (
    <StyledDiv>
      <form id="formCreate" onSubmit={(e) => handleSubmit(e)}>
        <Form>
          <Input error={input.errors.name}>
            <label>* Nombre:</label>
            <input
              autoComplete="off"
              type="text"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
          </Input>
          <Input error={input.errors.lastName}>
            <label>* Apellido:</label>
            <input
              autoComplete="off"
              type="text"
              name="lastName"
              value={input.lastName}
              onChange={handleInputChange}
            />
          </Input>
          <Input error={input.errors.username}>
            <label>* Username:</label>
            <input
              type="text"
              autoComplete="off"
              name="userName"
              value={input.userName}
              onChange={handleInputChange}
            />
          </Input>
          <Input error={input.errors.password}>
            <label>* Password:</label>
            <input
              type="text"
              name="password"
              autoComplete="off"
              value={input.password}
              onChange={handleInputChange}
            />
          </Input>
          <Input>
            <label>Imagen:</label>
            <input
              type="text"
              name="image"
              autoComplete="off"
              value={input.image}
              onChange={handleInputChange}
            />
          </Input>
          <Input>
            <label>Teléfono:</label>
            <input
              type="text"
              name="phone"
              autoComplete="off"
              value={input.phone}
              onChange={handleInputChange}
            />
          </Input>
          <Input>
            <label>Email:</label>
            <input
              type="email"
              name="mail"
              autoComplete="off"
              value={input.mail}
              onChange={handleInputChange}
            />
          </Input>
          <Input error={input.errors.zones}>
            <label>* Zonas:</label>
            <input
              type="text"
              autoComplete="off"
              name="zone"
              value={input.zone}
              onChange={handleInputChange}
            />
          </Input>
          * estos campos son obligatorios
          <button type="submit">Crear Usuario</button>
        </Form>
      </form>
    </StyledDiv>
  );
};

export default FormFinalUser;
