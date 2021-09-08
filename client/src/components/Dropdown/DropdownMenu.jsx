import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BsJustify } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const MySwal = withReactContent(Swal);

const DropdownMenu = ({ onClick }) => {
  const history = useHistory();
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  const showAlert = async (e) => {
    e.preventDefault();
    MySwal.fire({
      title: "Elige un tipo de usuario",
      showDenyButton: true,
      confirmButtonText:
        '<a style=”color:white” href="/signinTech">Técnico</a> ',
      denyButtonText: '<a className="enlace"  href="/signinFinal">Final</a> ',
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
      <DropdownButton drop="start" variant="secondary">
        {/* <BsJustify/> */}
        <Dropdown.Item href="/home">Inicio</Dropdown.Item>
        {!user && <Dropdown.Item href="/login">Ingresar</Dropdown.Item>}
        {!user && (
          <Dropdown.Item onClick={showAlert}>Registrarse</Dropdown.Item>
        )}
        <Dropdown.Item href="/about">Sobre Nosotr@s</Dropdown.Item>
        <Dropdown.Item href="/contacto">Contacto</Dropdown.Item>
        {user && <Dropdown.Item onClick={logoutAlert}>Logout</Dropdown.Item>}
      </DropdownButton>
    </>
  );
};

export default DropdownMenu;
