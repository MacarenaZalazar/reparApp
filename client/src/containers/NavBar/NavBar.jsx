import { StyledDiv, LogoDiv, NavBarDiv } from "./styledNavBar";
import Logo from "../../utils/wrench.png";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { getTechUsersAll } from "../../redux/actions/techUsers/index";
import { useSelector } from "react-redux";

const MySwal = withReactContent(Swal);

const NavBar = () => {
  const dispatch = useDispatch();
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

  function onClick() {
    dispatch(getTechUsersAll());
  }
  const { techUsers } = useSelector((state) => state);
  return (
    <StyledDiv>
      <NavBarDiv className="container">
        <Link onClick={onClick} to="/home" className="linkHome">
          <LogoDiv>
            <img src={Logo} alt="logo" />
            <h4>ReparApp</h4>
          </LogoDiv>
        </Link>
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
          </button>
        </div>
      </NavBarDiv>
    </StyledDiv>
  );
};

export default NavBar;
