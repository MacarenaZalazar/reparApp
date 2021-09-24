// import {
//   StyledDiv,
//   Input,
//   Form,
//   InputJobs,
//   Left,
//   Right,
// } from "./stylesFormUsers";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { getCities, getStates } from "../../redux/actions/techUsers";
import { useEffect } from "react";
import { FINAL_USER_URL } from "../../utils/constants";
import {
  StyledDiv,
  Form,
  Input,
  Left,
  Right,
} from "./stylesFormUsers copy";

const UpDateUserFinal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);
  const { allStates, allCities } = useSelector((state) => state);
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  let config = {
    headers: {
      "x-access-token": user && user.token,
    },
  };

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    image: "",
    phone: "",
    state: "",
    zone: "",
    errors: {},
  });

  function validate(values) {
    let errors = {};

    if (!values.password.length > 15) {
      errors.password = "La contraseña debe tener menos de 15 caracteres";
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }

    return errors;
  }

  function handleInputChange(evento) {
    setInput((input) => ({
      ...input,
      [evento.target.name]: evento.target.value,
    }));
  }

  // Funcion para cambiar zonas y boton para añadir el array
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

    if (!Object.keys(result).length) {
      try {
        let objToSend = {};
        if (input.name) {
          objToSend.name = input.name;
        }
        if (input.lastName) {
          objToSend.lastName = input.lastName;
        }
        if (input.password) {
          objToSend.password = input.password;
        }
        if (input.image) {
          objToSend.image = input.image;
        }
        if (input.phone) {
          objToSend.phone = input.phone;
        }
        if (input.state) {
          objToSend.state = input.state;
        }
        if (input.zone) {
          objToSend.zone = input.zone;
        }

        const respuesta = await axios.put(
          `${FINAL_USER_URL}/${user.idUserFinal}`,
          objToSend,
          config
        );

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
      alert("Se encontraron errores");
    }
  };

  return (
    <StyledDiv>
      <form id="formCreate" onSubmit={(e) => handleSubmit(e)}>
        <Form>
          <div className="grid">
            <Left>
              {
                <Input>
                  <label>* Nombre:</label>
                  <input
                    autoComplete="off"
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                  />
                </Input>
              }
              {
                <Input>
                  <label>* Apellido:</label>
                  <input
                    autoComplete="off"
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={handleInputChange}
                  />
                </Input>
              }
              {
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
              }
              {
                <Input error={input.errors.confirmPassword}>
                  <div className="flex__confirm">
                    <div>
                      <label>* Confirmar Password:</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        autoComplete="off"
                        value={input.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex__confirm--span">
                      {input.errors.confirmPassword && (
                        <span> ¡Las contraseñas no coinciden!</span>
                      )}
                    </div>
                  </div>
                </Input>
              }
              <Input>
                <label>Teléfono:</label>
                <input
                  type="number"
                  name="phone"
                  autoComplete="off"
                  value={input.phone}
                  onChange={handleInputChange}
                />
              </Input>
            </Left>
            <Right>
              {
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
              }
              <Input>
                <label>* Provincia:</label>
                <select
                  error={input.state}
                  onChange={handleStateChange}
                  name="state"
                  id=""
                >
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
              <Input>
                {allCities.length > 0 && (
                  <div className="flexZones">
                    <div>
                      <label>* Zonas:</label>
                      <select
                        aria-label="Default select example"
                        name="zone"
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
          <span>* estos campos son requeridos</span>

          <button type="submit"> {"Modificar datos"}</button>
        </Form>
      </form>
    </StyledDiv>
  );
};

export default UpDateUserFinal;
