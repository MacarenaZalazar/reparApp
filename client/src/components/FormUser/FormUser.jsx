import React, { useState }  from 'react';
import { StyledDiv, Input } from './Styles';

const FormUser = () => {
    const [input, setInput] = useState({
        name: "",
        lastName: "",
        username: "",
        password: "",
        image: "",
        phone: "",
        email: "",
        zones: [],
        errors: {},
      });

      const [zone, setZone] = useState("");
      console.log(input.zones)
      function validate(values) {
        let errors = {};
        if (!values.name) {
          errors.name = "Campo obligatorio";
        }
        if (!values.lastName) {
          errors.lastName = "Campo obligatorio";
        }
        if (!values.username) {
          errors.username = "Campo obligatorio";
        }
        if (!values.password) {
          errors.password = "Campo obligatorio";
        }
        if (!values.zones.length) {
          errors.zones = "Campo obligatorio";
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
        if (!input.zones.includes(zone) && zone) {
          setInput({
            ...input,
            zones: [...input.zones, zone],
          });
          setZone("");
        } else {
          if (zone) alert("Ya existe");
          else alert("No puede estar vacío");
        }
      }
    
      const handleSubmit = (e) => {
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
          alert("Formulario correcto");
          console.log(input);
        } else {
          alert("Se encontraron errores");
        }
      };    
   
    return (
        <StyledDiv>
      <form id="formCreate" onSubmit={(e) => handleSubmit(e)}>
        <Input>
          <label>Nombre:</label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
          />
          <div className="error">
            {input.errors.name && <p>Campo obligatorio</p>}
          </div>
        </Input>
        <Input>
          <label>Apellido:</label>
          <input
            autoComplete="off"
            type="text"
            name="lastName"
            value={input.lastName}
            onChange={handleInputChange}
          />
          <div className="error">
            {input.errors.lastName && <p>Campo obligatorio</p>}
          </div>
        </Input>
        <Input>
          <label>Username:</label>
          <input
            type="text"
            autoComplete="off"
            name="username"
            value={input.username}
            onChange={handleInputChange}
          />
          <div className="error">
            {input.errors.username && <p>Campo obligatorio</p>}
          </div>
        </Input>
        <Input>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            autoComplete="off"
            value={input.password}
            onChange={handleInputChange}
          />
          <div className="error">
            {input.errors.password && <p>Campo obligatorio</p>}
          </div>
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
            name="email"
            autoComplete="off"
            value={input.email}
            onChange={handleInputChange}
          />
        </Input>
        <Input>
          <label>Zonas:</label>
          <input
            type="text"
            autoComplete="off"
            name="zone"
            value={zone}
            onChange={handleZoneChange}
          />
          <div className="error">
            {input.errors.zones && <p>Campo obligatorio</p>}
          </div>
          <button onClick={(e) => addZone(e)}>Agregar Zona</button>
        </Input>
        <button type="submit">Crear Usuario</button>
      </form>
    </StyledDiv>
    );
};

export default FormUser;