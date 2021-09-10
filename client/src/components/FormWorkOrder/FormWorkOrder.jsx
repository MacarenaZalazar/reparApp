import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobTypesAll } from "../../redux/actions/jobTypes";

const FormWorkOrder = () => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const history = useHistory();
  const [input, setInput] = useState({
    title: "",
    description: "",
    workImage: "",
    workType: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobTypesAll());
  }, []);

  const jobs = useSelector((state) => state.jobTypes);

  function validate(values) {
    let errors = {};
    if (!values.title) {
      errors.title = "Campo obligatorio";
    }
    if (!values.description) {
      errors.lastName = "Campo obligatorio";
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
        console.log(input);
        await axios.post(
          `http://localhost:3001/request?userFinal=${user.id}`,
          input
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
    <div>
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
            <label>* Imagen:</label>
            <input
              type="text"
              autoComplete="off"
              name="workImage"
              value={input.workImage}
              onChange={handleInputChange}
            />
          </Input>
          <Select
            error={input.errors.workType}
            name="workType"
            onChange={handleInputChange}
          >
            {jobs &&
              jobs.map((job, idx) => {
                return (
                  <option name="workType" value={job} key={idx}>
                    {job}
                  </option>
                );
              })}
          </Select>
          * estos campos son obligatorios
          <button type="submit">Crear Usuario</button>
        </Form>
      </form>
    </div>
  );
};

export default FormWorkOrder;
