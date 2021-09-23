import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: grid;
  padding: 1.5rem 5rem;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
