import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {BsJustify} from 'react-icons/bs'

const MySwal = withReactContent(Swal);

const DropdownMenu = ({onClick}) => {
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

    return (
        <div> 
        <DropdownButton
            id='dropdown-button-drop-start'
            drop='start'
            variant="secondary"
            >
            <BsJustify/>
            <Dropdown.Item href="/home">Inicio</Dropdown.Item>
            <Dropdown.Item href="/login">Ingresar</Dropdown.Item>
            <Dropdown.Item onClick={showAlert} >Registrarse</Dropdown.Item>
            <Dropdown.Item href="/about">Sobre Nosotr@s</Dropdown.Item>
            <Dropdown.Item href="/contacto">Contacto</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default DropdownMenu;


