import styled from "styled-components";
import gifHero from "../../utils/gif/hero.gif";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 7rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${gifHero});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const HeroDiv = styled.div`
  width: 100%;
`;
