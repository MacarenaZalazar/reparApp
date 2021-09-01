import { StyledDiv, LogoDiv, NavBarDiv } from "./styledNavBar";
import Searchbar from "../../components/Searchbar/Searchbar";

const NavBar = () => {
  return (
    <StyledDiv>
      <NavBarDiv className="container">
        <LogoDiv>
          <h4>Soy el logo</h4>
        </LogoDiv>
        <Searchbar />
      </NavBarDiv>
    </StyledDiv>
  );
};

export default NavBar;
