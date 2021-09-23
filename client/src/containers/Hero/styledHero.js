import styled from "styled-components";
// import gifHero from "../../utils/gif/hero.gif";
import gifHero from "../../utils/gif/hero3.gif";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 10.75rem);

  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${gifHero});
  background-position: center left;
  background-size: 28%;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background-position: center top;
    background-size: 40%;
  }
  @media screen and (max-width: 480px) {
    background-position: center top;
    background-size: 60%;
  }
`;
export const HeroDiv = styled.div`
  width: 100%;
`;
