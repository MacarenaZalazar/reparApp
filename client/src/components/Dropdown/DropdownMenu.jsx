import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { BsJustify } from "react-icons/bs";

const DropdownMenu = ({ onClick }) => {
  const history = useHistory();
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  const showAlert = async (e) => {
    e.preventDefault();
    // MySwal.fire({
    //   title: "Elige un tipo de usuario",
    //   showDenyButton: true,
    //   confirmButtonText:
    //     '<a style=”color:white” href="/signinTech">Técnico</a> ',
    //   denyButtonText: '<a className="enlace"  href="/signinFinal">Final</a> ',
    // });

    const { value: fruit } = await Swal.fire({
      input: "select",
      inputOptions: {
        Tipo: {
          tech: "Técnico",
          final: "Final",
        },
      },
      inputPlaceholder: "Selecciona tipo",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "tech") {
            history.push("/signinTech");
            resolve();
          } else {
            history.push("/signinFinal");
            resolve();
          }
        });
      },
    });
  };

  const logoutAlert = () => {
    window.sessionStorage.removeItem("user");

    Swal.fire({
      icon: "success",
      title: "Sesion cerrada",
      showConfirmButton: false,
      timer: 2000,
    });
    history.push("/");
  };

  return (
    <>
      <DropdownButton drop="start" variant="secondary" title={<BsJustify />}>
        <Dropdown.Item href="/home">Inicio</Dropdown.Item>
        {!user && <Dropdown.Item href="/login">Ingresar</Dropdown.Item>}
        {!user && (
          <Dropdown.Item onClick={showAlert}>Registrarse</Dropdown.Item>
        )}
        <Dropdown.Item href="/about">Sobre Nosotr@s</Dropdown.Item>
        {/* <Dropdown.Item href="/contacto">Contacto</Dropdown.Item> */}
        {user && <Dropdown.Item onClick={logoutAlert}>Logout</Dropdown.Item>}
      </DropdownButton>
    </>
  );
};

export default DropdownMenu;
