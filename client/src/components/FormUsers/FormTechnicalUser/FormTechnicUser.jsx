import { StyledDiv, Input, Form, InputJobs } from "../stylesFormUsers";
import { useState } from "react";
import { useSelector } from "react-redux";
import { jobs } from "../../../utils/mockData";
import axios from "axios";
import Checkbox from "../../Checkbox/Checkbox";
import { useHistory } from "react-router-dom";

const FormTechnicUser = () => {
  const history = useHistory();
  const jobTypesRedux = useSelector((state) => state.jobTypes);

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    userName: "",
    password: "",
    image: "",
    phone: "",
    mail: "",
    qualifications: [],
    workZones: [],
    jobTypes: [],
    errors: {},
  });
  const [qualification, setQualification] = useState("");
  const [zone, setZone] = useState("");
  const [job, setJob] = useState("");

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
    if (!values.qualifications.length) {
      errors.qualifications = "Campo obligatorio";
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
  function handleZoneChange(evento) {
    setZone(evento.target.value);
  }
  function addZone(evento) {
    evento.preventDefault();
    document.getElementsByClassName("zoneInput")[0].value = "";
    if (!input.workZones.includes(zone) && zone) {
      setInput({
        ...input,
        workZones: [...input.workZones, zone],
      });
      setZone("");
    } else {
      if (zone) alert("Ya existe");
      else alert("No puede ser vacío");
    }
  }
  // Funcion para cambiar job y boton para añadir el array
  // function handleJobChange(evento) {
  //   setJob(evento.target.value);
  // }

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

  // function addJob(evento) {
  //   evento.preventDefault();
  //   document.getElementsByClassName("jobInput")[0].value = "";
  //   if (!input.jobTypes.includes(job) && job) {
  //     setInput({
  //       ...input,
  //       jobTypes: [...input.jobTypes, job],
  //     });
  //     setJob("");
  //   } else {
  //     if (zone) alert("Ya existe");
  //     else alert("No puede ser vacío");
  //   }
  // }
  // Funcion para cambiar certificaciones y boton para añadir el array
  function handleQualificationChange(evento) {
    setQualification(evento.target.value);
  }
  function addQualification(evento) {
    evento.preventDefault();
    if (!input.qualifications.includes(qualification) && qualification) {
      setInput({
        ...input,
        qualifications: [...input.qualifications, qualification],
      });
      setQualification("");
    } else {
      if (qualification) alert("Ya existe");
      else alert("No puede ser vacío");
    }
    document.getElementsByClassName("qualificationInput")[0].value = "";
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
        await axios.post("http://localhost:3001/techUsers", input);
        alert("Usuario creado");
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
              type="password"
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
              value={input.email}
              onChange={handleInputChange}
            />
          </Input>
          <Input error={input.errors.workZones}>
            <label>* Zonas:</label>
            <input
              className="zoneInput"
              type="text"
              autoComplete="off"
              name="zone"
              onChange={handleZoneChange}
            />

            <button onClick={(e) => addZone(e)}>Agregar Zona</button>
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
          <Input error={input.errors.qualifications}>
            <label>* Certificaciones:</label>
            <input
              className="qualificationInput"
              type="text"
              name="certification"
              autoComplete="off"
              onChange={handleQualificationChange}
            />

            <button onClick={(e) => addQualification(e)}>
              Agregar Certificación
            </button>
          </Input>
          <span>* estos campos son requeridos</span>

          <button type="submit">Crear Usuario</button>
        </Form>
      </form>
    </StyledDiv>
  );
};

export default FormTechnicUser;
