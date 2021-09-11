import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Form, Input, StyledDiv } from "./styledFormWorkOrder";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobTypesAll } from "../../redux/actions/jobTypes";

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
    errors: {},
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobTypesAll());
  }, []);

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
        await axios.post(
          `http://localhost:3001/request?userFinal=${user.idUserFinal}`,
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
      alert("Se encontraron errores");
    }
  };

  return (
    <StyledDiv>
      <form id="formCreate" onSubmit={(e) => handleSubmit(e)}>
        <Form>
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
            <input
              autoComplete="off"
              type="text"
              name="description"
              value={input.description}
              onChange={handleInputChange}
            />
          </Input>
          <Input>
            <label>* Tipo de trabajo:</label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="workType"
              onChange={handleInputChange}
            >
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
          * estos campos son obligatorios
          <button type="submit">Crear Pedido de Trabajo</button>
        </Form>
      </form>
    </StyledDiv>
  );
};

export default FormWorkOrder;
