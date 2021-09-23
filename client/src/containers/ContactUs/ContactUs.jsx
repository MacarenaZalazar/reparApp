import React, { useState } from "react";
// import SocialLinks from "../../components/SocialLinks/SocialLinks";
// import { socialMedia } from "../../utils/reparAppInfo";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { StyledDiv, Form, Input, Button } from "./stylesContactUs";
import axios from "axios";
import { CONTACT_URL } from "../../utils/constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const ContactUs = () => {
  // const { instagram, facebook, linkedin, github } = socialMedia;
  const [input, setInput] = useState({
    mail: "",
    description: "",
    errors: {},
  });

  function validate(values) {
    let errors = {};
    if (!values.mail) {
      errors.mail = "Campo obligatorio";
    }
    if (!values.description) {
      errors.description = "Campo obligatorio";
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
        await axios.post(CONTACT_URL, input);
        MySwal.fire({
          title: "Su mensaje ha sido enviado!",
          confirmButtonColor: "#0a122aff",
          background: "#e7decdff",
          backdrop: "rgba(10,18,42,0.6)",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      MySwal.fire({
        title: "Datos Incompletos",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
    }
  };

  return (
    <StyledDiv>
      <div className="container">
        <form id="formContact" onSubmit={handleSubmit}>
          <Form>
            <div className="title">
              <h4>¡Envianos un mensaje!</h4>
            </div>
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
            <Input error={input.errors.mail}>
              <label>* Mensaje:</label>
              <textarea
                name="description"
                autoComplete="off"
                value={input.description}
                onChange={handleInputChange}
              />
            </Input>
            <Button type="submit">
              <p>Enviar</p>
            </Button>
          </Form>
        </form>
      </div>
    </StyledDiv>
  );
};

export default ContactUs;
