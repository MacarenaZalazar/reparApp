import React, { useState } from "react";
// import SocialLinks from "../../components/SocialLinks/SocialLinks";
// import { socialMedia } from "../../utils/reparAppInfo";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { StyledDiv, Form, Input, Button } from "./stylesContactUs";
import axios from "axios";
import { CONTACT_URL } from "../../utils/constants";

const ContactUs = () => {
  // const { instagram, facebook, linkedin, github } = socialMedia;
  const [input, setInput] = useState({
    mail: "",
    user: "",
    description: "",
    errors: {},
  });

  function validate(values) {
    let errors = {};
    if (!values.user) {
      errors.user = "Campo obligatorio";
    }
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
        alert("Su mensaje ha sido enviado");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Hay errores");
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
