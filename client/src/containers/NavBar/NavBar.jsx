import { UserName, StyledDiv, LogoDiv, NavBarDiv } from "./styledNavBar";
import Logo from "../../utils/wrench.png";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getTechUsersAll } from "../../redux/actions/techUsers/index";

import DropdownMenu from "../../components/Dropdown/DropdownMenu";
import { RiMapPinUserFill } from "react-icons/ri";

const NavBar = () => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const dispatch = useDispatch();
  // const showAlert = async (e) => {
  //   e.preventDefault();
  //   MySwal.fire({
  //     title: "Elige un tipo de usuario",
  //     showDenyButton: true,
  //     confirmButtonText:
  //       '<a style=”color:white” href="/signinTech">Técnico</a> ',
  //     denyButtonText: '<a className="enlace"  href="/signinFinal">Final</a> ',
  //   });
  // };

  // const dispatch = useDispatch();

  function onClick() {
    dispatch(getTechUsersAll());
  }

  return (
    <StyledDiv>
      <NavBarDiv className="container">
        <Link to="/" className="link">
          <LogoDiv>
            <img src={Logo} alt="logo" />
            <h4>ReparApp</h4>
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
        <div className="navButtons">
          <DropdownMenu onClick={onClick} />

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
        </div>
      </NavBarDiv>
    </StyledDiv>
  );
};

export default NavBar;
