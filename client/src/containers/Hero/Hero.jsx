import { StyledDiv, HeroDiv } from "./styledHero";
import Searchbar from "../../components/Searchbar/Searchbar";

const Hero = () => {
  return (
    <StyledDiv>
      <HeroDiv className="container">
        <Searchbar />
      </HeroDiv>
    </StyledDiv>
  );
};

export default Hero;
