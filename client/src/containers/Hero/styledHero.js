import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  video {
    position: absolute;
    top: 0;
    width: 100%;
    object-fit: cover;
    z-index: -100;
    opacity: 75%;
  }
`;
export const HeroDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
