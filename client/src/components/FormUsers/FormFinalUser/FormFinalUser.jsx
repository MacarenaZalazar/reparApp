import React, { useState, useEffect } from "react";
import { StyledDiv, Input, Form, Left, Right } from "../stylesFormUsers";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { getCities, getStates } from "../../../redux/actions/techUsers/index";
import { useDispatch, useSelector } from "react-redux";
import { FINAL_USER_URL } from "../../../utils/constants";

const FormFinalUser = () => {
  const history = useHistory();
  const responseGoogle = useSelector((state) => state.responseGoogle);
  const [input, setInput] = useState({
    name: "" || responseGoogle.givenName,
    lastName: "" || responseGoogle.familyName,
    password: "" || responseGoogle.googleId,
    confirmPassword: "" || responseGoogle.googleId,
    image: "" || responseGoogle.imageUrl,
    mail: "" || responseGoogle.email,
    userName: "",
    phone: "",
    state: "",
    zone: "",
    errors: {},
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);
  const { allStates, allCities } = useSelector((state) => state);

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
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
    if (!values.state) {
      errors.state = "Campo obligatorio";
    }
    if (!values.mail) {
      errors.mail = "Campo obligatorio";
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
  function handleStateChange(evento) {
    dispatch(getCities(evento.target.value));
    setInput((input) => ({
      ...input,
      state: evento.target.value,
      zone: "",
    }));
  }

  function handleZoneChange(evento) {
    setInput((input) => ({
      ...input,
      zone: evento.target.value,
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

    console.log(input);

    if (!Object.keys(result).length) {
      try {
        const respuesta = await axios.post(FINAL_USER_URL, input);

        if (!respuesta.data.message) {
          const Toast = Swal.mixin({
            toast: true,

            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Registro exitoso",
          });

          history.push("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `${respuesta.data.message}`,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(input);
      alert("Se encontraron errores");
    }
  };

  return (
    <StyledDiv>
      <form id="formCreate" onSubmit={(e) => handleSubmit(e)}>
        <Form>
          <div className="title">
            <h4>Usuario Final</h4>
          </div>
          <div className="grid">
            <Left>
              {!responseGoogle.givenName && (
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
              )}
              {!responseGoogle.familyName && (
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
              )}
              <Input error={input.errors.userName}>
                <label>* Username:</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="userName"
                  value={input.userName}
                  onChange={handleInputChange}
                />
              </Input>
              {!responseGoogle.googleId && (
                <Input error={input.errors.password}>
                  <label>* Password:</label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={input.password}
                    onChange={handleInputChange}
                  />
                </Input>
              )}
              {!responseGoogle.googleId && (
                <Input error={input.errors.confirmPassword}>
                  <label>* Confirmar Password: </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    autoComplete="off"
                    value={input.confirmPassword}
                    onChange={handleInputChange}
                  />
                </Input>
              )}
            </Left>
            <Right>
              {!responseGoogle.imageUrl && (
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
              )}
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
              {!responseGoogle.email && (
                <Input error={input.errors.mail}>
                  <label>* Email:</label>
                  <input
                    type="email"
                    name="mail"
                    autoComplete="off"
                    value={input.mail}
                    onChange={handleInputChange}
                  />
                </Input>
              )}
              <Input error={input.state}>
                <label>* Provincia:</label>
                <select onChange={handleStateChange} name="state" id="">
                  <option value=""></option>
                  {allStates &&
                    allStates.map((c, idx) => {
                      return (
                        <option key={idx} value={c}>
                          {c}
                        </option>
                      );
                    })}
                </select>
              </Input>
              <Input error={input.errors.zone}>
                {allCities.length > 1 && (
                  <div className="flexZones">
                    <div>
                      <label>* Zonas:</label>
                      <select
                        aria-label="Default select example"
                        name="departments"
                        id=""
                        onChange={handleZoneChange}
                      >
                        {allCities.map((d, idx) => {
                          return (
                            <option key={idx} value={d}>
                              {d}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                )}
              </Input>
            </Right>
          </div>
          <button type="submit">
            {!responseGoogle.Ht ? <p>Crear Usuario</p> : <p>Confimar datos</p>}
          </button>
          <span>* estos campos son requeridos</span>
        </Form>
      </form>
    </StyledDiv>
  );
};

export default FormFinalUser;
