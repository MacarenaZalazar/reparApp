import { StyledDiv, LogoDiv, NavBarDiv } from "./styledNavBar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Logo from '../../utils/wrench.png'


const NavBar = () => {
  return (
    <StyledDiv>
      <NavBarDiv className="container">
        <LogoDiv>
          <img src={Logo} alt="logo"/>
          <h4>ReparApp</h4>
        </LogoDiv>
        <Searchbar />
      </NavBarDiv>
    </StyledDiv>
  );
};

export default NavBar;
