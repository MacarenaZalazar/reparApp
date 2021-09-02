import { StyledDiv, LogoDiv, NavBarDiv } from "./styledNavBar";
import Logo from "../../utils/wrench.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledDiv>
      <NavBarDiv className="container">
        <LogoDiv>
          <img src={Logo} alt="logo" />
          <h4>ReparApp</h4>
        </LogoDiv>
        <Link className="link" to="/login">
          <span>Login</span>
        </Link>
      </NavBarDiv>
    </StyledDiv>
  );
};

export default NavBar;
