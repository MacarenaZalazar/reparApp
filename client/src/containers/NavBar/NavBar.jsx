import { StyledDiv, LogoDiv, NavBarDiv } from "./styledNavBar";
import Logo from "../../utils/wrench.png";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const NavBar = () => {
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
    <StyledDiv>
      <NavBarDiv className="container">
        <LogoDiv>
          <img src={Logo} alt="logo" />
          <h4>ReparApp</h4>
        </LogoDiv>
        <div>
          <Link className="linkLogin" to="/login">
            <span>Login</span>
          </Link>
          <button onClick={showAlert} className="linkSignin" to="/signin">
            <span>Signin</span>
          </button>
        </div>
      </NavBarDiv>
    </StyledDiv>
  );
};

export default NavBar;
