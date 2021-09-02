import { StyledDiv, LogoDiv, NavBarDiv } from "./styledNavBar";
import Logo from "../../utils/wrench.png";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledDiv>
      <NavBarDiv className="container">
        <LogoDiv>
          <img src={Logo} alt="logo" />
          <h4>ReparApp</h4>
        </LogoDiv>
        <Route exact path="/home">
          <Link to="/">
            <p>Volver</p>
          </Link>
        </Route>
      </NavBarDiv>
    </StyledDiv>
  );
};

export default NavBar;
