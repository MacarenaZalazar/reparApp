import {
  StyledDiv,
  Input,
  Form,
  InputJobs,
  Left,
  Right,
} from "../stylesFormUsers";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Checkbox from "../../Checkbox/Checkbox";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { getCities, getStates } from "../../../redux/actions/techUsers";
import { useEffect } from "react";
import { TECH_USERS_URL } from "../../../utils/constants";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const FormTechnicUser = () => {
  const history = useHistory();
  const jobTypesRedux = useSelector((state) => state.jobTypes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);
  const { allStates, allCities } = useSelector((state) => state);
  const responseGoogle = useSelector((state) => state.responseGoogle);
  const [input, setInput] = useState({
    name: "" || responseGoogle.givenName,
    lastName: "" || responseGoogle.familyName,
    userName: "",
    password: "" || responseGoogle.googleId,
    confirmPassword: "" || responseGoogle.googleId,
    image: "" || responseGoogle.imageUrl,
    phone: "",
    mail: "" || responseGoogle.email,
    state: "",
    price: "",
    qualifications: [],
    workZones: [],
    jobTypes: [],
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
    if (!values.mail) {
      errors.mail = "Campo obligatorio";
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
    if (!values.workZones.length) {
      errors.workZones = "Campo obligatorio";
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
      workZones: [],
    }));
  }

  function handleZoneChange(evento) {
    if (!input.workZones.includes(evento.target.value)) {
      setInput((input) => ({
        ...input,
        workZones: [...input.workZones, evento.target.value],
      }));
    }
  }

  function deleteZone(evento) {
    evento.preventDefault();

    setInput((input) => ({
      ...input,
      workZones: input.workZones.filter((c) => c !== evento.target.value),
    }));
  }

  function addJob(job) {
    if (input.jobTypes.includes(job)) {
      const newFilter = input.jobTypes.filter((e) => e !== job);
      setInput({
        ...input,
        jobTypes: newFilter,
      });
    } else {
      setInput({
        ...input,
        jobTypes: [...input.jobTypes, job],
      });
    }
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
        const respuesta = await axios.post(TECH_USERS_URL, input);

        if (!respuesta.data.message) {
           Swal.mixin({
            toast: true,

            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
            showConfirmButton: false,
            timer: 2000,
          });

          history.push("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `${respuesta.data.message}`,
            footer: '<a href="">Why do I have this issue?</a>',
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      MySwal.fire({
        title: "Se encontraron errores",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
    }
  };

  return (
    <StyledDiv>
      <form id="formCreate" onSubmit={(e) => handleSubmit(e)}>
        <Form>
          <div className="title">
            <h4>Usuario Técnico</h4>
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
                  <label>* Confirmar Password:</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    autoComplete="off"
                    value={input.confirmPassword}
                    onChange={handleInputChange}
                  />
                </Input>
              )}

              {!responseGoogle.email && (
                <Input error={input.errors.mail}>
                  <label>* Email:</label>
                  <input
                    type="email"
                    name="mail"
                    autoComplete="off"
                    value={input.email}
                    onChange={handleInputChange}
                  />
                </Input>
              )}
            </Left>
            <Right>
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
              <Input>
                <label>Precio Base:</label>
                <input
                  type="number"
                  name="price"
                  autoComplete="off"
                  value={input.price}
                  onChange={handleInputChange}
                />
              </Input>
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
              <Input error={input.errors.workZones}>
                {allCities.length > 1 && (
                  <div className="flexZones">
                    <div className="flexZonesNew">
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
                    <div>
                      <div className="flexZones__ul">
                        {input.workZones &&
                          input.workZones.map((zone) => {
                            return (
                              <div className="flexZones__ul--item">
                                <p>{zone}</p>
                                <button
                                  className="btn-zone"
                                  value={zone}
                                  onClick={deleteZone}
                                >
                                  x
                                </button>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                )}
              </Input>
              <InputJobs error={input.errors.jobTypes}>
                <label>* Tipos de Trabajo:</label>
                <div className="gridJobs">
                  {jobTypesRedux &&
                    jobTypesRedux.map((j, idx) => {
                      return (
                        <div>
                          <Checkbox
                            key={idx}
                            label={j}
                            onChange={() => addJob(j)}
                          />
                        </div>
                      );
                    })}
                </div>
              </InputJobs>
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

export default FormTechnicUser;
