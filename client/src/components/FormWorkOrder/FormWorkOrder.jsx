import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Form, Input, StyledDiv } from "./styledFormWorkOrder";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobTypesAll } from "../../redux/actions/jobTypes";
import { getCities, getStates } from "../../redux/actions/techUsers/index";
import { REQUEST_URL } from "../../utils/constants";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const FormWorkOrder = () => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  let config = {
    headers: {
      "x-access-token": user && user.token,
    },
  };

  const history = useHistory();
  const [input, setInput] = useState({
    title: "",
    description: "",
    workImage: "",
    workType: "",
    state: "",
    zone: "",
    errors: {},
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobTypesAll());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const { allStates, allCities } = useSelector((state) => state);
  const jobTypes = useSelector((state) => state.jobTypes);

  function validate(values) {
    let errors = {};
    if (!values.title) {
      errors.title = "Campo obligatorio";
    }
    if (!values.description) {
      errors.description = "Campo obligatorio";
    }
    if (!values.workType) {
      errors.workType = "Campo obligatorio";
    }
    if (!values.state) {
      errors.state = "Campo obligatorio";
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
        await axios.post(
          `${REQUEST_URL}?userFinal=${user.idUserFinal}`,
          input,
          config
        );

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
          title: "Orden de trabajo creada con exito",
        });

        history.push("/home");
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
            <h4>Nueva solicitud de trabajo</h4>
          </div>
          <div className="flexWorks">
            <div className="left">
              <Input error={input.errors.title}>
                <label>* Titulo:</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={handleInputChange}
                />
              </Input>
              <Input error={input.errors.description}>
                <label>* Descripcion:</label>
                <textarea
                  autoComplete="off"
                  name="description"
                  value={input.description}
                  onChange={handleInputChange}
                />
              </Input>
            </div>
            <div className="right">
              <Input error={input.errors.workType}>
                <label>* Tipo de trabajo:</label>
                <select name="workType" onChange={handleInputChange}>
                  <option value=""></option>
                  {jobTypes &&
                    jobTypes.map((j, idx) => {
                      return (
                        <option value={j} key={idx}>
                          {j}
                        </option>
                      );
                    })}
                </select>
              </Input>
              <Input>
                <label>Imagen:</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="workImage"
                  value={input.workImage}
                  onChange={handleInputChange}
                />
              </Input>
              <Input error={input.errors.state}>
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
                  </div>
                )}
              </Input>
            </div>
          </div>
          * estos campos son obligatorios
          <button type="submit">Crear Pedido de Trabajo</button>
        </Form>
      </form>
    </StyledDiv>
  );
};

export default FormWorkOrder;
