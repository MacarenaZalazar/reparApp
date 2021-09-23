import styled from "styled-components";
// import gifHero from "../../utils/gif/hero.gif";
import gifHero from "../../utils/gif/hero3.gif";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 4.4rem);
  padding-top: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${gifHero});
  background-position: center left;
  background-size: 28%;
  background-repeat: no-repeat;
`;
export const HeroDiv = styled.div`
  width: 100%;
`;
