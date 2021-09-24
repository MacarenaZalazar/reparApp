import {
  UserName,
  StyledDiv,
  LogoDiv,
  NavBarDiv,
  ButtonsDiv,
  Button,
  IconMenu,
} from "./styledNavBar";
import Logo from "../../utils/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { getTechUsersAll } from "../../redux/actions/techUsers/index";
import Swal from "sweetalert2";
// import DropdownMenu from "../../components/Dropdown/DropdownMenu";
import { RiMapPinUserFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { restoreState } from "../../redux/actions/allUsers/index";
import { useState } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const [clickRes, setClickRes] = useState(false);

  const handleClick = () => {
    setClickRes(!clickRes);
  };
  const showAlert = async (e) => {
    e.preventDefault();


    await Swal.fire({
      input: "select",
      title: "Registrarse como:",
      backdrop: "rgba(10,18,42,0.6)",
      icon: "question",
      iconColor: "#f06449ff",
      inputOptions: {
        Tipo: {
          tech: "Técnico - Profesional",
          final: "Usuario Final",
        },
      },
      confirmButtonColor: "#0a122aff",
      cancelButtonColor: "#f06449ff",
      background: "#e7decdff",
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
      background: "#e7decdff",
      backdrop: "rgba(10,18,42,0.6)",
      showConfirmButton: false,
      timer: 2000,
    });
    dispatch(restoreState());
    history.push("/");
  };

  return (
    <StyledDiv>
      <div className="container">
        <IconMenu onClick={() => handleClick()}>
          <HiMenu size={"5em"} />
        </IconMenu>
        <NavBarDiv click={clickRes}>
          {user && user.roles[0].name === "admin" ? (
            <Link to="/admin">
              <LogoDiv>
                <img src={Logo} alt="logo" />
              </LogoDiv>
            </Link>
          ) : (
            <Link
              to="/"
              onClick={() => {
                dispatch(restoreState());
                handleClick();
              }}
            >
              <LogoDiv>
                <img src={Logo} alt="logo" />
              </LogoDiv>
            </Link>
          )}

          <UserName>
            {user && user.userName && (
              <div>
                {user.roles[0].name === "userFinal" ? (
                  <Link
                    to="/usuarioFinal"
                    className="link"
                    onClick={() => handleClick()}
                  >
                    <div className="flex">
                      <RiMapPinUserFill />
                      <p> Hola, {user.userName} </p>
                    </div>
                  </Link>
                ) : user.roles[0].name === "userTech" ? (
                  <Link
                    to="/usuarioTech"
                    className="link"
                    onClick={() => handleClick()}
                  >
                    <div className="flex">
                      <RiMapPinUserFill />
                      <p> Hola, {user.userName} </p>
                    </div>
                  </Link>
                ) : (
                  <Link to="/admin" onClick={() => handleClick()}>
                    <div className="flex link">
                      <RiMapPinUserFill />
                      <p> Hola, {user.userName} </p>
                    </div>
                  </Link>
                )}
              </div>
            )}
          </UserName>

          <ButtonsDiv>
            {user &&
              user.hasOwnProperty("roles") &&
              user.roles[0].name === "userFinal" && (
                <Link to="/newWorkOrder" onClick={() => handleClick()}>
                  <Button>
                    <p>Nueva Solicitud</p>
                  </Button>
                </Link>
              )}

            {!user && (
              <Button
                onClick={(e) => {
                  showAlert(e);
                  handleClick();
                }}
              >
                <p>Registrarse</p>
              </Button>
            )}
            {!user && (
              <Link
                className="linkLogin"
                to="/login"
                onClick={() => handleClick()}
              >
                <Button>
                  <p>Ingresar</p>
                </Button>
              </Link>
            )}
            {user && (
              <Link
                className="linkLogin"
                to="/login"
                onClick={() => handleClick()}
              >
                <Button
                  onClick={() => {
                    logoutAlert();
                    handleClick();
                  }}
                >
                  <p>Cerrar Sesión</p>
                </Button>
              </Link>
            )}
          </ButtonsDiv>
        </NavBarDiv>
      </div>
    </StyledDiv>
  );
};

export default NavBar;
