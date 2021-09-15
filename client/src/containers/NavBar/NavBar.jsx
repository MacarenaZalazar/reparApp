import {
  UserName,
  StyledDiv,
  LogoDiv,
  NavBarDiv,
  ButtonsDiv,
  Button,
} from "./styledNavBar";
import Logo from "../../utils/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTechUsersAll } from "../../redux/actions/techUsers/index";
import Swal from "sweetalert2";
// import DropdownMenu from "../../components/Dropdown/DropdownMenu";
import { RiMapPinUserFill } from "react-icons/ri";

const NavBar = () => {
  const history = useHistory();
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const dispatch = useDispatch();

  const showAlert = async (e) => {
    e.preventDefault();

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
    <StyledDiv data-aos="fade-down">
      <NavBarDiv className="container">
        <Link to="/">
          <LogoDiv>
            <img src={Logo} alt="logo" />
          </LogoDiv>
        </Link>

        <UserName>
          {user && user.userName && (
            <div>
              {user.roles[0].name === "userFinal" ? (
                <Link to="/usuarioFinal" className="link">
                  <div className="flex">
                    <RiMapPinUserFill />
                    <p> Hola, {user.userName} </p>
                  </div>
                </Link>
              ) : user.roles[0].name === "userTech" ? (
                <Link to="/usuarioTech" className="link">
                  <div className="flex">
                    <RiMapPinUserFill />
                    <p> Hola, {user.userName} </p>
                  </div>
                </Link>
              ) : (
                <Link to="/admin">
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
          {!user && (
            <Button onClick={showAlert}>
              <p>Registrarse</p>
            </Button>
          )}
          {!user && (
            <Button>
              <Link className="linkLogin" to="/login">
                <p>Ingresar</p>
              </Link>
            </Button>
          )}
          {user && (
            <Button onClick={logoutAlert}>
              <Link className="linkLogin" to="/login">
                <p>Cerrar Sesión</p>
              </Link>
            </Button>
          )}
        </ButtonsDiv>

        {/* <div className="navButtons"> */}
        {/* <DropdownMenu onClick={onClick} /> */}

        {/* { techUsers.length > 1 && <Link  onClick={onClick} to='/home' className='linkLogin'>
            <span>Inicio</span>
          </Link>}

        <div className="navButtons">
          {techUsers.length > 1 && (
            <Link onClick={onClick} to="/home" className="linkLogin">
              <span>Inicio</span>
            </Link>
          )}

          <Link className="linkLogin" to="/login">
            <span>Login</span>
          </Link>
          <button onClick={showAlert} className="linkSignin" to="/signin">
            <span>SignIn</span>
          </button> */}
        {/* </div> */}
      </NavBarDiv>
    </StyledDiv>
  );
};

export default NavBar;
