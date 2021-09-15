import styled from "styled-components";
// import gifHero from "../../utils/gif/hero.gif";
import gifHero from "../../utils/gif/hero3.gif";

export const StyledDiv = styled.div`
  background-color: #fbfaf8;
  width: 100%;
  height: calc(100vh - 11.75rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${gifHero});
  background-size: 28%;
  background-repeat: no-repeat;
`;
export const HeroDiv = styled.div`
  width: 100%;
`;
