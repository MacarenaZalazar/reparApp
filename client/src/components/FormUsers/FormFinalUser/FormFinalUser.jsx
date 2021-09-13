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
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    image: "",
    phone: "",
    mail: "",
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

    if (!Object.keys(result).length) {
      try {
        await axios.post(FINAL_USER_URL, input);

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
            </Left>
            <Right>
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
          * estos campos son obligatorios
          <button type="submit">Crear Usuario</button>
        </Form>
      </form>
    </StyledDiv>
  );
};

export default FormFinalUser;
